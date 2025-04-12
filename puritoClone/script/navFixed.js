const $nav = document.querySelector('nav');
const navHeight = $nav.clientHeight;
console.log(navHeight);
let preScroll = 0;

window.addEventListener("scroll",()=>{
  // const scrollTop = document.documentElement.scrollTop;
  let currentScroll = window.scrollY;
  // if(scrollTop > 50){
  //   $nav.style.top = '0';
  // } else{
  //   $nav.style.top = '-70px';
  // }
  if(currentScroll > preScroll){
    $nav.style.top = `-${navHeight}px`;
  } else{
    $nav.style.top = '0';
  }
  preScroll = currentScroll;
});