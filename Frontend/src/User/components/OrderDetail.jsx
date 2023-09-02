import React from "react";

const NoItemsInCart = () => {
  return (
    <h1 className="m-auto mt-4 text-red text-xl text-center w-1/2">
      No Orders Found.
    </h1>
  );
};

const ItemsInCart = (props) => {
  return (
    <div>
      {props.orders.orders.map((order) => (
        <div
          key={order._id}
          className="m-auto mt-4 w-full max-w-full rounded-sm shadow-md p-4"
        >
          <div className="flex flex-col">
            <span className="text-_112D4E">
              <span>Order Id: </span>
              {order._id}
            </span>
            <span className="text-_112D4E">
              <span>Name: </span>
              {order.name}
            </span>
            <span className="text-_112D4E">
              <span>Address: </span>
              {order.address}
            </span>
            <span className="text-_112D4E">
              <span>Contact: </span>
              {order.phone}
            </span>
            <span className="text-_112D4E">
              <span>Total Price: $</span>
              {order.totalPrice}
            </span>
            <span className="text-_112D4E">
              <span>Items: </span>
              <ul className="flex flex-row justify-around w-full bg-button mt-4">
                <li>Name</li>
                <li>Quantity</li>
                <li>Price</li>
              </ul>
              {JSON.parse(order.products).map((item) => (
                <li
                  key={item.id}
                  className="text-_112D4E flex flex-row justify-around w-full mt-4"
                >
                  <span>{item.name} </span>
                  <span>{item.amount} </span>
                  <span>{item.price} </span>
                </li>
              ))}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const OrderDetail = (props) => {
  return (
    <div className="m-auto mb-8 w-1/2">
      <h1 className="m-auto mt-4 text-white text-xl text-center bg-button w-full">
        Your Recent Orders
      </h1>
      {props.orders.length > 0 ? (
        <ItemsInCart orders={props} />
      ) : (
        <NoItemsInCart />
      )}
    </div>
  );
};

export default OrderDetail;
