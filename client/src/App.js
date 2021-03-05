import Mic from './components/Mic/Mic';
import './App.css';
import TextDisplay from './components/TextDisplay/TextDisplay';

function App() {
  return (
    <div className="App">
      <div className="speech-text-container">
        <h1>Speech to text</h1>
        <Mic />
        <TextDisplay />
      </div>
      <div className="vertical-line"></div>
      <div className="text-speech-container">
        <h1>Text to speech</h1>
      </div>
    </div>
  );
}

export default App;
