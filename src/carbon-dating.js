const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
//calculate the rate constant for the reaction from its half-life
const RATE = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity !== 'string') {
    return false;
  }
  else if (isNaN(parseFloat(sampleActivity))) {
    return false;
  }
  else if (parseFloat(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  }
  else if (parseFloat(sampleActivity) <= 0) {
    return false;
  }
  else {
    let age = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / RATE;
    if (age < 0) {
      return false;
    }
    else {
      return Math.ceil(age);
    }
  }

};
