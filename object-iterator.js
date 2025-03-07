let obj = {
  from: 1,
  to: 20,

  [Symbol.iterator]() {
    if (typeof this.from !== "number" || typeof this.to !== "number") {
      throw Error("Values must be a number");
    }
    if (this.from > this.to) {
      throw Error("'to' value can not be greater than 'from' value");
    }
    let current = this.from;
    let last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};
for (let item of obj) {
  console.log(item);
}
