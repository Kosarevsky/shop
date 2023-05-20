import axios from "axios";
import { CategoryType } from "../../types/categoriesTypes";

const getCategories = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    return axios<CategoryType[]>({
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
        },
        // url: "http://localhost:3001/categories",
        url: "https://kosarevsky-ideal-guacamole-jgqr6pq567q2p4jp-3000.preview.app.github.dev/categories",
    });
};

export default getCategories;
