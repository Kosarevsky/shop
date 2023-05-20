import axios from "axios";
import { ProductType } from "../../types/productType";
import ParamsApiType from "../../types/paramsApiType";

const getProducts = async (filter: ParamsApiType) => {
    return axios<ProductType[]>({
        method: "GET",
        url: "http://localhost:3001/products",
        params: {
            _sort: filter.sortField,
            _order: filter.sortDir,
            q: filter.query,
            _page: filter.page,
            _limit: filter.limit,
        },
    });
};

export default getProducts;
