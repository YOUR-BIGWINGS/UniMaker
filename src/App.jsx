import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset, Window, WindowHeader, WindowContent, Button, AppBar, Toolbar, TextInput } from 'react95';
import original from 'react95/dist/themes/original';

const GlobalStyles = createGlobalStyle`
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
  const [notes, setNotes] = useState([]);
  const [activeTool, setActiveTool] = useState('select'); // 'select' or 'string'
  const [draggingId, setDraggingId] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const addNote = () => {
    setNotes([...notes, { id: Date.now(), x: window.innerWidth / 2 - 125, y: window.innerHeight / 2 - 100, text: '' }]);
  };

  const handlePointerDown = (e, id) => {
    if (activeTool !== 'select') return;
    
    const note = notes.find((n) => n.id === id);
    if (!note) return;

    setDraggingId(id);
    setOffset({
      x: e.clientX - note.x,
      y: e.clientY - note.y,
    });
    
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (draggingId === null) return;
    
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === draggingId
          ? { ...note, x: e.clientX - offset.x, y: e.clientY - offset.y }
          : note
      )
    );
  };

  const handlePointerUp = (e) => {
    if (draggingId !== null) {
      setDraggingId(null);
      e.target.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Top Tools AppBar */}
        <AppBar position="relative" style={{ zIndex: 10, position: 'relative' }}>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 'bold', marginRight: '1rem' }}>Universe Studio</span>
            <Button onClick={addNote} style={{ fontWeight: 'bold' }}>+ Add Note Box</Button>
          </Toolbar>
        </AppBar>

        <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
          {/* Left Toolbar */}
          <div style={{ width: '60px', background: '#c6c6c6', borderRight: '2px solid #fff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 0', gap: '8px', zIndex: 10 }}>
            <Button active={activeTool === 'select'} onClick={() => setActiveTool('select')} style={{ width: '40px', height: '40px', fontSize: '18px' }}>↖</Button>
            <Button active={activeTool === 'string'} onClick={() => setActiveTool('string')} style={{ width: '40px', height: '40px', fontSize: '18px' }}>🔗</Button>
          </div>

          {/* Brain Board Workspace */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            {notes.map((note) => (
              <Window
                key={note.id}
                style={{ position: 'absolute', left: note.x, top: note.y, width: 250, zIndex: 5 }}
              >
                <div
                  onPointerDown={(e) => handlePointerDown(e, note.id)}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  style={{ cursor: activeTool === 'select' ? 'grab' : 'default' }}
                >
                  <WindowHeader className="window-header">
                    <span>Note {note.id.toString().slice(-4)}</span>
                  </WindowHeader>
                </div>
                <WindowContent>
                  <TextInput
                    multiline
                    rows={4}
                    placeholder="Type your ideas here..."
                    defaultValue={note.text}
                    fullWidth
                    style={{ fontFamily: 'ms_sans_serif', resize: 'none' }}
                  />
                </WindowContent>
              </Window>
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;