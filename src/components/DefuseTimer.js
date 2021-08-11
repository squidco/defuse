import { useEffect, useState, useRef } from "react";
import TimeDisplay from "./TimeDisplay"
import Button from "./Button"

function DefuseTimer({ defuseTime, buttonCallBack, defuserDestroyed, updateEndCond }) {
    const [newDefuseTime, setnewDefuseTime] = useState(defuseTime)
    const timer = useRef(null)
    useEffect(() => {
        timer.current = setInterval(() => {
            setnewDefuseTime(prevState => (prevState - 1))
        }, 1000)

        return null

    }, [])

    if(defuserDestroyed){
        clearInterval(timer.current)
        updateEndCond("Defenders")
        return null
    }

    if (newDefuseTime === 0) {
        clearInterval(timer.current)
        updateEndCond("Attackers")
        return null
    }
    return (
        <div>
            <TimeDisplay time={newDefuseTime} />
            <Button holdTime={7} buttonText="Destroy Defuser" callBack={buttonCallBack}></Button>
        </div>
    )
}

export default DefuseTimer