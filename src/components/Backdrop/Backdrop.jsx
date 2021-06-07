import React from "react";
import ReactDOM from "react-dom";
import "./Backdrop.css";

function Backdrop({ onClose }) {
  return ReactDOM.createPortal(
    <div className="back-drop-wrapper" onClick={onClose}></div>,
    document.getElementById("back-drop")
  );
}

export default Backdrop;
