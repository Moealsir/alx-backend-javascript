#!/usr/bin/node
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
  if (typeof value === 'string') {
    this._name = value;
  }
  throw new TypeError('Name must be a string');
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    }
    throw new TypeError('Length must be a number');
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (students.every((student) => typeof student === 'string')) {
      this._students = students;
    }
    throw new TypeError('Students must be an array of strings');
  }
}
