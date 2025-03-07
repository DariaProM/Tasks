// Object.prototype.alert = window.confirm;
// Object.prototype.confirm = window.prompt;
// Object.prototype.prompt = window.alert;

// windows.prompt = Object.assign({}, windows.alert);
// windows.confirm = Object.assign({}, windows.prompt);
// windows.alert = Object.assign({}, windows.confirm);

const person = {
  name: "",
  age: 0,
  gender: "",
  setName(value) {
    this.name = value;
    return this;
  },
  setAge(value) {
    this.age = value;
    return this;
  },
  setGender(value) {
    this.gender = value;
    return this;
  },
  getInfo() {
    return `${this.name} ${this.gender}  ${this.age} `;
  },
};
const newP = Object.create(person)
  .setName("Дарья")
  .setGender("female")
  .setAge(37);
console.log(newP.getInfo());
