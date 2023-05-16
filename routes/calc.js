const express = require("express");

const router = express.Router();

const Calculator = require("../components/calc");

router.get("/", (req, res, next) => {
  const calculator = new Calculator();

  const val1 = parseInt(req.query.val1);
  const val2 = parseInt(req.query.val2);
  const operator = req.query.operator;

  let add, remove, multiply, divide;

  if (operator === "add") {
    add = calculator.add(val1, val2);
  } else if (operator === "remove") {
    remove = calculator.remove(val1, val2);
  } else if (operator === "multiply") {
    multiply = calculator.multiply(val1, val2);
  } else if (operator === "divide") {
    divide = calculator.divide(val1, val2);
  }

  res.render("calculator", { add, remove, multiply, divide, val1, val2 });
});

module.exports = router;
