/**
 * calculateAnnualInterest()
 *
 * Write a method called calculateInterestPayment() that
 * accepts a number parameter as a balance and calculates
 * annual interest payment for a risk for a profile
 *
 *  if creditScore is less than 200, the interest rate is 20%
 *  if creditScore is between 201 and 500, the interest rate is 10%
 *  if creditScore is more than 501 , the interest rate is 5%
 *
 *
**/


let someGuy = {
  name: 'Famos Jameis',
  age: 39,
  creditScore: 310
}
someGuy.calculateAnnualInterest = function (numero) {
  var numero = numero/10
  if (this.creditScore+100 < 200) {
    console.log(20);
    return 20

  }else if (this.creditScore+100 > 501  &&  this.creditScore < 500) {
    console.log(10);
    return 10

  }else if (this.creditScore+100 > 501) {
    console.log(5);
    return 5

  }
return numero
}


//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( someGuy.calculateAnnualInterest(40) === 4 )
console.assert( someGuy.calculateAnnualInterest(100) === 10 )
console.assert( someGuy.calculateAnnualInterest(3000) === 300 )


// Instructor Evaluation
// checking `isOlderThan` method with other context with .call method
//   https://docs.microsoft.com/en-us/scripting/javascript/reference/call-method-function-javascript
console.assert( someGuy.calculateAnnualInterest.call({ creditScore: 55 }, 100) === 20)
console.assert( someGuy.calculateAnnualInterest.call({ creditScore: 205 }, 100) === 10)
console.assert( someGuy.calculateAnnualInterest.call({ creditScore: 705 }, 100) === 5)
