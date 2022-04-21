import { Router } from "express";
const router = Router();
import {
  projectCreate,
  projectAll,
  projectList,
  //   projectDetails,
  //   projectUpdate,
  //   projectDelete,
} from "../controllers/projectController.js";
// import { userLogin } from "../controllers/userController.js";
// const router = require("express").Router();
// const productController = require("../controllers/productController");

router.get("/", projectCreate);
router.get("/", projectAll);
router.get("/:size", projectList);
// router.get("/:projectId", projectDetails);
// router.patch("/:projectId", projectUpdate);
// router.delete("/:projectId", projectDelete);
// router.post("/login", contactLogin);
// module.exports = router;
export default router;
