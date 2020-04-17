import axios from "axios";
import { appKey, appSecret } from "./const";

export const getCep = (cep) => axios.get(`https://webmaniabr.com/api/1/cep/${cep}/?app_key=${appKey}&app_secret=${appSecret}`);
export const getCity = (ufId) => axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufId}/municipios`);
export const getUf = () => axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
