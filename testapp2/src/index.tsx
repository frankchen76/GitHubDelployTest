import * as React from "react";
import * as ReactDOM from "react-dom";
import { Main } from "./components/Main";
import { initializeIcons } from "@fluentui/react";

initializeIcons();

ReactDOM.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById("example")

);
