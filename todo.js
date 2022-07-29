const addTodos = document.getElementById('add');
const todos = document.getElementById('todos');
const search = document.querySelector('#search input');


addTodos.addEventListener("submit", e => {
    e.preventDefault();

    const todo = addTodos.add.value.trim();

    if(todo.length){
      todoGenerator(todo);
      addTodos.reset();  
    }
});


function todoGenerator(todo) {
    const html =`
    <li class="list"><input type="checkbox" id="box" class="box">${todo}
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    todos.innerHTML += html;
};


todos.addEventListener("click", e => {
    if(e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
})

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


