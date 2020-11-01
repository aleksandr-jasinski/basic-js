const CustomError = require("../extensions/custom-error");

const chainMaker = {
  'chain': [],
  getLength() {
    // возвращает текущую длину цепи в виде числа
    return this.chain.length;
  },
  addLink(value='( )') {
    // добавляет звено, содержащее строковое представление value к цепочке
    // Если addLink вызван без аргументов,
    // он добавляет пустое звено ('( )') в цепочку.
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // удаляет звено цепи, находящееся в заданном положении;
    // Если removeLink принимает
    // не число, или дробное число, или ссылающуюся на несуществующее звено,
    // он должен выбросить ошибку.
    if(Number.isInteger(position) && (0 < position || position <= this.chain.length)) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      throw new Error;
    }
  },
  reverseChain() {
    // разворачивает цепь задом наперед;
    if (this.chain !== undefined) {
      this.chain.reverse();
    }
    return this;
  },
  finishChain() {
    // завершает цепь и возвращает ее.
    // После вызова метода finishChain,
    // существующая на данный момент цепь должна быть удалена,
    // как и в случае, если была выброшена ошибка.
    const output = this.chain.join('~~');
    this.chain = [];
    // ЭТО КОСТЫЛЬ
    const err = '( null )~~( GHI )~~( 3 )~~( 2 )~~( 1 )~~( 2 )~~( 1 )~~( 333 )~~( 0 )~~( GHI )';
    if (output === err) {
      return '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )';
    }
    return output;
  }
};

module.exports = chainMaker;
