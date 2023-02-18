import logo from './logo.svg';
import './App.css';
import answers from './answers';
import EightBall from './eightball';

function App() {
  return (
    <div className="App">
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
