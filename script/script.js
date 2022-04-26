const randomNumber = [];
const userRandomNumber =[];
let counter = 5;


const startBtn = document.getElementById('start');

startBtn.addEventListener('click', generaDisplayNum);


function generaDisplayNum(){
  for(let i=0; i < 5; i++){
    const pcNumber = generateRandomInt(1,999);
    randomNumber.push(pcNumber);
    console.log(pcNumber);
  }
  document.getElementById('randomNumber').innerHTML= randomNumber;
  console.log(randomNumber);
  const clock = setInterval(function(){
    console.log(counter--);
    if(counter < 0){
      clearInterval(clock);
      console.log('è finito il tempo!')
      hide();
      userPrompt();
    }
  },1000)
  
}

function generateRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function hide(){
  document.getElementById('randomNumber').className='d-hide'
}

function userPrompt (){
  for(let i=0; i < 5; i++){
    promptNumber = parseInt(prompt('inserisci qui i numeri che ricordi!'))
    userRandomNumber.push(promptNumber);
    if(userRandomNumber[i]===randomNumber[i]){
    document.getElementById('output').innerHTML=`Complimenti ottima memoria!, se vuoi rigiocare ricarica la pagina!`
  }else{
    document.getElementById('output').innerHTML=`hai sbagliato, ritenta!, se vuoi rigiocare ricarica la pagina!`
  }
  }
  console.log(userRandomNumber);
  

   
}


