const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        return;
    }

    const li = document.createElement('li');
    li.innerText = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Remove';
    deleteBtn.className = 'delete-btn';

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";

    // Apply behaviors to the new task row
    setupItemEvents(li, deleteBtn);
}

function setupItemEvents(li, deleteBtn) {
    // Click the text area to cross it out
    li.addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') {
            li.classList.toggle('completed');
        }
    });

    // Click the remove button to delete the item
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
}

// Apply dynamic triggers to the preloaded image tasks
document.querySelectorAll('ul li').forEach(li => {
    const btn = li.querySelector('.delete-btn');
    setupItemEvents(li, btn);
});

// Click handlers
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
