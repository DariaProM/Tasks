class Calculator {
  constructor(x, y) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error("Number is invalid");
    }
    this.x = x;
    this.y = y;
  }
  setY(num) {
    if (typeof num !== "number" || isNaN(num)) {
      throw new Error("Y have to be a number");
    }
    this.y = num;
  }
  setX(num) {
    if (typeof num !== "number" || isNaN(num)) {
      throw new Error("X have to be a number");
    }
    this.x = num;
  }
  logSum = () => {
    return this.y + this.x;
  };
  logMul = () => {
    return this.x * this.y;
  };
  logSub = () => {
    return this.x - this.y;
  };
  logDiv = () => {
    if (this.y === 0) {
      throw new Error("Can not devide by zero");
    }
    return this.x / this.y;
  };
}
