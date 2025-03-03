Array.prototype.myFilter = function (callback, arr) {
  const res = [];
  if (arr !== undefined) {
    callback = callback.bind(arr);
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};
