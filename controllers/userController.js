// const Product = require("../model/Product");
import Login from "../models/Users.js";
export const userAll = async (req, res) => {
  try {
    const users = await Login.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
};

export const userDetails = async (req, res) => {
  try {
    const user = await Login.findById(req.params.userId);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};

export const userCreate = async (req, res) => {
  // const { userName, email, address, password } = req.body;
  const userModel = new Login({
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    password: req.body.password,
  });
  try {
    const savedUser = await userModel.save();
    res.send({
      savedUser,
      message: "Data Added Successfully",
      statusCode: 200,
    });
    // res.send("data created succesffully");
  } catch (error) {
    res.status(400).send(error);
  }
};

export const userLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userEmail = await Login.findOne({ email: email });
    if (userEmail.password === password) {
      res.status(201).send("Data login successfully");
    } else {
      res.send("Invalid login details");
    }
    // res.json(product);
  } catch (error) {
    res.status(400).send("Invalid login details");
  }
};

export const userUpdate = async (req, res) => {
  try {
    const user = {
      username: req.body.username,
      email: req.body.email,
      address: req.body.address,
      password: req.body.password,
    };
    const updateUser = await Login.findByIdAndUpdate(
      { _id: req.params.userId },
      user
    );
    res.json({
      updateUser,
      message: "Data Updated Successfully",
      statusCode: 200,
    });
  } catch (error) {
    res.json({ message: error });
  }
};

export const userDelete = async (req, res) => {
  try {
    const removeuser = await Login.findByIdAndDelete(req.params.userId);
    res.json({
      message: "Data Deleted Successfully",
      statusCode: 200,
    });
  } catch (error) {
    res.json({ message: error });
  }
};

// module.exports = {
//   product_all,
//   product_details,
//   product_create,
//   product_update,
//   product_delete,
// };
