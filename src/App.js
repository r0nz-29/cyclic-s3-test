import logo from './logo.svg';
import './App.css';

function App() {
  const audio = new Audio("/lol.mp3");

  function start() {
    audio.play();
  }

  function stop() {
    audio.pause();
  }

  return (
    <div className="App">
      <button onClick={start}>Play</button>
      <button onClick={stop}>Pause</button>
    </div>
  );
}

export default App;
