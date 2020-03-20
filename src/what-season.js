module.exports = function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  else if (isNaN(date) || isNaN(Date.parse(date))) {
    throw new Error();
  }

  else {

    let monthNum = date.getMonth();

    if (monthNum === 11 || monthNum === 0 || monthNum === 1) {
      return 'winter';
    }
    else if (monthNum === 2 || monthNum === 3 || monthNum === 4) {
      return 'spring';
    }
    else if (monthNum === 5 || monthNum === 6 || monthNum === 7) {
      return 'summer';
    }
    else //if (monthNum === 8 || monthNum === 9 || monthNum === 10) 
    {
      return 'autumn';
    }

  }

};