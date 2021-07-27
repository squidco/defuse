const { useState } = require("react")

function Button({ defuseTime, buttonText }) {
    const [time, setTime] = useState(defuseTime)
    const [hold, setHold] = useState(false)


    if (hold === true) {
        var what = setTimeout(() => {
            setTime(time - .1)
            console.log(time)
        }
            , 100)
    }

    if (hold === false) {
        clearTimeout(what)
    }

    if (time < 0) {
        clearTimeout(what)
        return null
    }

    return (
        <div>
            <button onMouseDown={(e) => {
                setHold(true)
            }} onMouseUp={() => {
                setHold(false)
            }}>{buttonText}</button>
        </div>
    )
}
export default Button