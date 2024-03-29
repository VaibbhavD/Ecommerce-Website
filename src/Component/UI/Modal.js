import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import ContextStore from "../../Store/Context";

const Backdrop = () => {
  const context = useContext(ContextStore);
  return (
    <div
      className={classes.backdrop}
      onClick={() => context.enableShowCart()}
    />
  );
};
const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portal = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portal
      )}
    </>
  );
};
export default Modal;
