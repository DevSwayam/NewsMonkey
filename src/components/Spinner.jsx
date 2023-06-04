import React, { Component } from "react";
import Book from '../assets/Book.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Book}></img>
      </div>
    );
  }
}
