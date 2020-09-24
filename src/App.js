import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Toast } from "antd-mobile";

function App() {
  return (
    <div className="App">
      <Button onClick={() => Toast.success("好的")}>123</Button>
    </div>
  );
}

export default App;
