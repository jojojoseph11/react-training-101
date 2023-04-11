import React from 'react';

class Car {
  brand: string;
  constructor(name: string) {
    this.brand = name;
  }
  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  model: string;
  constructor(name: string, mod: string) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

const mycar = new Model('Ford', 'Mustang');

export default Car;
