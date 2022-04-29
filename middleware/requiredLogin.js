import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
import Login from "../models/Users.js";
const requireLogin = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Please login first" });
  }
  const token = authorization.replace("Bearer ", "");
  jsonwebtoken.verify(token, SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "Please login first" });
    }
    const { _id } = payload;
    Login.findById(_id).then((userData) => {
      req.Login = userData;
      next();
    });
  });
};
export default requireLogin;
