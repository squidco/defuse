import { useEffect, useState } from 'react';
import BombTimer from '../components/BombTimer';
import DefuseTimer from '../components/DefuseTimer';
import EndScreen from '../components/EndScreen';

function Defuse({ form }) {
    const [renderDefuser, setRenderDefuser] = useState(false)
    const [defuserDestroyed, setDefuserDestroyed] = useState(false)
    const [endCondition, setEndCondition] = useState("")

    useEffect(() => {
        console.log(endCondition)
    }, [endCondition])

    function updateEndCond(newState){
        setEndCondition(newState)
    }

    function proxy(){
        setDefuserDestroyed(true)
    }

    function defuserSet() {
        setRenderDefuser(true)
    }


    return (
        <>
            {!renderDefuser && <BombTimer bombTime={form.roundTime} buttonCallBack={defuserSet} updateEndCond={updateEndCond}/>}
            {renderDefuser && <DefuseTimer defuseTime={form.defuseTime} buttonCallBack={proxy} updateEndCond={updateEndCond} defuserDestroyed={defuserDestroyed} />}
            {endCondition !== "" && <EndScreen>{endCondition}</EndScreen>}
        </>
    )

}

export default Defuse