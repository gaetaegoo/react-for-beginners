import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // StrictMode: 구성 요소를 두 번 렌더링(개발용이 아닌 프로덕션용)
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
