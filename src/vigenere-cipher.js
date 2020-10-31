const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {

    if (!message || !key) {
      throw new Error;
    } else {
      let result = '';
      let MES = message.toString().toUpperCase();
      let KEY = key.toString().toUpperCase();
      const maxLen = Math.max(MES.length, KEY.length);
      const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      for (let i = 0; i < maxLen; i += 1) {
        let ms = MES[((i >= MES.length) ? i % MES.length : i)];
        let msi = abc.indexOf(ms);
        let sign;
        if (msi === -1) {
          sign = ms;
        } else {
          let ks = KEY[((i >= KEY.length) ? i % KEY.length : i)];
          let ksi = abc.indexOf(ks);
          sign = abc[(((26 + (msi + ksi)) % 26))];
        }
        result += sign;
      }
      return (this.isDirect ? result : result.split('').reverse().join(''));
    }

  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error;
    } else {
      let result = '';
      let MES = message.toString().toUpperCase();
      let KEY = key.toString().toUpperCase();
      const maxLen = Math.max(MES.length, KEY.length);
      const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      for (let i = 0; i < maxLen; i += 1) {
        let ms = MES[((i >= MES.length) ? i % MES.length : i)];
        let msi = abc.indexOf(ms);
        let sign;
        if (msi === -1) {
          sign = ms;
        } else {
          let ks = KEY[((i >= KEY.length) ? i % KEY.length : i)];
          let ksi = abc.indexOf(ks);
          sign = abc[(((26 + (msi - ksi)) % 26))];
        }
        result += sign;
      }
      return (this.isDirect ? result : result.split('').reverse().join(''));
    }

  }
}

module.exports = VigenereCipheringMachine;
