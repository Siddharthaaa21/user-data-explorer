// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import UserList from './components/User-List-Fetch/UserListFetch';
import image from './assets/image.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-container'>
        <img src={image} className="App-logo" alt="logo" />
        </div>
        <h1> User Data </h1>
      </header>
      <UserList />
    </div>
  );
}

export default App;
