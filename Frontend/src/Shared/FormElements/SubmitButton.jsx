// SubmitButton.js
import React from "react";

import Button from "../UI/Button";

const SubmitButton = ({ text }) => {
  return (
    <div className="text-center">
      <Button
        type="submit"
        className="bg-blue-500  py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {text}
      </Button>
    </div>
  );
};

export default SubmitButton;
