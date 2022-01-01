// Constants.js
const prod = {
  API_URL: 'https://m08nmr31tj.execute-api.us-east-2.amazonaws.com/prod',
};
const dev = {
  API_URL: 'http://192.168.0.13:8000',
  //API_URL: 'https://m08nmr31tj.execute-api.us-east-2.amazonaws.com/prod',
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
