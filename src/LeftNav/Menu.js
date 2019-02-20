import React from 'react';

import './Menu.scss';

const Menu = ({ links }) => (
  <div className='Menu'>
    <button id='compose'>Compose</button>
    <ul>
      {links.map(link => (
        <li key={link.id}>
          <a href={link.to}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Menu;
