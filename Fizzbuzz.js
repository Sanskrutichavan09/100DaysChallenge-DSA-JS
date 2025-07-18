// 3. FizzBuzz
// This classic program prints numbers from 1 to 50, replacing multiples of 3 with "Fizz," multiples of 5 with "Buzz," and multiples of both with "FizzBuzz."

function FizzBuzz(){
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz");
        } else if (i % 3 === 0) {
          console.log("Fizz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(i);
        }
      }
     


}
console.log(FizzBuzz());

  
  
