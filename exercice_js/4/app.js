//selectors
const lowerButton = document.querySelector('.upper')
const upperButton = document.querySelector('.lower')
const inputFirstName= document.querySelector('#first_name')
const pushFirstName= document.querySelector('#okButton')
const timerButton = document.querySelector('#buttontimer')
const canvas = document.querySelector('#mycanvas')

//variables
var size = 25

//events
lowerButton.addEventListener('click',upperButtonf)
upperButton.addEventListener('click',lowerButtonf)
pushFirstName.addEventListener('click',sendForm)
timerButton.addEventListener('click',sendTimer)



//functions
function upperButtonf(e){
  document.getElementById('texte').style.fontSize = '50px'
}
function lowerButtonf(e){
  document.getElementById('texte').style.fontSize = size +'px'
}
function sendForm(e){
  e.preventDefault()
  const theDate = new Date
  const hour = theDate.getHours()
  const push = document.querySelector('.form')
  const toDiv=document.createElement('div')
  push.appendChild(toDiv)
  if (hour<14){
    toDiv.innerHTML='bonjour <br><br>'
    toDiv.innerHTML+=inputFirstName.value
  }
  else if (hour>14 && hour<18){
    toDiv.innerHTML='bon Après-midi <br><br>'
    toDiv.innerHTML+=inputFirstName.value

  }
  else{
    toDiv.innerHTML='bonsoir <br><br>'
    toDiv.innerHTML+=inputFirstName.value

  }
  inputFirstName.value=""
}

function sendTimer(e){
  e.preventDefault()
  var a=0

  let interval = setInterval(function(){
    console.log(a++)
  },1000)
  setTimeout(()=>{
    console.log('yooo')
    clearInterval(interval)
  },5000)
}

var ctx =canvas.getContext('2d')
ctx.moveTo(10,100)
ctx.lineTo(50,78)
ctx.stroke()