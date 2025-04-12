// Scroll Down 하면 이미지 작아지게 + 올리면 다시 커지게

const $img = document.querySelector('.main-img');
const pos = document.documentElement.clientHeight * 0.3;
console.log(-pos);
// console.log(document.documentElement.scrollTop);

window.addEventListener("scroll",()=>{
  const imgTop = $img.getBoundingClientRect().top;
  // console.log(imgTop);

  if(imgTop > pos || imgTop > -pos){
    $img.classList.remove('zoom-out');
  } else{
    $img.classList.add('zoom-out');
  }
});