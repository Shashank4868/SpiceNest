import { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return (
    <div
      className="fixed w-full h-[100%] z-20 bg-backdrop"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed mt-[10vh] mb-[10vh] ml-[10%] w-[80%] bg-white p-4 rounded-xl shadow-card z-30  ">
      <div className="">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
