import React, { Component } from 'react';
import './Header.scss';
//import Sender from '../Inbox/Sender';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="firstPart">
          <h1>TITLE</h1>
          <p>From <span className="userTitle"> user.name </span> <span className="dateText">at 3:56pm, April 3, 2012</span></p>
        </div>
        <div className="secondPart">
          <button className="btn success">Reply</button>
          <button className="btn info">Forward</button>
          <button className="btn warning">Move to</button>
        </div>
      </div>
    );
  }
}
