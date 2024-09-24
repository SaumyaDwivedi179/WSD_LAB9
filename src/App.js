// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import ImageGallery from './ImageGallery';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    console.log('Username:', username);
    console.log('Password:', password);
    setLoggedIn(true);
  };

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Pet Animal: Dog</h1>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <ImageGallery />
      )}
    </div>
  );
};

export default App;
