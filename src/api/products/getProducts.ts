import axios from "axios";
import { ProductType } from "../../types/productType";
import ParamsApiType from "../../types/paramsApiType";

const getProducts = async (filter: ParamsApiType) => {
    return axios<ProductType[]>({
        method: "GET",
        url: "https://kosarevsky-ideal-guacamole-jgqr6pq567q2p4jp-3000.preview.app.github.dev/products",
        // url: "http://localhost:3001/products",
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
