import { useState } from 'react';
import './App.css';
import Defuse from "./pages/Defuse"
import Landing from './pages/Landing';

function App() {
  const [form, setForm] = useState({})
  const [renderGame, setRenderGame] = useState(false)

  function resetGame(){
    setRenderGame(false)
    setForm({})
  }

  function handleInput(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setRenderGame(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        {!renderGame && <Landing change={handleInput} submit={handleSubmit} pForm={form}></Landing>}
        {renderGame && <Defuse reset={resetGame} form={form}/>}
      </header>
    </div>
  );
}

export default App;
