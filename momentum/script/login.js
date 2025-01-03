const loginForm = document.querySelector('#loginForm');
const inputElem = document.querySelector('#loginForm > input');
const pElem = document.querySelector('.login-name > p');
const outElem = document.querySelector('.logout');
const LOGIN_KEY = "loginname";

const saveLoginName = (strInput) => {
  localStorage.setItem(LOGIN_KEY, strInput);
}
const loadLoginName = () => {
  return localStorage.getItem(LOGIN_KEY);
}
const printLoginName = (strName) => {
  pElem.textContent = `Hello. ${strName}`;
  pElem.classList.remove('hidden');
  outElem.classList.remove('hidden');
  loginForm.style.display = 'none';
  loginForm.classList.add('hidden');
}
const handlerSubmit = (event) => {
  event.preventDefault(); //기능초기화
  // console.log(inputElem.value);
  printLoginName(inputElem.value);
  saveLoginName(inputElem.value);
  inputElem.value  = null;
}
const init = () => {
  //처음 실행되는 함수
  //저장된 데이터 확인
  let loginName = loadLoginName();
  // console.log(loginName);
  if(loginName){
    //화면에 출력
    printLoginName(loginName);
  } else{
    loginForm.addEventListener("submit",handlerSubmit);
  }
  outElem.addEventListener("click",()=>{
    const outElert = document.querySelector('.logout_alert');
    outElert.style.display = 'flex';

    const outYesBtn = document.querySelector('.logout_yes');
    const outNoBtn = document.querySelector('.logout_no');

    outYesBtn.addEventListener("click",()=>{
    localStorage.removeItem(LOGIN_KEY);
    pElem.classList.add('hidden');
    outElem.classList.add('hidden');
    loginForm.classList.remove('hidden');
    loginForm.style.display = 'flex';
    localStorage.clear();
    window.location.reload();
    });
    outNoBtn.addEventListener("click",()=>{
      outElert.style.display = 'none';
    });
  });
}
window.onload = init;