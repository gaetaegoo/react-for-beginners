import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
    const [counter, setCounter] = useState(0);

    const [keyword, setKeyword] = useState("");

    const onClick = () => setCounter((prev) => prev + 1);

    const onChange = (event) => setKeyword(event.target.value);

    // 항상 실행
    console.log("I run all the time.");

    // 한 번만 실행
    useEffect(() => {
        console.log("I run only once.");
    }, []);

    // keyword 변화 시에 실행
    useEffect(() => {
        console.log("I run when 'keyword' changes.", keyword);
    }, [keyword]);

    // counter 변화 시에 실행
    useEffect(() => {
        console.log("I run when 'counter' changes.", counter);
    }, [counter]);

    // keyword 및 counter 변화 시에 실행
    useEffect(() => {
        console.log(
            "I run when 'keyword & counter' changes.",
            keyword,
            counter
        );
    }, [keyword, counter]);

    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."
            />
            <h1 className={styles.title}>{counter}</h1>
            <button onClick={onClick}>Click me</button>
            <Button text={"Continue"} />
        </div>
    );
}

export default App;
