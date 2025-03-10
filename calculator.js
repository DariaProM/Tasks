class Calculator {
  constructor(x, y) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error("Number is invalid");
    }
    this.x = x;
    this.y = y;
  }
  setY(num) {
    this.y = num;
  }
  setX(num) {
    this.x = num;
  }
  logSum = () => {
    return this.y + this.x;
  };
  logMul = () => {
    return this.x * this.y;
  };
  logSub = () => {
    return (this.x = this.y);
  };
  logDiv = () => {
    if (this.y === 0) {
      throw new Error("Can not devide by zero");
    }
    return this.x / this.y;
  };
}

const calc = new Calculator(10, 5);
const log = calc.logSum;
console.log(log());
calc.x = 20;
console.log(calc.logSum());
