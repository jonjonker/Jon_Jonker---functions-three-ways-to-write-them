// Function declarations

function calculateSquare(
    number1, 
    number2
    ) {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const total = square1 + square2;
    const squaretotal= total * total;
    return squaretotal;
  }
  
  console.log(calculateSquare(4, 5));


// Function expressions

const calculateSquare = function(
    number1, 
    number2
    ) {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const total = square1 + square2;
    const squaretotal= total * total;
    return squaretotal;
  };
  
  console.log(calculateSquare(4, 5));


// // Arrow functions


const calculateSquare = (number1, number2) => {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const total = square1 + square2;
    const squaretotal= total * total;
    return squaretotal;
  };
  
  console.log(calculateSquare(4, 5));
