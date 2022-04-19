import { Router } from "express";
const router = Router();
import {
  product_create,
  product_all,
  product_details,
  product_update,
  product_delete,
} from "../controllers/productController.js";
// const router = require("express").Router();
// const productController = require("../controllers/productController");

router.post("/", userCreate);
router.get("/", userAll);
router.get("/:userId", userDetails);
router.patch("/:userId", userUpdate);
router.delete("/:userId", userDelete);

// module.exports = router;
export default router;
