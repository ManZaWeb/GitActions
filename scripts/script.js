document.addEventListener('DOMContentLoaded', function() {
  //Getting elements from DOM
  const operationDisplay = document.querySelector('.calcu-screen')
  const resultDisplay = document.querySelector('.calcu-screen')

  const digits = document.querySelectorAll('.calcu-key')
  const opers = document.querySelectorAll('.calcu-key-ope')
  const equals = document.getElementById("equals")
  const pi = document.getElementById("pi")
  
  //Variables needed for the calculator
  let operator = "";
  let resul = "";
  let Value1 = "";
  let Value2 = "";  
  let isNewOperation = true;
  let lastInputType = null;



  //Function for digits(When u click a number something happens)
  digits.forEach(digit => {
    digit.addEventListener('click', function() {
      const displayValue = digit.textContent;
  
      if (isNewOperation) {
        operationDisplay.innerText = displayValue;
        isNewOperation = false;
      } else {
        operationDisplay.innerText += displayValue;
      }
      lastInputType = null
    });
  });
  
    //Function for operators(When u click a operator something happens)
    opers.forEach(oper => {
      oper.addEventListener('click', function() {
        let operator = oper.value;
        if (!isNewOperation && lastInputType !== 'operator') {
          operationDisplay.innerText += operator;
          isNewOperation = false;
          lastInputType = 'operator';
        }
       
      });
    });    


    //Function for equals button (When u click equals something happens)
    equals.addEventListener('click', function() {
      let displayContent = operationDisplay.innerText;
    
      try {
        // Use eval to perform the calculation
        result = eval(displayContent);
    
        // Update the display with the result
        operationDisplay.innerText = result;
        isNewOperation = true;
      } catch (error) {
        // Handle any errors that may occur during evaluation
        operationDisplay.innerText = 'Error';
        isNewOperation = true;
      }
    });

    //Function for pi button (When u click pi something happens)
    pi.addEventListener('click', function() {
      // Perform calculation
      console.log('pi')
    });
  
   
});
