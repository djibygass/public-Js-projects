//selectors
//in-form
const inputTodo = document.querySelector('.todo-input')
const inputButton = document.querySelector('.todo-button')
//in-todo-ul
const todo = document.querySelector('#todo')
// const dButton = document.querySelector('.delete-button')
// const nButton = document.querySelector('.done-button')


//events
inputButton.addEventListener('click', appendTodo)
// nButton.addEventListener('click', todoDone) 
// dButton.addEventListener('click', todoDelete)
todo.addEventListener('click', todoDelete)

//functions
function appendTodo(e){
  e.preventDefault();
  if(inputTodo.value == ""){
    alert('écrit une tache zebiii ')
  }
  else{
    const todoDiv=document.createElement('div')
    todoDiv.classList.add('container-todolist')
    
    const todoItemDiv = document.createElement('div')
    todoItemDiv.classList.add('container-item')
    
    const item = document.createElement('li')
    item.classList.add('todo-item')
    item.innerHTML = inputTodo.value
    todoItemDiv.appendChild(item)
    
    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('container-button')
  
    const doneButton = document.createElement('button')
    doneButton.classList.add('done-button')
    doneButton.innerHTML = '<i class="fas fa-thumbs-up"></i>'
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
    buttonDiv.appendChild(doneButton)
    buttonDiv.appendChild(deleteButton)
  
    todoDiv.appendChild(todoItemDiv)
    todoDiv.appendChild(buttonDiv)
  
  
  
  
    todo.appendChild(todoDiv)
    inputTodo.value = ''
  }
  

}
// function todoDone(e){
//   console.log(e.target)

// }
function todoDelete(e){
   const item = e.target
   if (item.classList[0] == 'delete-button'){
     const p1 = item.parentElement
     const p2 = p1.parentElement
     p2.remove()
   }
   else if (item.classList[0] == 'done-button'){
    const p1 = item.parentElement
    const p2 = p1.parentElement
    p2.classList.add('okdone')
  }

}