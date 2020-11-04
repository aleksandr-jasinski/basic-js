module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
    return false;
  } else {
    const team = [];
    for (let cell of members) {
      if (typeof cell === 'string') {
        let letter = cell.trim()[0];
        team.push(letter.toUpperCase());
      }
    }
    let teamName = team.sort().join('');
    return teamName;
  }
};
