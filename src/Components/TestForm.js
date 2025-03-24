import React, { useState } from "react";

export default function TestForm(props) {
  const [text, setText] = useState("");

  const handleClearText = () => {
    let clrText = "";
    setText(clrText);
  };
  const handleCopyFunc = () => {
    try {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard", "success");
    } catch (err) {
      console.log("failed to coppy beause" + err);
      props.showAlert(
        " Failed to copy try manualy selecting the text",
        "danger"
      );
    }
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleUpCase = () => {
    let upText = text.toUpperCase();
    setText(upText);
  };
  const handleLowCase = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
  };
  const handleCapitalize = () => {
    let words = text.split(" ");
    let capText = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(capText);
  };

  const handleonChange = (event) => [setText(event.target.value)];

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#37393A" : "#FFFBFE",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleonChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="btn-container">
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2 btn-danger"
            onClick={handleClearText}
          >
            Clear text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleCopyFunc}
          >
            Coppy
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleExtraSpace}
          >
            Remove extra spaces
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleUpCase}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleLowCase}
          >
            convert to lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleCapitalize}
          >
            Capitalize each word
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((elm) => {
              return elm.length !== 0;
            }).length
          }{" "}
          Words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((elm) => {
              return elm.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
      </div>
      <div className="container">
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter your text in the above text box to preview it here"}
        </p>
      </div>
    </>
  );
}
