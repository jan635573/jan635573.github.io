const quotes = [
  {
    quote : "“겨울이 오면 봄이 멀지 않으리”",
    author : "셸리"
  },
  {
    quote : "“기회는 일어나는 것이 아니라 만들어내는 것이다”",
    author : "크리스 그로서"
  },
  {
    quote : "“삶이 있는 한 희망은 있다”",
    author : "키케로"
  },
  {
    quote : "“내일은 내일의 태양이 뜬다”",
    author : "스칼렛 오하라"
  },
  {
    quote : "“악을 선으로 갚아라”",
    author : "탈무드"
  }
];
//랜덤 : Math.random() : 0~1 사이의 값으로 출력
const num = Math.floor(Math.random() * quotes.length);
// console.log(num);
const today = quotes[num];
//객체 가져오기
const spanElem1 = document.querySelector('.quote > span:nth-child(1)');
spanElem1.textContent = today.quote;
const spanElem2 = document.querySelector('.quote > span:nth-child(2)');
spanElem2.textContent = today.author;