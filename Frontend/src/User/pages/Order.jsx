import React, { useEffect, useState, useContext } from "react";

import { useHttpClient } from "../../Shared/hooks/http-hook";
import { Redirect, useParams } from "react-router-dom/cjs/react-router-dom.min";

import OrderDetail from "../components/OrderDetail";
import ErrorModal from "../../Shared/UIElements/ErrorModal";
import LoadingSpinner from "../../Shared/UIElements/LoadingSpinner";
import { AuthContext } from "../../Shared/context/auth-context";

const Order = () => {
  const auth = useContext(AuthContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedOrders, setLoadedOrders] = useState();

  const uid = useParams().uid;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/hotel/order/user/${uid}`,
          "GET",
          null,
          {
            Authorization: "Bearer " + auth.token,
          }
        );

        setLoadedOrders(responseData.orders);
      } catch (err) {}
    };
    fetchOrders();
  }, [uid, sendRequest, auth.token]);

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
      {error && (
        <div className="text-center text-red mt-8">No Orders Found.</div>
      )}
      {!isLoading && loadedOrders && <OrderDetail orders={loadedOrders} />}
    </React.Fragment>
  );
};

export default Order;
