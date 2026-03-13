import express from "express";

import {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productControllers.js";

import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/createproduct", upload.single("image"), createProduct);

router.get("/getallproduct", getAllProduct);

router.get("/getsingleproduct/:id", getSingleProduct);

router.put("/updateproduct/:id", upload.single("image"), updateProduct);

router.delete("/deleteproduct/:id", deleteProduct);

export default router;