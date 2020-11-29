import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hey There </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
        Learn Something New
        </p>
        
      </header>
      <footer className="App-footer">
          © 2020 Copyright: <span><strong>KAINAT MAHAR</strong></span>
      </footer>
    </div>
  );
}

export default App;
