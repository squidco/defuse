//This is the component that is rendered after the renderGame state is changed to true.
//It either waits for the bomb to time out or for the defuser be planted.
import { useEffect, useState, useRef } from "react";
import TimeDisplay from "./TimeDisplay";
import Button from "./Button";
import UpdatedTimeDisplay from "./UpdatedTimeDisplay";

function BombTimer({ bombTime, buttonCallBack, defuserSet, updateEndCond }) {
    const [newBombTime, setNewBombTime] = useState(bombTime)
    const [minutes, setMinutes] = useState(Math.floor(newBombTime / 60))
    const [seconds, setSeconds] = useState(newBombTime - minutes * 60)
    const timer = useRef(null)
    const newTimer = useRef(null)

    useEffect(() => {
        // timer.current = setInterval(() => {
        //     setNewBombTime(prevState => (prevState - 1))
        // }, 1000)
        newTimer.current = setInterval(() => {
            if(seconds === 0){
                if(minutes !== 0){
                    setMinutes(prevState => (prevState - 1))
                    setSeconds(60)
                }
                updateEndCond("Defenders")
            }
            setSeconds(prevState => (prevState - 1))
        }, 1000)
        return null

    }, [])

    if (defuserSet) {
        clearInterval(timer.current)
        return null
    }

    // if (minutes && seconds === 0){
    //     clearInterval(newTimer)
    //     updateEndCond("Defenders")
    //     return null
    // }

    // if (newBombTime === 0) {
    //     clearInterval(timer.current)
    //     updateEndCond("Defenders")
    //     return null
    // }
    return (
        <div>
            <UpdatedTimeDisplay minutes={minutes} seconds={seconds} />
            {/* <TimeDisplay time={newBombTime} /> */}
            <Button holdTime={4} buttonText="Start Defuser" callBack={buttonCallBack}></Button>
        </div>
    )
}

export default BombTimer