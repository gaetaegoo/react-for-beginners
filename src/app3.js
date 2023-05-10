import { useState } from "react";

function App() {
    const [toDo, setToDo] = useState("");

    const [toDos, setToDos] = useState([]);

    const onChange = (event) => setToDo(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        // input이 비었을 경우, 그냥 함수 종료
        if (toDo === "") {
            return;
        }

        // 기존 array에 새로운 toDo를 받아서 추가
        setToDos((currentToDos) => [...currentToDos, toDo]);

        // input안에 value 지우기
        setToDo("");
    };

    // localStorage를 쓰지 않으므로, 부모 요소를 찾아 remove
    const deleteBtn = (event) => {
        const li = event.target.parentElement;
        li.remove();
    };

    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do.."
                ></input>
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {/* array에 있는 item들을 원하는 형태로 바꿔줌 -> 새로운 array로 return*/}
                {/* 첫 번째 인자 - value / 두 번째 인자 - index */}
                {toDos.map((toDo, index) => (
                    <li key={index}>
                        {toDo}
                        <button onClick={deleteBtn}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
