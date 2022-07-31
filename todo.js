const addTodos = document.getElementById('add');
const todos = document.getElementById('todos');
const search = document.querySelector('#search input');
const checkBox = document.querySelector('.box');


addTodos.addEventListener("submit", e => {
    e.preventDefault();

    const todo = addTodos.add.value.trim();

    if(todo.length){
      todoGenerator(todo);
      addTodos.reset();  
    }
});


function todoGenerator(todo) {

    const liElement = document.createElement('li');
    liElement.setAttribute('class', 'list');
    liElement.textContent = todo;

    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'checkBox')
    inputElement.setAttribute('class', 'box');

    const iElement = document.createElement('i');
    iElement.setAttribute('class', 'far fa-trash-alt delete');
    
    inputElement.addEventListener('click', e => {
      if(e.target.classList.contains('box')) {
        if(e.target.parentElement.style.textDecoration === "line-through"){
          e.target.parentElement.style.textDecoration = "";
        } else {
          e.target.parentElement.style.textDecoration = "line-through";
        }
      } 
    })

    liElement.appendChild(inputElement);
    liElement.appendChild(iElement);

    todos.appendChild(liElement);
};


todos.addEventListener("click", e => {
    if(e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    } 
});


search.addEventListener("keyup", () => {
    const char = search.value.trim().toLowerCase();
    filtereTodos(char);
});

const filtereTodos = char => {
    Array.from(todos.children)
      .filter((todo) => !todo.textContent.toLowerCase().includes(char))
      .forEach((todo) => todo.classList.add("filtered"));
  
    Array.from(todos.children)
      .filter((todo) => todo.textContent.toLowerCase().includes(char))
      .forEach((todo) => todo.classList.remove("filtered"));
  };
