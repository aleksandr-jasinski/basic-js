module.exports = function getSeason(date) {

  if (date instanceof Date) {
    let monthNum = date.getMonth();
    if (monthNum === 0 || monthNum === 1 || monthNum === 11) {
      return 'winter';
    }
    if (monthNum === 2 || monthNum === 3 || monthNum === 4) {
      return 'spring';
    }
    if (monthNum === 5 || monthNum === 6 || monthNum === 7) {
      return 'summer';
    }
    if (monthNum === 8 || monthNum === 9 || monthNum === 10) {
      return 'autumn';
    }
  }

  else if (!date) {
    return 'Unable to determine the time of year!';
  }

  else {
    throw new Error();
  }

};