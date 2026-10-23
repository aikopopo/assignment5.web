const tasks = [];

const titleInput = document.getElementById('titleInput');
const descInput = document.getElementById('descInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');
const errorMsg = document.getElementById('errorMsg');

function addTask() {
    const title = titleInput.value.trim();
    const description = descInput.value.trim();

    if (title === '' || description === '') {
        errorMsg.textContent = 'Fill in both title and description';
        return;
    }

    errorMsg.textContent = '';
    tasks.push({ title: title, description: description, done: false });
    titleInput.value = '';
    descInput.value = '';
    render();
}

function render() {
    list.innerHTML = '';

    tasks.forEach(function (task, index) {
        const card = document.createElement('div');
        card.className = 'task-card';
        if (task.done) {
            card.classList.add('task-done');
        }

        const header = document.createElement('div');
        header.className = 'task-header';

        const title = document.createElement('span');
        title.className = 'task-title';
        title.textContent = task.title;

        const actions = document.createElement('div');

        const doneBtn = document.createElement('button');
        doneBtn.type = 'button';
        doneBtn.className = 'icon-btn done-btn';
        doneBtn.textContent = '✓';
        doneBtn.title = 'Mark as done';
        doneBtn.addEventListener('click', function () {
            task.done = !task.done;
            render();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'icon-btn delete-btn';
        deleteBtn.textContent = '✕';
        deleteBtn.title = 'Delete';
        deleteBtn.addEventListener('click', function () {
            tasks.splice(index, 1);
            render();
        });

        const desc = document.createElement('p');
        desc.className = 'task-desc';
        desc.textContent = task.description;

        actions.appendChild(doneBtn);
        actions.appendChild(deleteBtn);
        header.appendChild(title);
        header.appendChild(actions);
        card.appendChild(header);
        card.appendChild(desc);
        list.appendChild(card);
    });
}

addBtn.addEventListener('click', addTask);