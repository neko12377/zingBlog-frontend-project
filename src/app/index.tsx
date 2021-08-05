import { render } from "react-dom";
import React from "react";
const HomePage = React.lazy(() => import("view/page/ModelOne/HomePage"));

render(<HomePage />, document.getElementById("root"));
