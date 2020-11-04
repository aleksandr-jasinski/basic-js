module.exports = function countCats(backyard) {
  let cats = 0;
  const cat = '^^';
  for (let line of backyard) {
    for (cell of line) {
      if (cell === cat) {
        cats += 1;
      }
    }
  }
  return cats;
};
