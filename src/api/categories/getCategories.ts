import axios from "axios";
import { CategoryType } from "../../types/categoriesTypes";

const getCategories = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    return axios<CategoryType[]>({
        method: "GET",
        url: "http://localhost:3001/categories",
    });
};

export default getCategories;
