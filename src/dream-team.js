module.exports = function createDreamTeam(members) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  var team = [];
  if (Array.isArray(members) == false) {
    return false;
  } else {
    for (let cell of members) {
      if (typeof cell == 'string') {
        let letter = cell.trim()[0];
        team.push(letter.toUpperCase());
      }
    }
    let teamName = team.sort().join('');
    return teamName;
  }
};
