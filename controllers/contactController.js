// const Product = require("../model/Product");
import Contact from "../models/Contact.js";
import { main } from "../utils/mailers.js";
// import Bcrypt from "bcryptjs";
// import jsonwebtoken from "jsonwebtoken";
// const SECRET_KEY = process.env.SECRET_KEY;
export const contactAll = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.json({ message: "Data is not available" });
  }
};

export const contactDetails = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    res.json(contact);
  } catch (error) {
    res.json({ message: "Data is not available" });
  }
};

export const contactCreate = async (req, res) => {
  let { username, email, message } = req.body;
  //   password = Bcrypt.hashSync(password, 10);
  const contactModel = new Contact({
    username: username,
    email: email,
    message: message,
  });
  try {
    const savedContact = await contactModel.save();
    main(email);
    res.send({
      savedContact,
      message: "Contact Added Successfully",
      statusCode: 200,
    });
    // res.send("data created succesffully");
  } catch (error) {
    res.status(400).send(error);
  }
};

// export const userLogin = async (req, res) => {
//   try {
//     const email = req.body.email;
//     let password = req.body.password;
//     const userData = await Login.findOne({ email: email });
//     if (Bcrypt.compare(password, userData.password)) {
//       const token = jsonwebtoken.sign({ _id: userData._id }, SECRET_KEY);
//       res.status(201).json({ message: "User login successfully", token });
//     } else {
//       res.json({ message: "Invalid login details" });
//     }
//     // res.json(product);
//   } catch (error) {
//     res.status(400).json({ message: error });
//   }
// };

export const contactUpdate = async (req, res) => {
  try {
    let { username, email, message } = req.body;
    // password = Bcrypt.hashSync(password, 10);
    const contact = {
      username: username,
      email: email,
      message: message,
    };
    const updateContact = await Contact.findByIdAndUpdate(
      { _id: req.params.contactId },
      contact,
      { new: true }
    );
    res.json({
      updateContact,
      message: "Contact Updated Successfully",
      statusCode: 200,
    });
  } catch (error) {
    res.json({ message: error });
  }
};

export const contactDelete = async (req, res) => {
  try {
    const removecontact = await Contact.findByIdAndDelete(req.params.contactId);
    res.json({
      message: "Contacts Deleted Successfully",
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
