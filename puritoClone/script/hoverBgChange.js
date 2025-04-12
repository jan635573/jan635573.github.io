const $leftList = document.querySelectorAll('.left-text > li');
// console.log($leftList[0]);
const $leftBg = document.querySelector('.sec2-left');
const $rightBg = document.querySelector('.sec2-right');
const $bElem = document.querySelectorAll('.sec2-left > .left-text > li > b');
const $dot = document.createElement('span');
$dot.innerHTML = '';
$dot.className = 'dot';
$bElem[0].append($dot);
console.log($dot);

const handleClass = () => {
  $leftBg.className = 'sec2-left';
  $rightBg.className = 'sec2-right';
}

$leftList[0].addEventListener('mouseover',()=>{
  handleClass();
  $leftBg.classList.add('left-bg1');
  $rightBg.classList.add('right-bg1');
  $bElem[0].append($dot);
});
$leftList[1].addEventListener('mouseover',()=>{
  handleClass();
  $leftBg.classList.add('left-bg2');
  $rightBg.classList.add('right-bg2');
  $bElem[1].append($dot);
});
$leftList[2].addEventListener('mouseover',()=>{
  handleClass();
  $leftBg.classList.add('left-bg3');
  $rightBg.classList.add('right-bg3');
  $bElem[2].append($dot);
});
$leftList[3].addEventListener('mouseover',()=>{
  handleClass();
  $leftBg.classList.add('left-bg4');
  $rightBg.classList.add('right-bg4');
  $bElem[3].append($dot);
});