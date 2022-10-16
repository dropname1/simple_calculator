let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let plus = document.querySelector(".plus");
let res = document.querySelector(".result");
let minus = document.querySelector(".minus");
let multiplication = document.querySelector(".multiplication");
let division = document.querySelector(".division");
let clear = document.querySelector(".clear");


plus.addEventListener('click',()=> {
   let sum = +input1.value + +input2.value
   res.textContent = sum
})
minus.addEventListener('click',()=> {
   let sum = +input1.value - +input2.value
   res.textContent = sum
})
multiplication.addEventListener("click", () => {
  let sum = +input1.value * +input2.value;
  res.textContent = sum;
});
division.addEventListener("click", () => {
  let sum = +input1.value / +input2.value;
  res.textContent = sum;
});
clear.addEventListener('click',()=> {
    input1.value = ''
    input2.value = ''
    res.textContent = ''
})