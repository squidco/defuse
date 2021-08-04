import { useEffect, useState, useRef } from "react";
import TimeDisplay from "./TimeDisplay";
import Button from "./Button";
import EndScreen from "./EndScreen";

function BombTimer({ bombTime, buttonCallBack, defuserSet, updateEndCond }) {
    const [newBombTime, setNewBombTime] = useState(bombTime)
    const timer = useRef(null)
    useEffect(() => {
        timer.current = setInterval(() => {
            setNewBombTime(prevState => (prevState - 1))
        }, 1000)

        return null

    }, [])

    if(defuserSet){
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