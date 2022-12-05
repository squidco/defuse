import React, { useState } from "react"
import BombTimer from "../components/BombTimer"
import EndScreen from "../components/EndScreen"
import PlantDefuser from "../components/PlantDefuser"

function Game() {
    const [roundTime, setRoundTime] = useState()
    const [defuseTime, setDefuseTime] = useState()
    const [gameStage, setGameStage] = useState("settings")
    const [winner, setWinner] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        if (roundTime && defuseTime) {
            setGameStage("bombPlanted")
        }
    }

    switch (gameStage) {
        case "settings":
            return (
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label style={{ display: "flex" }} htmlFor="roundTime">Round Time</label>
                        <input style={{ display: "block" }} name="roundTime" type="text" onChange={e => setRoundTime(e.target.value)}></input>
                    </div>
                    <div className="input-group">
                        <label style={{ display: "flex" }} htmlFor="defuseTime">Defuse Time</label>
                        <input style={{ display: "block" }} name="defuseTime" type="text" onChange={e => setDefuseTime(e.target.value)}></input>
                    </div>
                    <button type="submit">Start Round</button>
                </form>
            )
        case "bombPlanted":
            return (
                <div>
                    <BombTimer time={roundTime} setGameStage={setGameStage} setWinner={setWinner} winner={"Defenders"} />
                    <PlantDefuser setGameStage={setGameStage} stage={"defuserPlanted"} setWinner={setWinner} winner={"Attackers"} />
                </div>
            )
        case "defuserPlanted":
            return (<div>
                <BombTimer time={defuseTime} setGameStage={setGameStage} setWinner={setWinner} winner={"Attackers"} />
                <PlantDefuser setGameStage={setGameStage} stage={"winnerWinner"} setWinner={setWinner} winner={"Defenders"} />
            </div>)
        case "winnerWinner":
            return <EndScreen>{winner}</EndScreen>
        default:
            return <p>You broke it. Good job.</p>
    }


};

export default Game