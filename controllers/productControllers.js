import { ProductModel } from "../models/product.js";

// CREATE PRODUCT
export const createProduct = async (req, res) => {

  try {

    const product = await ProductModel.create({

      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock,
      image: req.file ? req.file.filename : ""

    });

    res.status(201).json({
      success: true,
      product
    });

  } catch (error) {

    console.log(error); // IMPORTANT for debugging

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

};

// GET ALL PRODUCTS
export const getAllProduct = async (req, res) => {

  try {

    const keyword = req.query.search
      ? {
          name: {
            $regex: req.query.search,
            $options: "i"
          }
        }
      : {};

    const products = await ProductModel.find(keyword);

    res.status(200).json(products);

  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Products not found"
    });

  }

};


// GET SINGLE PRODUCT
export const getSingleProduct = async (req, res) => {

  try {

    const product = await ProductModel.findById(req.params.id);

    res.status(200).json({
      success: true,
      product
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Error fetching product"
    });

  }

};


// UPDATE PRODUCT
export const updateProduct = async (req, res) => {

  try {

    let data = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock
    };

    if (req.file) {
      data.image = req.file.filename;
    }

    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );

    res.status(200).json({
      success: true,
      product
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Product not updated"
    });

  }

};


// DELETE PRODUCT
export const deleteProduct = async (req, res) => {

  try {

    await ProductModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Product deleted"
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Product not deleted"
    });

  }

};