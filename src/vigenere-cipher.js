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
      const MES = message.toUpperCase();
      const KEY = key.toUpperCase();
      const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const N = ABC.length;
      let j = 0;
      for (let i = 0; i < MES.length; i += 1) {
        let ms = MES[((i >= MES.length) ? i % MES.length : i)];
        let msi = ABC.indexOf(ms);

        if (msi === -1) {
          result += ms;
        } else {
          let ks = KEY[((j >= KEY.length) ? j % KEY.length : j)];
          let ksi = ABC.indexOf(ks);
          result += ABC[(((N + (msi + ksi)) % N))];
          j += 1;
        }

      }
      return (this.isDirect ? result : result.split('').reverse().join(''));
    }

  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error;
    } else {
      let result = '';
      const MES = message.toUpperCase();
      const KEY = key.toUpperCase();
      const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const N = ABC.length;
      let j = 0;
      for (let i = 0; i < MES.length; i += 1) {
        let ms = MES[((i >= MES.length) ? i % MES.length : i)];
        let msi = ABC.indexOf(ms);

        if (msi === -1) {
          result += ms;
        } else {
          let ks = KEY[((j >= KEY.length) ? j % KEY.length : j)];
          let ksi = ABC.indexOf(ks);
          result += ABC[(((N + (msi - ksi)) % N))];
          j += 1;
        }

      }
      return (this.isDirect ? result : result.split('').reverse().join(''));
    }

  }
}

module.exports = VigenereCipheringMachine;
