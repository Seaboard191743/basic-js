const CustomError = require("../extensions/custom-error");

const chainMaker = {
  _value: '',
  _chain: [],
  _result: '',
  
  getLength() {
    return this._chain.length;
  },
  addLink(value) {
    this._value = `( ${value} )`;
    this._chain.push(this._value);
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || position < 1 || position > this.getLength()) {
      this._chain = [];
      throw new Error('Error: this position does not exist');
    }
    this._chain.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
   this._chain.reverse();
   return this;
  },
  finishChain() {
    this._result = this._chain.join('~~');
    this._chain = []
    return this._result;
  }
};

module.exports = chainMaker;
