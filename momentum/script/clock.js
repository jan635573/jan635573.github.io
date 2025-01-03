const clockElem = document.querySelector('.clock');
const getClock = () => {
  //시계설정
  const today = new Date(); //현재시간
  //시,분,초 가져오기 > 두자리씩
  const hh = String(today.getHours()).padStart(2,'0');
  const mm = String(today.getMinutes()).padStart(2,'0');
  const ss = String(today.getSeconds()).padStart(2,'0');
  //class = clock 인 객체의 텍스트를 변경
  clockElem.textContent = `${hh}:${mm}:${ss}`;
}
getClock();
setInterval(getClock, 1000);