import TimeDisplay from "./TimeDisplay"

const { useState, useEffect, useRef } = require("react")

function Button({ defuseTime, buttonText }) {
    const [time, setTime] = useState(defuseTime)
    const [hold, setHold] = useState(false)
    const timer = useRef(null)

    useEffect(() => {
        if (hold) {
            timer.current = setInterval(() => {
                setTime(prevState => (prevState - .1).toFixed(1))
            }
                , 100)
        } else {
            stopTimer(timer.current)
        }
    }, [hold])

    function stopTimer(timer) {
        clearInterval(timer)
    }

    if (parseFloat(time) === 0) {
        stopTimer(timer.current)
        return null
    }

    return (
        <>
            <TimeDisplay time={time}></TimeDisplay>
            <div>
                <button onMouseDown={() => {
                    setHold(true)
                }} onMouseUp={() => {
                    setHold(false)
                }}>{buttonText}</button>
            </div>
        </>
    )
}
export default Button