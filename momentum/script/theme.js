/***
 * 버튼 클릭시 그에 맞는 테마로 변경(body에 class 부여)
 * Btn1 클릭 > body의 모든 클래스 삭제(기본)
 * Btn2 클릭 > body.dark
 * Btn3 클릭 > body.theme3
 * Btn4 클릭 > body.theme4
 */

const MODE_KEY = "mode";
const Btn1 = document.querySelector('.theme_change > span:nth-of-type(1)');
const Btn2 = document.querySelector('.theme_change > span:nth-of-type(2)');
const Btn3 = document.querySelector('.theme_change > span:nth-of-type(3)');
const Btn4 = document.querySelector('.theme_change > span:nth-of-type(4)');

const saveMode = (mode) => {
  localStorage.setItem(MODE_KEY,mode);
}
const loadMode = () => {
  return localStorage.getItem(MODE_KEY);
}
Btn1.addEventListener("click",()=>{
  document.body.className = 'basic';
  saveMode('basic');
});
Btn2.addEventListener("click",()=>{
  document.body.className = 'dark';
  saveMode('dark');
});
Btn3.addEventListener("click",()=>{
  document.body.className = 'theme3';
  saveMode('theme3');
});
Btn4.addEventListener("click",()=>{
  document.body.className = 'theme4';
  saveMode('theme4');
});

const mode_init = () => {
  let mode = loadMode(); //값, null
  if(mode !== 'basic'){
    document.body.className = mode;
  }
}
mode_init();