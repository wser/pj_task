import React, { Component } from 'react';
import Header from './Header';
import Lorem from 'react-lorem-component';

export default class Body extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Body">
          <Lorem />
        </div>
        <div className="sign">
          <p>Regards,</p>
            user.name
           
        </div>
      </div>
    );
  }
}
