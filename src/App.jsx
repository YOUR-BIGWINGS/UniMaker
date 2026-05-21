import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset, Window, WindowHeader, WindowContent, Button, AppBar, Toolbar, TextInput } from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

// ---------------------------------------------------------
// APP VERSION - Easy to find in the codebase because I'm stupid
// ---------------------------------------------------------
export const APP_VERSION = 'ALPHA VER 1.0.0';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  ${styleReset}
  body, html, #root {
    height: 100%;
    margin: 0;
    overflow: hidden;
    background-color: #008080; /* Windows 95 classic teal background for the Brain Board */
    font-family: 'ms_sans_serif', sans-serif;
  }
`;

function App() {
  const [appVersion, setAppVersion] = useState(APP_VERSION);
  const [workspaces, setWorkspaces] = useState([{ id: 1, name: 'Workspace 1', notes: [], connections: [] }]);
  const [currentWorkspaceId, setCurrentWorkspaceId] = useState(1);
  const [showWorkspacePage, setShowWorkspacePage] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  const currentWorkspace = workspaces.find(w => w.id === currentWorkspaceId) || workspaces[0];
  const notes = currentWorkspace.notes;
  const connections = currentWorkspace.connections;

  const setNotes = (updater) => {
    setWorkspaces(prev => prev.map(w => {
      if (w.id === currentWorkspaceId) {
        return { ...w, notes: typeof updater === 'function' ? updater(w.notes) : updater };
      }
      return w;
    }));
  };

  const setConnections = (updater) => {
    setWorkspaces(prev => prev.map(w => {
      if (w.id === currentWorkspaceId) {
        return { ...w, connections: typeof updater === 'function' ? updater(w.connections) : updater };
      }
      return w;
    }));
  };

  const [activeTool, setActiveTool] = useState('select'); // 'select' or 'string'
  const [draggingId, setDraggingId] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [draftLine, setDraftLine] = useState(null); // { startNoteId: number, endX: number, endY: number }
  const [maximizedNoteId, setMaximizedNoteId] = useState(null);
  const [isHoveringTrash, setIsHoveringTrash] = useState(false);

  const addNote = () => {
    const newId = Date.now();
    setNotes([...notes, { id: newId, x: window.innerWidth / 2 - 125, y: window.innerHeight / 2 - 100, text: '', title: `Note ${newId.toString().slice(-4)}` }]);
  };

  const handlePointerDown = (e, id) => {
    // If the tool is select but clicking inside the multiline input, let native focus happen instead of moving box
    if (activeTool === 'select' && e.target.tagName.toLowerCase() === 'textarea') {
      return;
    }

    if (activeTool === 'select') {
      const note = notes.find((n) => n.id === id);
      if (!note) return;

      setDraggingId(id);
      setOffset({
        x: e.clientX - note.x,
        y: e.clientY - note.y,
      });
      
      e.target.setPointerCapture(e.pointerId);
    } else if (activeTool === 'string') {
      setDraftLine({ startNoteId: id, endX: e.clientX, endY: e.clientY });
      e.target.setPointerCapture(e.pointerId);
      e.stopPropagation();
    }
  };

  const handlePointerMove = (e) => {
    if (activeTool === 'select' && draggingId !== null) {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === draggingId
            ? { ...note, x: e.clientX - offset.x, y: e.clientY - offset.y }
            : note
        )
      );
      
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      setIsHoveringTrash(elements.some(el => el.id === 'recycle-bin'));
    } else if (activeTool === 'string' && draftLine !== null) {
      setDraftLine({ ...draftLine, endX: e.clientX, endY: e.clientY });
    }
  };

  const handlePointerUp = (e) => {
    if (activeTool === 'select' && draggingId !== null) {
      // Check if dropped into the recycle bin
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      const isOverBin = elements.some(el => el.id === 'recycle-bin');
      
      if (isOverBin) {
        setNotes(prev => prev.filter(n => n.id !== draggingId));
        setConnections(prev => prev.filter(c => c.from !== draggingId && c.to !== draggingId));
        if (maximizedNoteId === draggingId) {
          setMaximizedNoteId(null);
        }
      }

      setDraggingId(null);
      setIsHoveringTrash(false);
      e.target.releasePointerCapture(e.pointerId);
    } else if (activeTool === 'string' && draftLine !== null) {
      // Find the note under the pointer using elementsFromPoint
      let targetId = null;
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      for (const el of elements) {
        const potentialId = el.getAttribute('data-note-id');
        if (potentialId) {
          targetId = parseInt(potentialId, 10);
          break;
        }
      }

      if (targetId !== null && targetId !== draftLine.startNoteId) {
        // Create connection
        setConnections((prev) => [...prev, { from: draftLine.startNoteId, to: targetId }]);
      }
      setDraftLine(null);
      e.target.releasePointerCapture(e.pointerId);
    }
  };

  // Helper to get note center for drawing lines
  const getNoteCenter = (id) => {
    const note = notes.find(n => n.id === id);
    if (!note) return { x: 0, y: 0 };
    return { x: note.x + 125, y: note.y + 75 }; // Approx center of window (width:250, height: ~150)
  };

  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Top Tools AppBar */}
        <AppBar position="relative" style={{ zIndex: 10, position: 'relative' }}>
          <Toolbar style={{ justifyContent: 'space-between', width: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="/logo.png" alt="UniMaker Logo" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                <Button style={{ fontWeight: 'bold', pointerEvents: 'none' }}>UniMaker</Button>
              </div>
              <Button onClick={addNote} title="Add Note Box" style={{ fontWeight: 'bold' }}>📄+</Button>
            </div>
            
            {/* Context Version Display */}
            <TextInput
              value={appVersion}
              onChange={(e) => setAppVersion(e.target.value)}
              style={{ width: '80px', textAlign: 'center' }}
              title="Current Version"
            />
          </Toolbar>
        </AppBar>

        <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
          {/* Left Toolbar */}
          <div style={{ width: '60px', background: '#c6c6c6', borderRight: '2px solid #fff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 0', gap: '8px', zIndex: 10 }}>
            <Button 
              className={activeTool === 'select' ? 'active' : ''}
              active={activeTool === 'select'} 
              onClick={() => setActiveTool('select')} 
              title="Select Tool" 
              style={{ width: '40px', height: '40px', fontSize: '18px' }}
            >
              ↖
            </Button>
            <Button 
              className={activeTool === 'string' ? 'active' : ''}
              active={activeTool === 'string'} 
              onClick={() => setActiveTool('string')} 
              title="Line Tool" 
              style={{ width: '40px', height: '40px', fontSize: '18px' }}
            >
              〰️
            </Button>
            
            <div style={{ flex: 1 }} /> {/* Spacer */}
            
            {/* Recycle Bin */}
            <div id="recycle-bin" style={{ marginBottom: '10px' }}>
              <Button
                active={isHoveringTrash}
                className={isHoveringTrash ? 'active' : ''}
                style={{
                  width: '50px',
                  height: 'auto',
                  padding: '8px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'black',
                  fontFamily: 'ms_sans_serif',
                  fontSize: '10px',
                  pointerEvents: 'none'
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '4px' }}>🗑️</div>
                <span style={{ textAlign: 'center' }}>Trash</span>
              </Button>
            </div>
          </div>

          {/* Brain Board Workspace */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp}>
            {/* Display completed and active connections */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
              {connections.map((conn, idx) => {
                const start = getNoteCenter(conn.from);
                const end = getNoteCenter(conn.to);
                return <line key={idx} x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="#000" strokeWidth="2" />;
              })}
              {draftLine && (
                <line x1={getNoteCenter(draftLine.startNoteId).x} y1={getNoteCenter(draftLine.startNoteId).y} x2={draftLine.endX - 60} y2={draftLine.endY - 48} stroke="#000" strokeWidth="2" strokeDasharray="4" />
              )}
            </svg>

            {notes.map((note) => {
              const isMaximized = maximizedNoteId === note.id;
              
              return (
              <Window
                key={note.id}
                data-note-id={note.id}
                style={{ 
                  position: 'absolute', 
                  left: isMaximized ? 0 : note.x, 
                  top: isMaximized ? 0 : note.y, 
                  width: isMaximized ? '100%' : 250, 
                  height: isMaximized ? '100%' : 'auto',
                  zIndex: isMaximized ? 100 : 5,
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onPointerDown={(e) => handlePointerDown(e, note.id)}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
              >
                <div style={{ cursor: activeTool === 'select' ? 'grab' : 'default' }}>
                  <WindowHeader className="window-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <input
                      value={note.title || `Note ${note.id.toString().slice(-4)}`}
                      onChange={(e) => {
                         const newNotes = notes.map(n => n.id === note.id ? {...n, title: e.target.value} : n);
                         setNotes(newNotes);
                      }}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'inherit',
                        fontFamily: 'inherit',
                        fontWeight: 'inherit',
                        fontSize: 'inherit',
                        width: 'calc(100% - 30px)',
                        outline: 'none'
                      }}
                      onPointerDown={(e) => e.stopPropagation()}
                    />
                    <Button onClick={(e) => { e.stopPropagation(); setMaximizedNoteId(isMaximized ? null : note.id); }} style={{ width: 24, height: 24, minWidth: 0, padding: 0 }}>
                      <span style={{ transform: isMaximized ? 'none' : 'none', display: 'inline-block' }}>🗖</span>
                    </Button>
                  </WindowHeader>
                </div>
                <WindowContent style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: isMaximized ? '8px' : undefined }}>
                  <TextInput
                    multiline
                    rows={isMaximized ? undefined : 4}
                    placeholder="Type your ideas here..."
                    value={note.text || ''}
                    onChange={(e) => {
                       const newNotes = notes.map(n => n.id === note.id ? {...n, text: e.target.value} : n);
                       setNotes(newNotes);
                    }}
                    fullWidth
                    style={{ 
                      fontFamily: 'ms_sans_serif', 
                      resize: 'none',
                      flex: 1,
                      height: '100%'
                    }}
                  />
                </WindowContent>
              </Window>
            )})}
            
            {/* Workspace Page Overlay */}
            {showWorkspacePage && (
              <Window style={{ position: 'absolute', top: 20, left: 20, right: 20, bottom: 20, zIndex: 150 }}>
                <WindowHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Workspaces</span>
                  <Button onClick={() => setShowWorkspacePage(false)}>X</Button>
                </WindowHeader>
                <WindowContent style={{ height: 'calc(100% - 40px)', overflow: 'auto' }}>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <Button 
                      onClick={() => {
                        const newWs = { id: Date.now(), name: `Workspace ${workspaces.length + 1}`, notes: [], connections: [] };
                        setWorkspaces([...workspaces, newWs]);
                        setCurrentWorkspaceId(newWs.id);
                        setShowWorkspacePage(false);
                      }}
                      style={{ fontWeight: 'bold' }}
                    >
                      + Make a New Workspace
                    </Button>
                    <Button 
                      className={deleteMode ? 'active' : ''}
                      active={deleteMode} 
                      onClick={() => setDeleteMode(!deleteMode)}
                      style={{ fontWeight: 'bold', color: deleteMode ? 'red' : 'inherit' }}
                    >
                      {deleteMode ? '🗑️ Cancel Delete' : '🗑️ Delete Workspaces'}
                    </Button>
                  </div>
                  
                  <div>
                    {workspaces.map(w => (
                      <div key={w.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '10px' }}>
                        <Button 
                          className={w.id === currentWorkspaceId ? 'active' : ''}
                          active={w.id === currentWorkspaceId} 
                          onClick={() => {
                            if (deleteMode) {
                              if (window.confirm(`Are you sure you want to delete workspace "${w.name}"?`)) {
                                const newWorkspaces = workspaces.filter(ws => ws.id !== w.id);
                                if (newWorkspaces.length === 0) {
                                  newWorkspaces.push({ id: Date.now(), name: 'Workspace 1', notes: [], connections: [] });
                                }
                                setWorkspaces(newWorkspaces);
                                if (w.id === currentWorkspaceId) {
                                  setCurrentWorkspaceId(newWorkspaces[0].id);
                                }
                              }
                            } else {
                              setCurrentWorkspaceId(w.id); 
                              setShowWorkspacePage(false); 
                            }
                          }} 
                          style={{ width: '200px', textAlign: 'left', borderColor: deleteMode ? 'red' : undefined }}
                        >
                          {w.name} {w.id === currentWorkspaceId && '(Active)'}
                        </Button>
                        <TextInput
                          value={w.name}
                          onChange={(e) => {
                            setWorkspaces(prev => prev.map(ws => 
                              ws.id === w.id ? { ...ws, name: e.target.value } : ws
                            ));
                          }}
                          placeholder="Rename Workspace..."
                          style={{ width: '150px' }}
                        />
                      </div>
                    ))}
                  </div>
                </WindowContent>
              </Window>
            )}
          </div>
        </div>
        
        {/* Bottom Tab / Taskbar */}
        <AppBar position="relative" style={{ zIndex: 10, position: 'relative' }}>
          <Toolbar>
            <Button 
              className={showWorkspacePage ? 'active' : ''}
              active={showWorkspacePage} 
              onClick={() => setShowWorkspacePage(!showWorkspacePage)} 
              style={{ fontWeight: 'bold' }}
            >
              🗂️ Workspaces
            </Button>
            <div style={{ marginLeft: '10px', fontFamily: 'ms_sans_serif' }}>
              Current: {currentWorkspace.name}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

export default App;