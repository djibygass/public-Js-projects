function first(){
  var ladate=new Date()
  var heure = ladate.getHours()
  console.log(heure)
  if(heure<14){
    var rep = document.getElementById('par').innerHTML='Bonjour'
  }
  else if(heure>14 && heure<19){
    var rep = document.getElementById('par').innerHTML='Bon après-midi'
  }
  else{
    var rep = document.getElementById('par').innerHTML='Bonsoir'
  }
  return rep
  
}

function second(){
  for(var i=0; i < 10 ;i++){
    document.getElementById('list').innerHTML+="<li>"+i+"</li>"
    console.log('yo')
  }
}

function three(){
  var liste = ['Astou','Djibril','louf','lilkha']
  for (var value in liste) {
   document.getElementById('groupe').innerHTML += '<li>'+liste[value]+'</li>'
  }
}

// function fourth(){
//   while(){
//     document.getElementById('st').innerHTML = 'heyyy'
//   }
// }
function five(){
  var ladate=new Date()
  var month = ladate.getMonth()+1
  switch (month) {
    case 1:
      document.getElementById('month').innerHTML='Janvier'
      break;
    case 2:
      document.getElementById('month').innerHTML='Fevrier'
      break;
    case 3:
      document.getElementById('month').innerHTML='Mars'
      break;      
    case 4:
      document.getElementById('month').innerHTML='Avril'
      break;  
    case 5:
      document.getElementById('month').innerHTML='Mai'
      break;
    case 6:
      document.getElementById('month').innerHTML='Juin'
      break;
    case 7:
      document.getElementById('month').innerHTML='Juillet'
      break;
    case 8:
      document.getElementById('month').innerHTML='Août'
      break;
    case 9:
      document.getElementById('month').innerHTML='Septembre'
      break;
    case 10:
      document.getElementById('month').innerHTML='Octobre'
      break;
    case 11:
      document.getElementById('month').innerHTML='Novembre'
      break;
    case 12:
      document.getElementById('month').innerHTML='Decembre'
      break;
  }

}
// function sixth(){
//   var inputt = document.getElementById('input').value
//   switch (inputt) {
//     case 1:
//       document.getElementById('month').innerHTML='Janvier'
//       console.log('on y est ')
//       break;
//     case 2:
//       document.getElementById('input').innerHTML='Fevrier'
//       break;
//     case 3:
//       document.getElementById('input').innerHTML='Mars'
//       break;      
//     case 4:
//       document.getElementById('input').innerHTML='Avril'
//       break;  
//     case 5:
//       document.getElementById('input').innerHTML='Mai'
//       break;
//     case 6:
//       document.getElementById('input').innerHTML='Juin'
//       break;
//     case 7:
//       document.getElementById('input').innerHTML='Juillet'
//       break;
//     case 8:
//       document.getElementById('input').innerHTML='Août'
//       break;
//     case 9:
//       document.getElementById('input').innerHTML='Septembre'
//       break;
//     case 10:
//       document.getElementById('input').innerHTML='Octobre'
//       break;
//     case 11:
//       document.getElementById('input').innerHTML='Novembre'
//       break;
//     case 12:
//       document.getElementById('input').innerHTML='Decembre'
//       break;
//   }

// }

function seven(){
  var ladate=new Date()
  
  var mois = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Decembre']
   for(var element in mois){
     
    document.getElementById('groupe').innerHTML += '<li>'+mois[element]+'</li>'  
    if (element == ladate.getMonth()){break;}
  }
}

function testSetTimeout(){
  setTimeout(function(){
    document.getElementById('par').innerHTML = 'fois'
  },3000)
}

function checkForm(event){
  var content = document.forms["formulaire"]
  var Err = 0
  for (var i=0;i<content.length;i++) {
    if(content.element[i].value.length < 1){
      Err++
    }
    console.log(content.element[i])
  }
  if (Err>0){
    event.preventDefault()
  }else{
    for(var i = 0; i<content.length;i++){
      document.getElementById('par').innerHTML +=content.element[i].value+'<br/>'
    }
  }


}

