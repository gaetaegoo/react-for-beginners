import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// 하위 컴포넌트에서는 createBrowserRouter로 Router를 생성
const App = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        /**
         * - path에서 dynamic(동적) url 가능
         * - ':'뒤에는 보통 'id'를 쓰지만, 아무 변수명이나 가능(potato, tomato 등)
         */
        path: "/movie/:id",
        element: <Detail />,
    },
]);

export default App;
