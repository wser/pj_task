import React, { Component } from 'react';
import Sender from './Sender';
export default class List extends Component {
  render() {
    return (
      <div className='List'>
        <Sender />
        <Sender />
        <Sender />
        <Sender />
        <Sender />
        <Sender />
        <Sender />
      </div>
    );
  }
}
