import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lobby from './Lobby/Lobby.js';
import Login from './Login/Login.js';
import { useEffect, useState } from 'react'



function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Lobby username={username} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> }
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUsername={setUsername} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
