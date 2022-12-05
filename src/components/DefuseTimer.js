import { useEffect, useState, useRef } from "react";
import TimeDisplay from "./TimeDisplay"
import Button from "./Button"

function DefuseTimer({ time, buttonCallBack, defuserDestroyed, updateEndCond }) {
    const [defuseTime, setDefuseTime] = useState(time)
    const timer = useRef(null)
    useEffect(() => {
        timer.current = setInterval(() => {
            setDefuseTime(prevState => (prevState - 1))
        }, 1000)

        return null

    }, [])

    if(defuserDestroyed){
        clearInterval(timer.current)
        updateEndCond("Defenders")
        return null
    }

    if (defuseTime === 0) {
        clearInterval(timer.current)
        updateEndCond("Attackers")
        return null
    }
    return (
        <div>
            <TimeDisplay time={defuseTime} />
            <Button holdTime={7} buttonText="Destroy Defuser" callBack={buttonCallBack}></Button>
        </div>
    )
}

export default DefuseTimer