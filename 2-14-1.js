// SWITCH --> IF-ELSE

// SWITCH 
/*
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

//IF-ELSE
;let browser = prompt("What browser are you using?")

if (browser == "Edge") {
  alert("You've got Edge!")
}
else if (browser == "Chrome" 
  || browser == "Firefox" 
  || browser == "Safari" 
  || browser == "Opera") {
    alert("Not edge, but we still support it!")
  }
else {
  alert("We hope the page looks okay then!")
}