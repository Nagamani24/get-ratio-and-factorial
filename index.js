const ratioOfNum = require("../ratio/index.js");
const factOfNum = require("../factorial/index.js");

const ratioAndFactorial = (a, b, c) => {
  const ratio = ratioOfNum(a, b);
  const factorial = factOfNum(c);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
console.log(ratioAndFactorial);
