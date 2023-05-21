import React from 'react';
import icon from './assets/icon-256.png';

import Button from './components/Button';

function App() {

  return (
    <>
      <header>
        <h1>Path's by Torchlight</h1>
        <img src={icon} alt="" />
      </header>
      <footer>
        <Button text="Login"></Button>
        <Button text="Register"></Button>
      </footer>
    </>
  )
}

export default App
