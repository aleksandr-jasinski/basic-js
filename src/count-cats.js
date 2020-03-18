module.exports = function countCats(backyard) {
  let cats = 0;
  let cat = '^^';
  for (let line of backyard) {
    for (cell of line) {
      if (cell == cat) {
        cats++;
      }
    }
  }
  return cats;
};
