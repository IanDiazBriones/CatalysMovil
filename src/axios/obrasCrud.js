import axios from 'axios';

export const getObras_URL = 'obras/encargados';
export const getObra_URL = 'obras/asignacion';
export function getObras(queryParams) {
  return axios.get(getObras_URL, {queryParams});
}
export function getObra(queryParams) {
  return axios.post(getObra_URL, {queryParams});
}
