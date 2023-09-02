import React from "react";

import Modal from "../modal/Modal";
import Button from "../UI/Button";

const ErrorModal = (props) => {
  return (
    <Modal
      onClose={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear} title="Okay"></Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
