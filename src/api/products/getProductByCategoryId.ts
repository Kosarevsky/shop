import axios from "axios";
import { ProductType } from "../../types/productType";
import paramsApiProductsByCategoryIdType from "../../types/paramsApiProductsByCategoryIdType";

const getProductByCategoryId = async (
    filter: paramsApiProductsByCategoryIdType
) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return axios<ProductType[]>({
        method: "GET",
        url: "http://localhost:3001/products",
        params: {
            _sort: filter.sortField,
            _order: filter.sortDir,
            q: filter.query,
            _page: filter.page,
            _limit: filter.limit,
            categoryId: filter.categoryId,
        },
    });
};

export default getProductByCategoryId;
