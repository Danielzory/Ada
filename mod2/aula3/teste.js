function stairs () {
  //criando variáveis
  let up = '';     
  let down = '';
  let limite = 5;                                    // número limite (max colunas)

  //laço Up
  for(let i = 1; i <= 5; i++){
    
      up += i;                                       //concatena valor anterior mais o novo valor
      console.log(up)
  }

  
  //Laço down
  for(let j = 1; j <= 5; j++){
    for(let l = 1; l < limite; l++){

      down += l                                         //concatena até o limite
      
    }
    console.log(down)  
    limite--                                            // decrementa limite (constante)
    down = '';                                          //reseta variavel
  }

}


stairs();
