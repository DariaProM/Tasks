Array.prototype.myFilter = function (callback, arg) {
  const res = [];
  if (arg !== undefined) {
    callback = callback.bind(arg);
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};
