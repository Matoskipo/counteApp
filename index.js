let display = document.querySelector('#value')
console.log(display)

let counterBtn = document.querySelector('#butn')
console.log(counterBtn)



let count = 0
let myTimeout = null;
function clear(){
  count = 0
  display.innerHTML = 0;
}

counterBtn.addEventListener('click', function(){
  count += 1;
  display.innerHTML = count;
  clearTimeout(myTimeout, 5000)
  myTimeout = setTimeout(clear, 5000)

})




