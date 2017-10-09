/**
 * countTheHoles()
 *
 * Write a `countTheHoles` function that takes an intenteger and counts the
 * number of holes for each number.
 *
 * For example: the number 8042 would have 4 holes:
 *  - 2 holes in the 8
 *  - 1 hole in the 0, 4, 6, 9
 *
 *
**/

var countTheHoles = function(num){
  var count = 0;
  num = num.toString().split('')
  // console.log(num);
  // console.log(num.length);
  for (var i = 0; i < num.length; i++) {

    if (num[i] === '8') {
      count += 2
    }else if (num[i] === '4') {
      count ++
    }else if (num[i] === '6') {
      count ++
    }else if (num[i] === '9') {
      count ++
    }else if (num[i] === '0') {
      count ++
    }
  }
  // console.log(count);
  return count
}


//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.assert(  countTheHoles(301923) === 2  )
console.assert(  countTheHoles(880216) === 6  )
console.assert(  countTheHoles(40442) === 4 )
console.assert(  countTheHoles(808) === 5  )
