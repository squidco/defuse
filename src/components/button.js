import TimeDisplay from "./TimeDisplay"

const { useState, useEffect, useRef } = require("react")

function Button({ holdTime, buttonText, callBack }) {
    const [time, setTime] = useState(holdTime)
    const [hold, setHold] = useState(false)
    const timer = useRef(null)


    //Reruns code after component mounts then after everytime holo changes state
    useEffect(() => {
        
        if (hold) {
            //Sets a ref to setInterval so it can be accessed anywhere in the code
            timer.current = setInterval(() => {
                setTime(prevState => (prevState - .1).toFixed(1))
            }
                , 100)
            //Stops the interval if hold !== true
        } else {
            stopTimer(timer.current)
        }
        return null
        //States condition for rerunning code
    }, [hold])

    //Function to stop a timer which takes a param of said timer
    function stopTimer(timer) {
        clearInterval(timer)
    }

    //Logic to determine if the component gets rendered or not. Stops the timer if not
    if (parseFloat(time) === 0) {
        callBack()
        stopTimer(timer.current)
    }

    return (
        <>
            <div>
                <button onMouseDown={() => {
                    setHold(true)
                }} onMouseUp={() => {
                    setHold(false)
                }}>{buttonText}</button>
            </div>
            <TimeDisplay time={time}></TimeDisplay>
        </>
    )
}
export default Button