import * as React from "react";
import { About } from "./About";
import { Home } from "./Home";
import {
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";

// interface IMainProps {
//     account?: Account;
// }
export const Main = () => {
    const style = {
        maxWidth: "400px",
        margin: "auto"
    };
    return (
        <div className="ms-Grid" style={style}>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                    <HashRouter>
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </HashRouter>
                </div>
            </div>
        </div>
    );
}

