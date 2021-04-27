const buttons = document.querySelectorAll('button');
const modal = document.querySelector('.modal');

function onOff(){

  if(modal.classList.contains('hide')){
   modal.classList.remove('hide')
  }else{
    modal.classList.add('hide')
  }
}


for(let button of buttons){

  button.addEventListener('click', onOff)
}