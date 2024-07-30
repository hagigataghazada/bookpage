const BASE_URL = "http://localhost:3000";
import axios from "axios";

const getAllCategories = async () => {
  try {
    const response = await axios.get(BASE_URL + "/categories ");
    return response.data;
  } catch (error) {
    return error;
  }
};

const getCategoryById = async (id) => {
  try {
    const response = await axios.get(BASE_URL + "/categories/" + id);
    return response.data;
  } catch (error) {
    console.error("Error getting: " + error);
    return error;
  }
};

const getAllProducts = async () => {
  try {
    const response = await axios.get(BASE_URL + "/products");
    return response.data;
  } catch (error) {
    console.error("Error getting: " + error);
    return error;
  }
};

const getProductsByCategory = async (categoryId) => {
  try {
    const response = await axios.get(BASE_URL + "/products");
    const data = await response.data.filter(
      (p) => +p.category_id === +categoryId
    );
    return data;
  } catch (error) {
    console.error("Error getting: " + error);
    return error;
  }
};

const getProductById = async (productId) => {
  try {
    const response = await axios.get(BASE_URL + "/products/" + productId);
    return response.data;
  } catch (error) {
    console.error("Error getting: " + error);
    return error;
  }
};

export {
  BASE_URL,
  getAllCategories,
  getCategoryById,
  getAllProducts,
  getProductsByCategory,
  getProductById,
};
