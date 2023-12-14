import { useState } from 'react';
import './App.css';
import Auth from './Auth';
import { Login } from './Login';

function App() {

  const [setshowLoginForm, setSetshowLoginForm] = useState(false);
  return (
    <Auth>
      <div className="App">
        <p>Hello world</p>
        <button onClick={() => setSetshowLoginForm(true)}>Show login form</button>
        {/* {setshowLoginForm && <Login />} */}
        <Login />
      </div>
    </Auth>
  );
}

export default App;
