import './App.css';
import Button from "./components/Button"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button defuseTime={7} buttonText="Defuse"></Button>
      </header>
    </div>
  );
}

export default App;
