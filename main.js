let allText = document.querySelectorAll('.text');
let delay = 0;


// allText.forEach(function(el,idx){}); //el 각각의 아이템, idx는 아이템의 index 번호를 받는다.

allText.forEach((el,idx)=>{
  el.style.animationDelay=`${delay}s`;
  el.style.zIndex=allText.length - idx;
  el.classList.add('base-anim');

  delay += .15;
});

document.getElementById('five').addEventListener('mousemove',(e)=>{
  let innerWidth = window.innerWidth; // viewport의 넓이 값
  let innerHeight = window.innerHeight; //viewport의 높이값
  let clientX = e.clientX;
  let clientY = e.clientY;

  // console.log(clientX,clientY)
  let percentX = clientX/innerWidth // 넓이의 퍼센트 값을 구할 수 있음.
  // console.log(clientX, percentX)
  let maxRangeX=innerWidth*.15;
  let minX = innerWidth/2 - maxRangeX;
  let maxX = innerWidth/2 + maxRangeX;
  let difX = maxX - minX;
  let pxOffset = difX*percentX;

  let left = minX + pxOffset;

  let percentY = clientY/innerHeight // 넓이의 퍼센트 값을 구할 수 있음.
  // console.log(clientY, percentY)
  let maxRangeY=innerHeight*.15;
  let minY = innerHeight/2 - maxRangeY;
  let maxY = innerHeight/2 + maxRangeY;
  let difY = maxY - minY;
  let pxOffsetY = difY*percentY;

  let top = minY + pxOffsetY;

  allText.forEach((el,idx)=>{
    // el.animate([],{})
    el.animate([
      {top:`${top}px`,left:`${left}px`}
    ],{
      duration:1000, fill:'forwards', delay:idx*50
    })
  });
} )

