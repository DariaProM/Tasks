class BaseStorage {
  constructor(maxAmount = 10) {
    if (!Number.isInteger(maxAmount) && typeof maxAmount !== "number") {
      throw new Error("MaxAmount is an invalid number");
    }
    this.storage = [];
    this.maxAmount = maxAmount;
  }
  isEmpty() {
    return this.storage.length === 0;
  }
  toArray() {
    let newArr = [...this.storage];
    return newArr;
  }
}

class Stack extends BaseStorage {
  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== "function") {
      throw new Error("Is not iterable!");
    }
    const newStack = new Stack(iterable.length);
    [...iterable].forEach((el) => {
      newStack.push(el);
    });
    return newStack;
  }
  push(el) {
    if (this.storage.length >= this.maxAmount) {
      throw new Error("Stack is full, you can not add a new element");
    }
    this.storage.push(el);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty,you can not delete an element");
    }
    return this.storage.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.storage[this.storage.length - 1];
  }
}

class Queue extends BaseStorage {
  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== "function") {
      throw new Error("Is not iterable!");
    }
    const newQueue = new Queue(iterable.length);
    [...iterable].forEach((el) => {
      newQueue.push(el);
    });
    return newQueue;
  }
  push(el) {
    if (this.storage.length >= this.maxAmount) {
      throw new Error("Queue is full, you can not add a new element");
    }
    this.storage.push(el);
  }
  shift() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty,you can not delete an element");
    }
    return this.storage.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.storage[0];
  }
}
