import React from "react";
import { YellowBox } from "react-native";
import "./Utils/firebaseConfig";

import Routes from "./src/pages/routes";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default function App() {
  return <Routes />;
}
