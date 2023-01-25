
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if (matrix == undefined) {
    return res;
  }
  matrix.map((item,i) => {
      if(i % 2 != 0) {
          res[i] = item.reverse();
      } else {
          res[i] = item;
      }
  });
  return res.flat();
}
