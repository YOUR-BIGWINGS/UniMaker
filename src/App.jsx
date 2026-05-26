import React, { useState, useEffect, useRef } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset, Window, WindowHeader, WindowContent, Button, AppBar, Toolbar, TextInput, Select } from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

// ---------------------------------------------------------
// APP VERSION - Easy to find in the codebase because I'm stupid
// ---------------------------------------------------------
export const APP_VERSION = 'VER 1.4.7';

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
  
  button:active, button[aria-pressed="true"], button[data-active="true"], button.active {
    background-image: none !important;
    background-color: #a0a0a0 !important;
  }
`;

function App() {
  const [appVersion, setAppVersion] = useState(APP_VERSION);
  const [workspaces, setWorkspaces] = useState([{ id: 1, name: 'Workspace 1', notes: [], connections: [] }]);
  const [currentWorkspaceId, setCurrentWorkspaceId] = useState(1);
  const [showWorkspacePage, setShowWorkspacePage] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  
  // Timeline state
  const [timelines, setTimelines] = useState([{ id: 1, name: 'Main Timeline', events: [], connections: [] }]);
  const [currentTimelineId, setCurrentTimelineId] = useState(1);
  const [showTimelinePage, setShowTimelinePage] = useState(false);
  
  const [timelineDraggingId, setTimelineDraggingId] = useState(null);
  const [timelineOffset, setTimelineOffset] = useState({ x: 0, y: 0 });
  const [timelineDraftLine, setTimelineDraftLine] = useState(null);
  const [timelineZoom, setTimelineZoom] = useState(1);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const el = document.getElementById('timeline-board');
    if (!el) return;
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        setTimelineZoom(prev => {
          const newZoom = prev - e.deltaY * 0.002;
          return Math.min(Math.max(0.1, newZoom), 3);
        });
      }
    };
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [showTimelinePage]);

  useEffect(() => {
    const savedData = localStorage.getItem('uniMakerSave');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.workspaces && parsed.workspaces.length > 0) {
          setWorkspaces(parsed.workspaces);
          setCurrentWorkspaceId(parsed.workspaces[0].id);
        }
        if (parsed.timelines && parsed.timelines.length > 0) {
          setTimelines(parsed.timelines);
          setCurrentTimelineId(parsed.timelines[0].id);
        }
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
  }, []);

  const handleSaveToBrowser = () => {
    localStorage.setItem('uniMakerSave', JSON.stringify({ workspaces, timelines }));
    alert('Successfully saved to browser storage!');
  };

  const handleSaveToFile = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ workspaces, timelines }, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "unimaker_save.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.workspaces && parsed.workspaces.length > 0) {
          setWorkspaces(parsed.workspaces);
          setCurrentWorkspaceId(parsed.workspaces[0].id);
        }
        if (parsed.timelines && parsed.timelines.length > 0) {
          setTimelines(parsed.timelines);
          setCurrentTimelineId(parsed.timelines[0].id);
        }
        alert('Successfully loaded from file!');
      } catch (err) {
        alert('Error loading file. Make sure it is a valid Uni-Maker save.');
      }
      e.target.value = ''; // Reset input to allow re-uploading the same file
    };
    reader.readAsText(file);
  };

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
    const offset = (notes.length * 20) % 200; // Increment offset so they stack diagonally
    
    // Find the lowest available number for "Note X"
    const usedNumbers = notes
      .map(n => {
        if (!n.title) return -1;
        const match = n.title.match(/^Note (\d+)$/);
        return match ? parseInt(match[1], 10) : -1;
      })
      .filter(n => n > 0);
    
    let nextNum = 1;
    while (usedNumbers.includes(nextNum)) {
      nextNum++;
    }

    setNotes([...notes, { id: newId, x: window.innerWidth / 2 - 125 + offset, y: window.innerHeight / 2 - 100 + offset, text: '', title: `Note ${nextNum}` }]);
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

  const getTimelineEventCenter = (tId, evId) => {
    const t = timelines.find(t => t.id === tId);
    if (!t) return {x: 0, y: 0};
    const ev = t.events.find(ev => ev.id === evId);
    if (!ev) return {x: 0, y: 0};
    return { x: (ev.x || 0) + 125, y: (ev.y || 0) + 100 }; 
  };

  const handleTimelinePointerDown = (e, id) => {
    if (activeTool === 'select' && (e.target.tagName.toLowerCase() === 'textarea' || e.target.tagName.toLowerCase() === 'input')) return;

    if (activeTool === 'select') {
      const t = timelines.find(t => t.id === currentTimelineId);
      if (!t) return;
      const ev = t.events.find(ev => ev.id === id);
      if (!ev) return;
      setTimelineDraggingId(id);
      
      const board = document.getElementById('timeline-board');
      const parentRect = board.getBoundingClientRect();
      
      setTimelineOffset({
        x: (e.clientX - parentRect.left + board.scrollLeft) / timelineZoom - (ev.x || 0),
        y: (e.clientY - parentRect.top + board.scrollTop) / timelineZoom - (ev.y || 0),
      });
      e.target.setPointerCapture(e.pointerId);
    } else if (activeTool === 'string') {
      const board = document.getElementById('timeline-board');
      const parentRect = board.getBoundingClientRect();
      setTimelineDraftLine({ 
        startId: id, 
        endX: (e.clientX - parentRect.left + board.scrollLeft) / timelineZoom, 
        endY: (e.clientY - parentRect.top + board.scrollTop) / timelineZoom 
      });
      e.target.setPointerCapture(e.pointerId);
      e.stopPropagation();
    }
  };

  const handleTimelinePointerMove = (e) => {
    if (activeTool === 'select' && timelineDraggingId !== null) {
      const board = document.getElementById('timeline-board');
      const parentRect = board.getBoundingClientRect();
      
      setTimelines(prev => prev.map(t => {
        if (t.id !== currentTimelineId) return t;
        return {
          ...t,
          events: t.events.map(ev => {
             if (ev.id === timelineDraggingId) {
                 let newX = (e.clientX - parentRect.left + board.scrollLeft) / timelineZoom - timelineOffset.x;
                 let newY = (e.clientY - parentRect.top + board.scrollTop) / timelineZoom - timelineOffset.y;
                 newX = Math.max(0, newX);
                 newY = Math.max(0, newY);
                 return { ...ev, x: newX, y: newY };
             }
             return ev;
          })
        };
      }));
      
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      setIsHoveringTrash(elements.some(el => el.id === 'timeline-recycle-bin'));
    } else if (activeTool === 'string' && timelineDraftLine !== null) {
      const board = document.getElementById('timeline-board');
      const parentRect = board.getBoundingClientRect();
      setTimelineDraftLine(prev => ({ 
        ...prev, 
        endX: (e.clientX - parentRect.left + board.scrollLeft) / timelineZoom, 
        endY: (e.clientY - parentRect.top + board.scrollTop) / timelineZoom 
      }));
    }
  };

  const handleTimelinePointerUp = (e) => {
    if (activeTool === 'select' && timelineDraggingId !== null) {
      if (isHoveringTrash) {
        // Delete the currently dragged timeline event
        setTimelines(prev => prev.map(t => {
          if (t.id !== currentTimelineId) return t;
          return {
            ...t,
            events: t.events.filter(ev => ev.id !== timelineDraggingId),
            connections: (t.connections || []).filter(c => c.from !== timelineDraggingId && c.to !== timelineDraggingId)
          };
        }));
        setIsHoveringTrash(false);
      }
      setTimelineDraggingId(null);
      e.target.releasePointerCapture(e.pointerId);
    } else if (activeTool === 'string' && timelineDraftLine !== null) {
      // Find the event under the pointer
      let targetId = null;
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      for (const el of elements) {
        const potentialId = el.getAttribute('data-timeline-event-id');
        if (potentialId) {
          targetId = parseInt(potentialId, 10);
          break;
        }
      }

      if (targetId !== null && targetId !== timelineDraftLine.startId) {
        setTimelines(prev => prev.map(t => {
           if (t.id !== currentTimelineId) return t;
           return {
              ...t,
              connections: [...(t.connections || []), { from: timelineDraftLine.startId, to: targetId }]
           };
        }));
      }
      setTimelineDraftLine(null);
      e.target.releasePointerCapture(e.pointerId);
    }
  };
  
  // Calculate Timeline Link Colors (Connected Components logic)
  const getTimelineLinkColors = (tId) => {
      const t = timelines.find(t => t.id === tId);
      if (!t) return {};
      
      const adj = {};
      t.events.forEach(e => adj[e.id] = new Set());
      (t.connections || []).forEach(c => {
         if (adj[c.from] && adj[c.to]) {
             adj[c.from].add(c.to);
             adj[c.to].add(c.from);
         }
      });
      
      const visited = new Set();
      const components = [];
      
      t.events.forEach(e => {
         if (!visited.has(e.id)) {
            const comp = [];
            const q = [e.id];
            visited.add(e.id);
            while(q.length > 0) {
               const u = q.shift();
               comp.push(u);
               for (const v of adj[u]) {
                  if (!visited.has(v)) {
                     visited.add(v);
                     q.push(v);
                  }
               }
            }
            if (comp.length > 1) {
              components.push(comp);
            }
         }
      });
      
      // Sort components by size descending so largest takes top color
      components.sort((a,b) => b.length - a.length);
      
      const palette = ['#e6194b', '#3cb44b', '#f58231', '#4363d8', '#911eb4', '#f032e6', '#ffe119'];
      const edgeColors = {};
      
      components.forEach((comp, idx) => {
         const color = palette[idx % palette.length];
         comp.forEach(nodeId => edgeColors[nodeId] = color);
      });
      return edgeColors;
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
              <Button onClick={addNote} title="Add Note Box" style={{ fontWeight: 'bold' }}>[+] Note</Button>
              <Button onClick={() => setShowTimelinePage(!showTimelinePage)} title="Timeline Panel" className={showTimelinePage ? 'active' : ''} active={showTimelinePage} style={{ fontWeight: 'bold' }}>◷ Timeline</Button>
              
              <div style={{ width: '2px', background: '#848584', height: '24px', margin: '0 8px' }}></div>
              
              <Button onClick={handleSaveToBrowser} title="Save to Browser Storage" style={{ fontWeight: 'bold' }}>💾 Save</Button>
              <Button onClick={handleSaveToFile} title="Export to File" style={{ fontWeight: 'bold' }}>📤 Export</Button>
              <Button onClick={() => fileInputRef.current && fileInputRef.current.click()} title="Import from File" style={{ fontWeight: 'bold' }}>📥 Import</Button>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".json" style={{ display: 'none' }} />
            </div>
            
            {/* Context Version Display */}
            <TextInput
              value={appVersion}
              onChange={(e) => setAppVersion(e.target.value)}
              style={{ width: `calc(${appVersion.length || 1}ch + 32px)`, minWidth: '80px', textAlign: 'center' }}
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
              ⬉
            </Button>
            <Button 
              className={activeTool === 'string' ? 'active' : ''}
              active={activeTool === 'string'} 
              onClick={() => setActiveTool('string')} 
              title="Line Tool" 
              style={{ width: '40px', height: '40px', fontSize: '18px' }}
            >
              ╱
            </Button>
            <Button 
              className={activeTool === 'scissors' ? 'active' : ''}
              active={activeTool === 'scissors'} 
              onClick={() => setActiveTool('scissors')} 
              title="Scissors Tool (Cut Connections)" 
              style={{ width: '40px', height: '40px', fontSize: '20px' }}
            >
              ✂
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
                <div style={{ fontSize: '24px', marginBottom: '4px' }}>♻</div>
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
                return (
                  <line 
                    key={idx} 
                    x1={start.x} y1={start.y} 
                    x2={end.x} y2={end.y} 
                    stroke={conn.color || "#000"} 
                    strokeWidth="4" 
                    style={{ pointerEvents: activeTool === 'scissors' || activeTool === 'select' ? 'stroke' : 'none', cursor: activeTool === 'scissors' ? 'crosshair' : activeTool === 'select' ? 'pointer' : 'default' }}
                    onClick={(e) => {
                      if (activeTool === 'scissors') {
                        setConnections(prev => prev.filter((_, i) => i !== idx));
                      } else if (activeTool === 'select') {
                        // Open a native color picker to change the connection color
                        const input = document.createElement('input');
                        input.type = 'color';
                        input.value = conn.color || '#000000';
                        input.onchange = (ev) => {
                          setConnections(prev => prev.map((c, i) => i === idx ? { ...c, color: ev.target.value } : c));
                        };
                        input.click();
                      }
                    }}
                  />
                );
              })}
              {draftLine && (
                <line x1={getNoteCenter(draftLine.startNoteId).x} y1={getNoteCenter(draftLine.startNoteId).y} x2={draftLine.endX - 60} y2={draftLine.endY - 48} stroke="#000" strokeWidth="4" strokeDasharray="4" />
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
                      value={note.title !== undefined ? note.title : `Note ${notes.length}`}
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
                      {deleteMode ? '� Cancel Delete' : '♻ Delete Workspaces'}
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

            {/* Timeline Page Overlay */}
            {showTimelinePage && (
              <Window style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '60%', zIndex: 155, borderTop: 'none', boxShadow: '0px 10px 20px rgba(0,0,0,0.5)' }}>
                <WindowHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Timeline Panel</span>
                  <Button onClick={() => setShowTimelinePage(false)}>X</Button>
                </WindowHeader>
                <WindowContent style={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 40px)', padding: 0 }}>
                  {/* Timeline Selection Bar */}
                  <div style={{ padding: '10px', background: '#dfdfdf', borderBottom: '2px solid #848584', display: 'flex', gap: '10px', overflowX: 'auto', alignItems: 'center' }}>
                    <Button 
                      onClick={() => {
                        const newTl = { id: Date.now(), name: `Timeline ${timelines.length + 1}`, events: [] };
                        setTimelines([...timelines, newTl]);
                        setCurrentTimelineId(newTl.id);
                      }}
                      style={{ fontWeight: 'bold', minWidth: 'max-content' }}
                    >
                      + Make Timeline
                    </Button>
                    <Button
                      onClick={() => {
                        const currentTl = timelines.find(t => t.id === currentTimelineId);
                        if (!currentTl) return;

                        const newEvent = {
                          id: Date.now() + 1,
                          timestamp: new Date().toLocaleTimeString(),
                          workspaceId: currentWorkspaceId,
                          text: '',
                          x: 100 + (currentTl.events.length * 30),
                          y: 100
                        };

                        setTimelines(prev => prev.map(t => t.id === currentTimelineId ? { ...t, events: [...t.events, newEvent] } : t));
                      }}
                      title="Add Timestamp Event"
                      style={{ fontWeight: 'bold', minWidth: 'max-content' }}
                    >
                      ◷+ Timestamp
                    </Button>
                    {timelines.map(tl => (
                      <div key={tl.id} style={{ display: 'flex', alignItems: 'center' }}>
                        <Button 
                          className={tl.id === currentTimelineId ? 'active' : ''}
                          active={tl.id === currentTimelineId} 
                          onClick={() => setCurrentTimelineId(tl.id)} 
                          style={{ minWidth: 'max-content' }}
                        >
                          {tl.name}
                        </Button>
                        <TextInput
                          value={tl.name}
                          onChange={(e) => {
                            setTimelines(prev => prev.map(t => t.id === tl.id ? { ...t, name: e.target.value } : t));
                          }}
                          style={{ width: '100px', marginLeft: '5px' }}
                        />
                      </div>
                    ))}

                    <div style={{ flex: 1 }} />
                    <div id="timeline-recycle-bin">
                      <Button
                        active={isHoveringTrash}
                        style={{
                          background: isHoveringTrash ? '#ffcccb' : undefined,
                          display: 'flex', alignItems: 'center', gap: '5px',
                          fontWeight: 'bold', pointerEvents: 'none'
                        }}
                      >
                        <span style={{ fontSize: '18px' }}>♻</span> Trash
                      </Button>
                    </div>
                  </div>

                  {/* Current Timeline View */}
                  <div id="timeline-board" style={{ flex: 1, overflow: 'auto', background: '#fff', position: 'relative' }} onPointerMove={handleTimelinePointerMove} onPointerUp={handleTimelinePointerUp}>
                    
                    <div style={{ width: '10000px', height: '10000px', position: 'relative', transform: `scale(${timelineZoom})`, transformOrigin: 'top left' }}>
                      {/* SVG overlay for Timeline Connections */}
                      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, overflow: 'visible' }}>
                        {(timelines.find(t => t.id === currentTimelineId)?.connections || []).map((conn, idx) => {
                          const start = getTimelineEventCenter(currentTimelineId, conn.from);
                        const end = getTimelineEventCenter(currentTimelineId, conn.to);
                        const colors = getTimelineLinkColors(currentTimelineId);
                        // Users can override auto-colored values with manual conn.color assigned
                        const color = conn.color || colors[conn.from] || '#000';
                        return (
                          <line 
                            key={idx} 
                            x1={start.x} y1={start.y} 
                            x2={end.x} y2={end.y} 
                            stroke={color} 
                            strokeWidth="6"
                            style={{ pointerEvents: activeTool === 'scissors' || activeTool === 'select' ? 'stroke' : 'none', cursor: activeTool === 'scissors' ? 'crosshair' : activeTool === 'select' ? 'pointer' : 'default' }}
                            onClick={(e) => {
                              if (activeTool === 'scissors') {
                                setTimelines(prev => prev.map(t => t.id === currentTimelineId ? {
                                  ...t,
                                  connections: t.connections.filter((_, i) => i !== idx)
                                } : t));
                              } else if (activeTool === 'select') {
                                // Open a native color picker to change the connection color
                                const input = document.createElement('input');
                                input.type = 'color';
                                input.value = color === '#000' ? '#000000' : color;
                                input.onchange = (ev) => {
                                  setTimelines(prev => prev.map(t => t.id === currentTimelineId ? {
                                    ...t,
                                    connections: t.connections.map((c, i) => i === idx ? { ...c, color: ev.target.value } : c)
                                  } : t));
                                };
                                input.click();
                              }
                            }}
                          />
                        );
                      })}
                      {timelineDraftLine && (() => {
                        const start = getTimelineEventCenter(currentTimelineId, timelineDraftLine.startId);
                        return <line x1={start.x} y1={start.y} x2={timelineDraftLine.endX} y2={timelineDraftLine.endY} stroke="#000" strokeWidth="6" strokeDasharray="4" />;
                      })()}
                    </svg>

                    {(timelines.find(t => t.id === currentTimelineId)?.events || []).map((ev, index, arr) => {
                        const linkedWorkspace = workspaces.find(w => w.id === ev.workspaceId);
                        return (
                          <div 
                            key={ev.id}
                            data-timeline-event-id={ev.id}
                            onPointerDown={(e) => handleTimelinePointerDown(e, ev.id)}
                            style={{ 
                              position: 'absolute',
                              left: ev.x || 100,
                              top: ev.y || 100,
                              zIndex: 5,
                              display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#c6c6c6', border: '2px solid #000', padding: '10px', boxShadow: '2px 2px 0px #000', width: '250px' 
                            }}
                          >
                            <TextInput
                              value={ev.timestamp}
                              onChange={(e) => {
                                setTimelines(prev => prev.map(t => t.id === currentTimelineId ? {
                                  ...t, 
                                  events: t.events.map(eObj => eObj.id === ev.id ? { ...eObj, timestamp: e.target.value } : eObj)
                                } : t));
                              }}
                              style={{ marginBottom: '8px', fontWeight: 'bold', textAlign: 'center', width: '100%' }}
                            />
                            
                            {/* Its Own Notepad */}
                            <TextInput
                              multiline
                              value={ev.text}
                              onChange={(e) => {
                                setTimelines(prev => prev.map(t => t.id === currentTimelineId ? {
                                  ...t, 
                                  events: t.events.map(eObj => eObj.id === ev.id ? { ...eObj, text: e.target.value } : eObj)
                                } : t));
                              }}
                              placeholder="Timestamp notes..."
                              style={{ width: '100%', height: '100px', marginBottom: '8px', resize: 'none' }}
                            />

                            <div style={{ display: 'flex', width: '100%', marginBottom: '8px', gap: '5px', alignItems: 'center' }}>
                              <span style={{ fontSize: '12px' }}>Link:</span>
                              <Select
                                value={ev.workspaceId}
                                options={workspaces.map(w => ({ value: w.id, label: w.name }))}
                                onChange={(option) => {
                                  setTimelines(prev => prev.map(t => t.id === currentTimelineId ? {
                                    ...t, 
                                    events: t.events.map(eObj => eObj.id === ev.id ? { ...eObj, workspaceId: option.value } : eObj)
                                  } : t));
                                }}
                                menuMaxHeight={160}
                                style={{ flex: 1, fontFamily: 'ms_sans_serif' }}
                              />
                            </div>

                            <Button 
                              onClick={() => {
                                if (linkedWorkspace) {
                                  setCurrentWorkspaceId(linkedWorkspace.id);
                                  setShowTimelinePage(false);
                                }
                              }}
                              style={{ width: '100%', fontWeight: linkedWorkspace ? 'bold' : 'normal' }}
                              disabled={!linkedWorkspace}
                            >
                              Go to {linkedWorkspace ? linkedWorkspace.name : 'Unknown Workspace'} 🔗
                            </Button>
                          </div>
                        );
                      })}
                    </div>
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