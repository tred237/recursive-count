function recursiveCount(num = 0) {
  if (num === 9) return console.log(num)
  console.log(num)
  recursiveCount(num += 1)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
// create a base condition that returns logging num
// print num
// call recursiceCount incrementing num in the parameters