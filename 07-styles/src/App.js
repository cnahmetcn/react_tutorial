import logo from './logo.svg';
import './App.css';

import A from './component/A/index';
import B from './component/B/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{color:"blue", backgroundColor: "yellow", paddingTop:5,}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>

        <div class="alert alert-danger" role="alert">
          Merhaba
        </div>

        <A />
        <B />

      </header>
    </div>
  );
}

export default App;
