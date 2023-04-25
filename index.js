function scuberGreetingForFeet(feet){
  if (feet<400)
    return 'This one is on me!'
 else if(feet>400 && feet<2000)
   return 'That will be twenty bucks.'
 else if (feet>2000 && feet<2499)
    return 'I will gladly take your thirty bucks.'
 else (feet>=2500)
    return 'No can do.'
}
function ternaryCheckCity(city){
  const checkCity = (city === 'NYC')? "Ok, sounds good.": "No go."
  return checkCity
}

let charm;
function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      charm = 'Thank you so much.';
      break;
    case 'not as generous':
      charm = 'Thank you.'
      break;
    case 'thanks for everything':
      charm = 'Bye.'
      break;
  }
  return charm
}