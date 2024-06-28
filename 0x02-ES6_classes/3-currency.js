#!/usr/bin/node
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    }
    throw new TypeError('Code must be a string');
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
    throw new TypeError('Name must be a string');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
