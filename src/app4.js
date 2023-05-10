import { useState, useEffect } from "react";

const Hello = () => {
    // const destroyedFn = () => {
    //     console.log("destroyed!");
    // };

    // const createdFn = () => {
    //     console.log("created!");
    //     return destroyedFn;
    // };

    // useEffect(createdFn, []);

    useEffect(() => {
        console.log("created!");
        // cleanUp function: 함수가 종료될 때 뭔가를 할 수 있게 함
        return () => console.log("destroyed!");
    }, []);

    return <h1>Hello!</h1>;
};

function App() {
    const [showing, setShowing] = useState(false);

    const onClick = () => {
        setShowing((prev) => !prev);
    };

    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;
