function EndScreen({ children, reset }) {
    return (
        <div>
            <p>{children} win!</p>
            <button onClick={reset}>Reset Timer</button>
        </div>
    )
}

export default EndScreen