const { validationResult } = require("express-validator");

const User = require("../models/user");
const Order = require("../models/order");
const HttpError = require("../models/http-error");

const orderItemsByUserId = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const userId = req.params.uid;
  const { name, products, total, phone, address } = req.body;

  if (!products || Object.keys(products).length === 0) {
    return next(
      new HttpError("No Products in the cart. Please add some.", 422)
    );
  }

  JSON.stringify(products);

  const newOrder = new Order({
    name,
    user: userId,
    products,
    totalPrice: total,
    address,
    phone,
  });

  try {
    await newOrder.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not place order.",
      500
    );
    return next(error);
  }

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a user.",
      500
    );
    throw next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id.", 404);
    return next(error);
  }

  try {
    await user.orders.push(newOrder);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a user.",
      500
    );
    throw next(error);
  }

  try {
    await user.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a user.",
      500
    );
    throw next(error);
  }

  res.status(201).json({ order: newOrder });
};

const getOrdersByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithOrders;
  try {
    userWithOrders = await User.findById(userId).populate("orders");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a user.",
      500
    );
    return next(error);
  }

  if (!userWithOrders || userWithOrders.orders.length === 0) {
    return next(
      new HttpError("Could not find an order for the provided user id.", 404)
    );
  }

  res.setHeader("Content-Type", "application/json");
  res.json({ orders: userWithOrders.orders.toObject({ getters: true }) });
};

exports.getOrdersByUserId = getOrdersByUserId;
exports.orderItemsByUserId = orderItemsByUserId;
