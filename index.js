function convert(num) {
  return num.toString(2);
}
let input = prompt("Введите число");
let binary = convert(+input);

alert(`${binary}`);
