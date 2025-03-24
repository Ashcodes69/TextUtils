import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TestForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massege, type) => {
    setAlert({
      msg: massege,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#00171F";
      document.body.style.color = "white";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#FDF0D5";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter your text to analyse "
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
