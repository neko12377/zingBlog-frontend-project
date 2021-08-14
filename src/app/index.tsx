import {render} from "react-dom";
import React from "react";
import {SuspensePage} from "./adapter/SuspensePage";

// In tsconfig.json set "module": "esnext" makes React lazy work
const HomePage = React.lazy(() => import(/* webpackChunkName: "HomePage" */"view/page/ModelOne/HomePage"));

const App = () => (
    <SuspensePage>
        <HomePage />
    </SuspensePage>
);

render(<App />, document.getElementById("root"));
