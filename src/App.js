import React from 'react';
import './App.scss';

import Menu from './components/LeftNav/Menu';
import List from './components/Inbox/List';
import Body from './components/Body/Body';

const links = [
  { id: 1, label: 'Inbox (2)', to: '' },
  { id: 2, label: 'Important', to: '' },
  { id: 3, label: 'Sent', to: '' },
  { id: 4, label: 'Drafts', to: '' },
  { id: 5, label: 'Trash', to: '' }
];

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Menu links={links} />
        <List />
        <Body />
      </div>
    );
  }
}

export default App;
