import React, { useState, useContext } from "react";

import Input from "../../../Shared/FormElements/Input";
import ErrorModal from "../../../Shared/UIElements/ErrorModal";
import LoadingSpinner from "../../../Shared/UIElements/LoadingSpinner";
import Button from "../../../Shared/UI/Button";
import { useForm } from "../../../Shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../Shared/util/validators";

import { useHttpClient } from "../../../Shared/hooks/http-hook";
import { AuthContext } from "../../../Shared/context/auth-context";

const SignUpForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          email: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          email: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    if (isLoginMode) {
      try {
        // const responseData = await sendRequest(
        //   process.env.REACT_APP_BACKEND_URL + "/users/login",
        //   "POST",
        //   JSON.stringify({
        //     email: formState.inputs.email.value,
        //     password: formState.inputs.password.value,
        //   }),
        //   {
        //     "Content-Type": "application/json",
        //   }
        // );
        // auth.login(responseData.userId, responseData.token);
        auth.login(1, "78rhgbfy89347yh");
      } catch (err) {}
    } else {
      try {
        const formData = new FormData();
        formData.append("email", formState.inputs.email.value);
        formData.append("name", formState.inputs.name.value);
        formData.append("password", formState.inputs.password.value);
        // const responseData = await sendRequest(
        //   process.env.REACT_APP_BACKEND_URL + "/users/signup",
        //   "POST",
        //   formData
        // );

        // auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    }
  };

  return (
    <React.Fragment>
      {/* <ErrorModal error={error} onClear={clearError} /> */}
      <div className="m-auto mt-8 mb-8 text-_112D4E text-center font-bold text-xl">
        Let's Get Started!!!
      </div>
      <div className="m-auto mt-8 mb-8 text-_112D4E text-center font-bold text-xl">
        {isLoginMode ? "Login" : "Sign Up"}
      </div>
      <div className="w-[30%] m-auto">
        <form onSubmit={authSubmitHandler}>
          {isLoading && <LoadingSpinner asOverlay />}

          <Input
            id="email"
            label="E-mail"
            type="email"
            element="input"
            onInput={inputHandler}
            errorText="Invalid Email"
            validators={[VALIDATOR_EMAIL()]}
          />
          {!isLoginMode && (
            <Input
              id="name"
              label="Name"
              type="text"
              element="input"
              onInput={inputHandler}
              errorText="Invalid Name"
              validators={[VALIDATOR_REQUIRE()]}
            />
          )}
          <Input
            id="password"
            label="Password"
            type="password"
            element="input"
            onInput={inputHandler}
            errorText="Invalid Password ( minimum 8 characters )"
            validators={[VALIDATOR_MINLENGTH(8)]}
          />
          <div className="flex">
            <Button type="submit" title="Submit" />
            <Button inverse type="button" onClick={switchModeHandler}>
              {" "}
              Switch to {isLoginMode ? "SignUP" : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignUpForm;
