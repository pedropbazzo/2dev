import axios from 'axios';

 let apiURL = 'https://tindev-app.herokuapp.com';
// if ('development' === 'development') {
//   apiURL = 'https://tindev-app.herokuapp.com';
// } else if ( 'development' === 'production') {
//   apiURL = process.env.REACT_APP_API_URL;
// }

const api = axios.create({
  baseURL: apiURL,
});

export default api;
