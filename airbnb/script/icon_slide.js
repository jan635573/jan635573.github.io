let currentImg = 1;
const prevBtn = document.querySelector('.btn > div:nth-of-type(1)');
const nextBtn = document.querySelector('.btn > div:nth-of-type(2)');
const iconList = document.querySelector('div.icon');
console.log(iconList);
const iconSlide = document.querySelector('.icon-slide');
const IMG_WIDTH = iconList.clientWidth;
console.log(IMG_WIDTH);

const handlerPrevBtn = () => {
  //이전 버튼 클릭시
  currentImg++;
  iconSlide.style.transform = `translateX(${110*8}px)`;;
}
const handlerNextBtn = () => {
  //다음 버튼 클릭시
  currentImg++;
  iconSlide.style.transform = `translateX(-${IMG_WIDTH}px)`;
  //만약 보이는 item의 갯수가 0개가 되면(n개 이하면) 정지
}

const iconSlide_init = () => {
  prevBtn.addEventListener("click",handlerPrevBtn);
  nextBtn.addEventListener("click",handlerNextBtn);
}
iconSlide_init();