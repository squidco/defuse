import { useState } from 'react';
import BombTimer from '../components/BombTimer';
import DefuseTimer from '../components/DefuseTimer';

function Defuse({ form }) {
    const [renderDefuser, setRenderDefuser] = useState(false)
    const [defuserDestroyed, setDefuserDestroyed] = useState(false)


    function proxy2() {
        console.log("proxy2")
    }

    function proxy() {
        defuserSet()
    }

    function defuserSet() {
        setRenderDefuser(true)
    }


    return (
        <>
            {!renderDefuser && <BombTimer bombTime={form.roundTime} buttonCallBack={proxy} />}
            {renderDefuser && <DefuseTimer defuseTime={form.defuseTime} buttonCallBack={proxy2} defuserDestroyed={defuserDestroyed} />}
        </>
    )

}

export default Defuse