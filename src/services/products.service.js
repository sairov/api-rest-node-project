import * as productService from "../models/products.model.js";

export const getAllProducts = async () => {
    return await productService.getAllProducts();;
};

export const getProductById = async (id) => {
  return productService.getProductById(id);
};

export const createProduct = async (product) => {
  return productService.saveProduct(product);
};

export const deleteProduct = async (id) => {
  return productService.deleteProduct(id);
};