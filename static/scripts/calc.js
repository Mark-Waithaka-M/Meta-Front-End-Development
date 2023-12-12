//to be run on the browser
let result;

const operator = prompt("Enter the operator : (Either: + or - or * or / ): ")

const number1 = parseFloat(prompt("Enter a number : "))
const number2 = parseFloat(prompt("Enter a second number : "))


switch (operator){
    case '+':
        result = number1 + number2
        console.log(`${number1} + ${number2} = ${result}`)
        break;

    case '-':
        result = number1 - number2
        console.log(`${number1} - ${number2} = ${result}`)
        break;

    case '*':
        result = number1 * number2
        console.log(`${number1} * ${number2} = ${result}`)
        break;

    case '/':
        if (number2 !== 0) {
            result = number1 / number2;
            console.log(`${number1} / ${number2} = ${result}`);
          } else {
            console.log('Cannot divide by zero!');
          }
          break;

    default:
        console.log('No such operator!')
}

/**

//to be run with node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get operator input
rl.question('Enter the operator (+ or - or * or /): ', (operator) => {
  // Get number1 input
  rl.question('Enter the first number: ', (number1Input) => {
    const number1 = parseFloat(number1Input);

    // Get number2 input
    rl.question('Enter the second number: ', (number2Input) => {
      const number2 = parseFloat(number2Input);

      // Close the interface
      rl.close();

      let result;

      // Perform operations based on the entered operator
      switch (operator) {
        case '+':
          result = number1 + number2;
          console.log(`${number1} + ${number2} = ${result}`);
          break;

        case '-':
          result = number1 - number2;
          console.log(`${number1} - ${number2} = ${result}`);
          break;

        case '*':
          result = number1 * number2;
          console.log(`${number1} * ${number2} = ${result}`);
          break;

        case '/':
          if (number2 !== 0) {
            result = number1 / number2;
            console.log(`${number1} / ${number2} = ${result}`);
          } else {
            console.log('Cannot divide by zero!');
          }
          break;

        default:
          console.log('No such operator!');
      }
    });
  });
});

**/
