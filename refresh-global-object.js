window.alert = window.confirm;
window.confirm = window.prompt;
window.prompt = window.alert;

console.log(alert());
