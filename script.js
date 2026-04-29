const brainBoard = document.getElementById('brain-board');
const addNoteBtn = document.getElementById('add-note-btn');
const toolSelect = document.getElementById('tool-select');
const toolString = document.getElementById('tool-string');

let activeTool = 'select'; // 'select' or 'string'
let noteCounter = 0;

// Set active tool
function setActiveTool(tool) {
    activeTool = tool;
    toolSelect.classList.toggle('active', tool === 'select');
    toolString.classList.toggle('active', tool === 'string');
}

toolSelect.addEventListener('click', () => setActiveTool('select'));
toolString.addEventListener('click', () => setActiveTool('string'));

// Add Note Logic
addNoteBtn.addEventListener('click', () => {
    noteCounter++;
    
    // Create Note Element
    const note = document.createElement('div');
    note.className = 'note-box';
    note.id = `note-${noteCounter}`;
    
    // Position the note near the center of the viewport
    const boardRect = brainBoard.getBoundingClientRect();
    // basic offset based on number of notes so they don't exactly stack
    const offset = (noteCounter * 20) % 100;
    note.style.left = `${boardRect.width / 2 - 125 + offset}px`; 
    note.style.top = `${boardRect.height / 2 - 75 + offset}px`;

    // Note inner HTML
    note.innerHTML = `
        <div class="note-header">Note ${noteCounter}</div>
        <textarea class="note-content" placeholder="Type your ideas here..."></textarea>
    `;

    // Make Note Draggable
    makeDraggable(note);

    brainBoard.appendChild(note);
});

// Drag and Drop Logic
let draggedElement = null;
let offsetX = 0;
let offsetY = 0;

function makeDraggable(element) {
    const header = element.querySelector('.note-header');

    header.addEventListener('mousedown', (e) => {
        if (activeTool !== 'select') return;
        
        draggedElement = element;
        
        // Bring to front by highlighting
        document.querySelectorAll('.note-box').forEach(n => n.classList.remove('selected', 'active'));
        element.classList.add('selected');

        const rect = element.getBoundingClientRect();
        const boardRect = brainBoard.getBoundingClientRect();
        
        // Calculate offset from mouse to top-left of the note
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        
        // Add listeners for move and up on the window to catch fast movements
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    });
}

function onMouseMove(e) {
    if (!draggedElement) return;

    const boardRect = brainBoard.getBoundingClientRect();

    // Calculate new position relative to the board boundaries (and scroll positions)
    let newLeft = e.clientX - boardRect.left - offsetX + brainBoard.scrollLeft;
    let newTop = e.clientY - boardRect.top - offsetY + brainBoard.scrollTop;

    // Optional constraint to keep inside canvas minimums
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;

    draggedElement.style.left = `${newLeft}px`;
    draggedElement.style.top = `${newTop}px`;
}

function onMouseUp() {
    if (draggedElement) {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        draggedElement = null;
    }
}

// TODO: String / Connection logic will go here
brainBoard.addEventListener('mousedown', (e) => {
   if(activeTool === 'string' && e.target.closest('.note-box')) {
       // Future implementation for drawing strings between note boxes
       console.log('Initiating string connection from:', e.target.closest('.note-box').id);
   }
});