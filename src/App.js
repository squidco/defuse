import { useState } from 'react';
import './App.css';
import Defuse from "./pages/Defuse"
import BombTimer from './components/BombTimer';
import DefuseTimer from './components/DefuseTimer';
import Landing from './pages/Landing';

function App() {
  const [form, setForm] = useState({})
  const [renderGame, setRenderGame] = useState(false)
  const [renderDefuser, setRenderDefuser] = useState(false)
  const [defuserDestroyed, setDefuserDestroyed] = useState(false)

  function handleInput(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setRenderGame(true)
  }

  function proxy2() {
    console.log("proxy2")
  }

  function proxy() {
    defuserSet()
  }

  function defuserSet() {
    setRenderDefuser(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        {!renderGame && <Landing change={handleInput} submit={handleSubmit} pForm={form}></Landing>}
        {renderGame && <Defuse form={form}/>}
      </header>
    </div>
  );
}

export default App;
