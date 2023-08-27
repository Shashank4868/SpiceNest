import React from "react";

// import { useHttpClient } from "../../Shared/hooks/http-hook";
import { orders } from "./orders";

const OrderDetail = () => {
  // const [isLoading, error, sendRequest, clearError] = useHttpClient();

  // useEffect(() => {
  //   send request to fetch the user details as per userId
  // }, []);

  return (
    <div className="m-auto">
      <h1 className="m-auto mt-4 text-white text-xl text-center bg-button w-1/2">
        Your Recent Orders
      </h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div
            key={order.id}
            className="m-auto mt-4 w-1/2 max-w-full rounded-sm shadow-md p-4"
          >
            <div className="flex flex-col">
              <span className="text-_112D4E">
                <span>Order Id: </span>
                {order.id}
              </span>
              <span className="text-_112D4E">
                <span>Order date: </span>
                {order.date}
              </span>
              <span className="text-_112D4E">
                <span>Order amount: </span>
                {order.total}
              </span>
              <span className="text-_112D4E">
                <span>Items: </span>
                <ul className="flex flex-row justify-around w-full bg-button mt-4">
                  <li>Name</li>
                  <li>Quantity</li>
                  <li>Price</li>
                </ul>
                {order.items.map((item) => (
                  <li
                    key={item.id}
                    className="text-_112D4E flex flex-row justify-around w-full mt-4"
                  >
                    <span>{item.name} </span>
                    <span>{item.quantity} </span>
                    <span>{item.price} </span>
                  </li>
                ))}
              </span>
            </div>
          </div>
        ))
      ) : (
        <h1 className="m-auto mt-4 text-red text-xl text-center w-1/2">
          No Orders Found.
        </h1>
      )}
    </div>
  );
};

export default OrderDetail;
