import axios from "axios";
import { ProductType } from "../../types/productType";

const getProductItem = (id: number) => {
    return axios<ProductType>({
        method: "GET",
        url: `http://localhost:3001/products/${id}`,
    });
};
export default getProductItem;
