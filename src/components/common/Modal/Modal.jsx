import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
function Modal({ children, onClose, show }) {
  return (
    <>
      {show ? <Backdrop onClose={onClose} /> : null}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        classNames="modal"
        timeout={200}
      >
        <div className="modals">{children}</div>
      </CSSTransition>
    </>
  );
}
export default Modal;
