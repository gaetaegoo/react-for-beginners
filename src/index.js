import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";

// index에서는 RouterProvider로, 하위 컴포넌트에서 만든 router를 사용
ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <RouterProvider router={App} />
    // </React.StrictMode>
);
