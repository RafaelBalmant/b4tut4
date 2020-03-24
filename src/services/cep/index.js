import axios from "axios";
import { appKey, appSecret } from "./const";

export const getCep = (cep) => axios.get(`https://webmaniabr.com/api/1/cep/${cep}/?app_key=${appKey}&app_secret=${appSecret}`);