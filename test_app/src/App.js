import logo from './logo.svg';
import './App.css';
import { AiFillAndroid } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          <AiFillAndroid/> 안녕하세요 저는 송윤원이라 쓰고 바보라 읽어요
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
