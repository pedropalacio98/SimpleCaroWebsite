import logo from './logo.svg';
import './App.css';
import pedrito from "./pedro.jpg"
import Welcome from './welcome.js'
import tick from './ThisTime.js'

const name = "Pedro Palacio ";


function App() {
  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{color: 'gray' }}>
        CERN is raising funds for this poor guy
        </h3>
        </header>
    <h1>
    <Welcome name={name} />
    < tick ></tick>
    </h1>      
    <img  src={pedrito}  alt="fireSpot"/> 
          <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
          >
          
      </a>
          
        </div>
  );
}

export default App;
