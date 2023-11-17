let cont = 2;

while (cont <= 100) {
  let primos = true;
  let divisor = 2;

  while (divisor < cont) {
    if (cont % divisor === 0) {
      primos = false;
      break;
    }
    divisor++;
  }
  if (primos) {
    console.log("Número " + cont + " é primo");
  }
  cont++;
}




    
  
    
     

    
