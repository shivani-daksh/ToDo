const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// dummy data  [{
//   name: 'make dinner',
//   dueDate : '2022-12-22'
// },
// {
// name : 'wash dishes',
// dueDate : '2022-12-22'
// }];
renderTodoList();


function AddTodo(){
  const todoInput = document.querySelector('.js-input-todo');
  
  if(!todoInput.value){
    alert('write a valid To Do!');
    return;
  }
  const dateInput = document.querySelector('.js-input-date');
  todoList.push({name: todoInput.value,
  dueDate : dateInput.value});

  localStorage.setItem('todoList', JSON.stringify(todoList));


  todoInput.value = '';
  dateInput.value = '';
  renderTodoList();
  
}

function renderTodoList() {
    let todoHTML = '';

    todoList.forEach((todoObject, index) => {
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

// generating HTML
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick = "
    todoList.splice(${index}, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    renderTodoList();
    " class = "delete-button">Delete</button>
    `;
    todoHTML +=html;
    });

  document.querySelector('.container').innerHTML = todoHTML;
}


