//This is the component that is rendered after the renderGame state is changed to true.
//It either waits for the bomb to time out or for the defuser be planted.
import { useEffect, useState, useRef } from "react";
import TimeDisplay from "./TimeDisplay";
import Button from "./Button";

function BombTimer({ bombTime, buttonCallBack, defuserSet, updateEndCond }) {
    const [newBombTime, setNewBombTime] = useState(bombTime)
    const timer = useRef(null)

    useEffect(() => {
        var minutes = Math.floor(newBombTime / 60)
        var seconds = newBombTime - minutes * 60
        console.log(minutes, seconds)
        timer.current = setInterval(() => {
            setNewBombTime(prevState => (prevState - 1))
        }, 1000)

        return null

    }, [])

    if (defuserSet) {
        clearInterval(timer.current)
        return null
    }

    if (newBombTime === 0) {
        clearInterval(timer.current)
        updateEndCond("Defenders")
        return null
    }
    return (
        <div>
            <TimeDisplay time={newBombTime} />
            <Button holdTime={4} buttonText="Start Defuser" callBack={buttonCallBack}></Button>
        </div>
    )
}

export default BombTimer