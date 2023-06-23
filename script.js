let b1 = document.getElementById('box1');
let b2 = document.getElementById('box2');
let b3 = document.getElementById('box3');
let menu = document.getElementsByTagName('li');
let count = 0;

menu[0].addEventListener('click', () => {
	count = 0;
})

menu[1].addEventListener('click', () => {
	count = 1;
})

menu[2].addEventListener('click', () => {
	count = 2;
})

menu[3].addEventListener('click', () => {
	count = 3;
})

menu[4].addEventListener('click', () => {
	count = 4;
})

function func(a, b) {
  if (count == 0) {
      return a + b;
  } else if(count == 1) {
      return a - b;
  } else if(count == 2) {
      return a * b;
  } else if(count == 3) {
      return Math.round(a / b);
  } else {
	  return a ** b;
 }
}

let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  b3.innerHTML = func(Number(b1.innerHTML), Number(b2.innerHTML));
})