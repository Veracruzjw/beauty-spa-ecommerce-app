import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category?: { name: string };
  [key: string]: any;
}

const apiURL = "https://api.escuelajs.co/api/v1/products";
const apiURLCategories = "https://api.escuelajs.co/api/v1/categories";


//Get single product

export const getSingleProduct = async (id: string | number): Promise<Product | undefined> => {
    try {
        const response = await axios.get<Product>(`${apiURL}/${id}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error)
    }
}
//Get all product

export const getAllProducts = async (): Promise<Product[] | undefined> => {
    try {
        const response = await axios.get<Product[]>(apiURL);
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error)
    }
}
//Get product by category

export const getProductsByCategory = async (id: string | number): Promise<Product[] | undefined> => {
    try {
        const response = await axios.get<Product[]>(`${apiURLCategories}/${id}/products`);
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error)
    }
}
//Get related products

export const getRelatedProducts = async (id: string | number): Promise<Product[] | undefined> => {
    try {
        const response = await axios.get<Product[]>(`${apiURL}/${id}/related`);
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error)
    }
}