import React from 'react';

import './Menu.scss';
import Labels from './Labels';

const Menu = ({ links }) => (
  <div className='Menu columns'>
    <button id='compose'>Compose</button>
    <ul>
      {links.map(link => (
        <li key={link.id}>
          <a href={link.to}>{link.label}</a>
        </li>
      ))}
    </ul>
    <Labels />
  </div>
);

export default Menu;
