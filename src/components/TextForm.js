import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TextForm({heading, mystyle}) {
  const [text, setText] = useState("");

  const change = (e) => {
    setText(e.target.value);
  };

  const touc = () => {
    setText(text.toUpperCase());
    toast.success("Converted to Uppercase", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const tolc = () => {
    setText(text.toLowerCase());
    toast.success("Converted to Lowercase", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const clear = () => {
    setText("");
    toast.info("Text cleared!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const copy = () => {
    if (text === "") {
      toast.warn("Text is empty!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Text copied!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const calculateWords = () => {
    let numOfWords = 0;
    let words = text.split(" ");
    let length = words.length;
    numOfWords = words[length - 1] === "" ? length - 1 : length;
    
    return numOfWords;
  };
  
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container mt-5" style={mystyle}>
        <h3>{heading}</h3>

        <div className="mb-3">
          <textarea class="form-control" id="myBox" rows="8" style={mystyle} value={text} onChange={change}></textarea>
        </div>
        <button onClick={touc} className="btn btn-primary mt-3 mx-1">
          Convert To Uppercase
        </button>
        <button onClick={tolc} className="btn btn-primary mt-3 mx-1">
          Convert To Lower
        </button>
        <button onClick={clear} className="btn btn-primary mt-3 mx-1">
          Clear Text
        </button>
        <button onClick={copy} className="btn btn-primary mt-3 mx-1">
          Copy Text
        </button>
        <div className="container mt-4">
          <h3>Your text summary</h3>
          <p>
            {calculateWords()} words, {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
