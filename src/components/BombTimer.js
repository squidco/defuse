//This is the component that is rendered after the renderGame state is changed to true.
//It either waits for the bomb to time out or for the defuser be planted.
import { useEffect, useState, useRef } from "react";


function BombTimer({ time, setGameStage, setWinner, winner }) {
    const [bombTime, setBombTime] = useState()
    const timer = useRef()
    // Use effect to start the bomb
    useEffect(() => {
        timer.current = setInterval(() => {
            setBombTime(prevState => (prevState - 1))
        }, 1000)
    }, [])

    useEffect(() => {
        console.log(time)
        setBombTime(time)
    }, [time])

    // Use effect that checks every rerender if the bomb time is zero
    useEffect(() => {
        if (bombTime === 0) {
            clearInterval(timer.current)
            setWinner(winner)
            setGameStage("winnerWinner")
        }
    }, [bombTime])

    return (
        <>
            {bombTime !== 0 &&
                <h1>{bombTime}</h1>
            }
        </>
    )
}

export default BombTimer