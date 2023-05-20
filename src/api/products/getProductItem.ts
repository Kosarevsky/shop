import axios from "axios";
import { ProductType } from "../../types/productType";

const getProductItem = async (id: number) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    return axios<ProductType>({
        method: "GET",
        url: `http://localhost:3001/products/${id}`,
    });
};
export default getProductItem;
