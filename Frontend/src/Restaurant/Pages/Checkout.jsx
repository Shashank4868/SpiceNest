import React, { useContext } from "react";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import CartContext from "../../Shared/context/cart-context";
import { useForm } from "../../Shared/hooks/form-hook";
import Input from "../../Shared/FormElements/Input";
import { useHttpClient } from "../../Shared/hooks/http-hook";
import LoadingSpinner from "../../Shared/UIElements/LoadingSpinner";
import ErrorModal from "../../Shared/UIElements/ErrorModal";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/util/validators";
import Button from "../../Shared/UI/Button";
import { AuthContext } from "../../Shared/context/auth-context";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const uid = useParams().uid;

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const orderSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await sendRequest(
        `http://localhost:5000/hotel/order/${uid}`,
        "POST",
        JSON.stringify({
          // email: formState.inputs.email.value,
          name: formState.inputs.name.value,
          address: formState.inputs.address.value,
          phone: formState.inputs.phone.value,
          products: JSON.stringify(cartCtx.items),
          total: cartCtx.totalAmount,
        }),
        {
          "Content-Type": "application/json",
          authorization: "Bearer " + auth.token,
        }
      );
      alert("Order Placed Successfully");
      cartCtx.clearCart();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
      {error && <ErrorModal error={error} onClear={clearError} />}
      <div className="flex flex-row mt-8 justify-around">
        <div className="w-[50%] m-auto rounded-lg shadow-card overflow-scroll h-[70vh] flex flex-col justify-between">
          {cartCtx.items.length > 0 ? (
            cartCtx.items.map((item) => (
              <li
                key={item.id}
                className="flex m-auto justify-between items-center border-b-2 border-b-_112D4E border-solid px-4 py-4 mx-4 my-4"
              >
                <div>
                  <h2 className="font-bold text-xl mb-1">{item.name}</h2>
                  <div className="w-40 flex justify-between items-center">
                    <span className="font-bold text-_112D4E">{item.price}</span>
                    <span className="font-bold px-3 py-1 border-[1px] border-solid border-_112D4E rounded-lg text-_3F72AF">
                      x {item.amount}
                    </span>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <span className="text-red p-28 text-xl">
              No Items in Cart. Please add something..
            </span>
          )}
          <div className="flex justify-between items-center  px-4 py-4 mx-4 my-4 font-bold text-2xl mb-4 mt-4">
            <span>Total Amount</span>
            <span>${cartCtx.totalAmount}</span>
          </div>
        </div>
        <form className="w-[30%] m-auto rounded-lg shadow-button px-8 py-4 ">
          <Input
            element="input"
            id="name"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name"
            onInput={inputHandler}
          />
          <Input
            element="textarea"
            type="text"
            id="address"
            label="Address"
            rows="3"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid Address"
            onInput={inputHandler}
          />
          <Input
            element="input"
            type="tel"
            id="phone"
            label="Phone"
            validators={[VALIDATOR_MAXLENGTH(10)]}
            errorText="Please enter a valid Phone Number"
            onInput={inputHandler}
          />
          {cartCtx.items.length > 0 ? (
            <Button type="submit" onClick={orderSubmitHandler}>
              Order
            </Button>
          ) : (
            <Button disabled>Order</Button>
          )}
        </form>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
