import axios from "axios";
import { TokenRequestType } from "../../types/tokenRequestType";
import { TokenResponseType } from "../../types/tokenResponceType";

const createTokens = (data: TokenRequestType) =>
    axios<TokenResponseType>({
        method: "POST",
        url: "https://studapi.teachmeskills.by/auth/jwt/create/",
        data,
    });

export default createTokens;
