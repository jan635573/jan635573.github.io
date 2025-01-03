const GOALS_KEY = "goals";
let week_list = []; //{id,input.value}
const weeklyForm = document.querySelector('#weeklyForm');
const inputGoal = document.querySelector('#weeklyForm > input');
const ulGoal = document.querySelector('#weeklyList');

const weekStorageSave = () => {
  const strObj = JSON.stringify(week_list);
  localStorage.setItem(GOALS_KEY, strObj);
}
const weekStorageLoad = () => {
  return localStorage.getItem(GOALS_KEY);
}
const saveGoalList = (num,txt) => {
  const obj = {id:num, value:txt};
  week_list.push(obj);
  weekStorageSave();
}
const weekHandlerDelBtn = (event) => {
  const delID = event.target.parentElement.id;
  week_list = week_list.filter((item)=>{
    return delID != item.id;
  });
  event.target.parentElement.remove();
  weekStorageSave();
}
const addGoalList = (id,value) => {
  //li로 추가
  const li = document.createElement('li');
  li.id = id;
  const span = document.createElement('span');
  span.textContent = value;
  const btn = document.createElement('button');
  btn.innerHTML = '&times';
  btn.className = 'del-btn';
  btn.addEventListener("click",weekHandlerDelBtn);
  li.appendChild(span);
  li.appendChild(btn);
  ulGoal.appendChild(li);
  saveGoalList(id,value);
}
const handlerGoalSubmit = (event) => {
  event.preventDefault();
  let value = inputGoal.value;
  inputGoal.value = null;
  addGoalList(Date.now(),value);
}
const weekly_init = () => {
  let loadGoals = weekStorageLoad();
  if(loadGoals){
    const obj = JSON.parse(loadGoals);
    obj.forEach((item) => {
      addGoalList(item.id, item.value);
    });
  }
  weeklyForm.addEventListener("submit",handlerGoalSubmit);
}
weekly_init();