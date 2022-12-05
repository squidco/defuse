import React, { useEffect, useRef, useState } from "react";

function PlantDefuser({ setGameStage, stage, setWinner, winner }) {
    const [time, setTime] = useState(7)
    const interval = useRef()

    //adds mouseup event listener to the entire window so players cant just push the button once and then hover off of it
    useEffect(() => {
        window.addEventListener("mouseup", notPlanting)
    }, [])

    useEffect(() => {
        if (time === 0) {
            window.removeEventListener("mouseup", notPlanting)
            setWinner(winner)
            setGameStage(stage)
        }
    }, [time])

    function planting() {
        interval.current = setInterval(() => {
            setTime(prevState => (prevState - 1))
            console.log(time)
        }, 1000)
    }

    function notPlanting() {
        clearInterval(interval.current)
        setTime(7)
    }

    return (
        <button onMouseDown={planting}>Press and Hold</button>
    )
}

export default PlantDefuser