function scuberGreetingForFeet(travelLength){
  if (travelLength < 400) {
    return "This one is on me!"
  }
  else if (travelLength <=2000) {
    return "That will be twenty bucks."
  }
  else if (travelLength < 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (travelLength > 2500) {
    return "No can do."
  }
  // Write your code here!
}

function ternaryCheckCity(name){
  return (name === "NYC" ? "Ok, sounds good." : "No go.")
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous" : return "Thank you so much.";
    break;
    case "not as generous" : return "Thank you.";
    break;
    default: return "Bye."
    
  }
  // Write your code here!
}