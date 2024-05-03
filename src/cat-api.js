import axios from 'axios';
//axios.defaults.headers.common["x-api-key"] = "твой ключ";
const api_key =
  'live_XkapSigYWcD78BGLteD6ebO6NnLe1TjQNZRy7kKiKIIfBayI2rT2fpMMNmWyuHQR';
export default axios;

const urlBreeds = `https://api.thecatapi.com/v1/breeds`;
const ulrImage = `https://api.thecatapi.com/v1/images/`;

let axiosApi = null;

export function init(api_key) {
  axiosApi = require('axios').default;
  axiosApi.defaults.headers.common['x-api-key'] = api_key;
}
export function fetchBreeds() {
  return axiosApi
    .get(urlBreeds)
    .then(response => response.data)
    .catch(error => {
      console.error('Błąd podczas pobierania ras:', error);
      throw error;
    });
}
export function fetchCatByBreed(breedId) {
  return axiosApi
    .get(`${ulrImage}${breedId}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Błąd podczas pobierania ras:', error);
      throw error;
    });
}
