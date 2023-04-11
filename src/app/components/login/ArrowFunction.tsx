import React from 'react';

class Header {
  color: string;
  constructor() {
    this.color = 'red';
  }

  //Arrow Function
  changeColor = () => {
    document.getElementById('App').innerHTML += this;
  };

  myheader = new Header();
  window.addEventListener("load", myheader.changeColor);
  //A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
}
