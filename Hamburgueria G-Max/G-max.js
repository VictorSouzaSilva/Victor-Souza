const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const pedido = todoInput.value;

    if (pedido.trim() === '') return;

    adicionarPedido(pedido);
    todoInput.value = '';
});

function adicionarPedido(pedido) {
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = pedido;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Concluído';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remover';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    
    todoList.appendChild(li);
}