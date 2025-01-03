const TODOS_KEY = "todos";
let todo_list = []; //{id,input.value}
const todoForm = document.querySelector('#todoForm');
const inputTodo = document.querySelector('#todoForm > input');
const ulTodo = document.querySelector('#todoList');

const storageSave = () => {
  const strObj = JSON.stringify(todo_list);
  localStorage.setItem(TODOS_KEY, strObj);
}
const storageLoad = () => {
  return localStorage.getItem(TODOS_KEY);
}
const saveTodoList = (num,txt,check) => {
  const obj = {id:num, value:txt, ck:check};
  todo_list.push(obj);
  storageSave();
}
const handlerDelBtn = (event) => {
  const delID = event.target.parentElement.id;
  todo_list = todo_list.filter((item)=>{
    return delID != item.id;
  });
  event.target.parentElement.remove();
  storageSave();
}
const updateCheckBox = (id,ck) => {
  todo_list = todo_list.map((item)=>{
    if(item.id == id){
      return {...item, ck};
    }
    return item;
  });
  storageSave();
}
const handlerCheck = (event) => {
  //this와 같은 역할 target
  const changeID = event.target.parentElement.id;
  const ck = event.target.checked;
  updateCheckBox(changeID,ck);
}
const addTodoList = (id,value,ck) => {
  //li로 추가
  const li = document.createElement('li');
  li.id = id;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = ck;
  checkbox.addEventListener("click",handlerCheck);
  const label = document.createElement('label');
  label.textContent = value;
  const btn = document.createElement('button');
  btn.innerHTML = '&times';
  btn.className = 'del-btn';
  btn.addEventListener("click",handlerDelBtn);
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(btn);
  ulTodo.appendChild(li);
  saveTodoList(id,value,ck);
}
const handlerTodoSubmit = (event) => {
  event.preventDefault();
  let value = inputTodo.value;
  inputTodo.value = null;
  addTodoList(Date.now(),value,false);
}
const todo_init = () => {
  let loadTodos = storageLoad();
  if(loadTodos){
    const obj = JSON.parse(loadTodos);
    obj.forEach((item) => {
      addTodoList(item.id, item.value, item.ck);
    });
  }
  todoForm.addEventListener("submit",handlerTodoSubmit);
}
todo_init();