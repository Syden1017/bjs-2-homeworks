"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = Math.pow(b, 2) - (4 * a * c);

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let x = ((-b) / (2 * a));

    arr.push(x);
  } else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    arr.push(x1);
    arr.push(x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}