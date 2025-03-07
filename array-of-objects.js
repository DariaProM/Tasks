function getPerson(name, age) {
  return [
    { name, age },

    Object.assign({}, { name, age }),

    new (class Person {
      constructor(name, age) {
        (this.name = name), (this.age = age);
      }
    })(name, age),

    new (function Person(name, age) {
      (this.name = name), (this.age = age);
    })(name, age),
  ];
}

console.log(getPerson("alice", 10));
