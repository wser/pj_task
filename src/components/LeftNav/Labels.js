import React from 'react';

//import './Menu.scss';

const Labels = () => (
  <div className='Labels'>
    <p className='title'>LABELS</p>
    <ul>
      <li>
        <input type='checkbox' id='checkbox-1' />
        <a href='#' className='labelItem'>
          Personal
        </a>
      </li>
      <li>
        <input type='checkbox' id='checkbox-2' />
        <a href='#' className='labelItem'>
          Work
        </a>
      </li>
      <li>
        <input type='checkbox' id='checkbox-3' />
        <a href='#' className='labelItem'>
          Travel
        </a>
      </li>
    </ul>
  </div>
);

export default Labels;
