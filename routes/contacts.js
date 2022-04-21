import { Router } from "express";
const router = Router();
import {
  contactCreate,
  contactAll,
  contactDetails,
  contactUpdate,
  contactDelete,
} from "../controllers/contactController.js";
// import { userLogin } from "../controllers/userController.js";
// const router = require("express").Router();
// const productController = require("../controllers/productController");

router.post("/", contactCreate);
router.get("/", contactAll);
router.get("/:contactId", contactDetails);
router.patch("/:contactId", contactUpdate);
router.delete("/:contactId", contactDelete);
// router.post("/login", contactLogin);
// module.exports = router;
export default router;
