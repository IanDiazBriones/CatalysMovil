import axios from "axios";

export const LOGIN_URL = "api/login";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";

export const ME_URL = "api/me";

export function login(loginame, password) {
  return  axios.post(LOGIN_URL, { loginame, password,id_perfil:3 });
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
export function requestChangePass(data) {
  return axios.post(`${ME_URL}/changepass`, { data });
}

