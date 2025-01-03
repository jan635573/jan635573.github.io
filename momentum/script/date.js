const dateElem = document.querySelector('.date');
const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const day = today.getDay();
  const dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  dateElem.textContent = `${year}-${month}-${date} ${dayList[day]}`;
}
getDate();
setInterval(getDate, 6000);