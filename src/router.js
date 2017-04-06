import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import {history} from "./store.js";

const router = (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route>

        </Route>
    </Router>
);
export {router};