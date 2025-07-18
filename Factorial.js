// 2. Calculate Factorial of a Number
// This program calculates the factorial of a number using a loop.


    function factorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
          result *= i;
        }
        return result;
      }
      
      const number = 5;
      console.log(`Factorial of ${number}: ${factorial(number)}`);
      
    console.log(factorial());
