const $items = document.querySelector('.swiper');
const yPos = document.documentElement.clientHeight - 100;
console.log($items);

window.addEventListener("scroll",()=>{
  // $items.forEach((obj)=>{
  //   const top = obj.getBoundingClientRect().top;
  //   if(top < yPos){
  //     obj.classList.add('visible');
  //   }
  // });
  const top = $items.getBoundingClientRect().top;
  if(top < yPos){
    $items.classList.add('visible');
  }
});