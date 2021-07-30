function Landing({change, submit, pForm}) {
    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="roundTime">Round Time</label>
                        <input value={pForm.roundTime || ""} name="roundTime" type="text" onChange={change}></input>
                    </div>
                    <div>
                        <label htmlFor="delay">Delay</label>
                        <input value={pForm.delay || ""} name="delay" type="text" onChange={change}></input>
                    </div>
                    <div>
                        <label htmlFor="defuseTime">Defuse Time</label>
                        <input value={pForm.defuseTime || ""} name="defuseTime" type="text" onChange={change}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </header>
        </div>
    );
};

export default Landing