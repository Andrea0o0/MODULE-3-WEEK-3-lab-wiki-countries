import axios from "axios"

class CountryService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_URL}`
    });
  }

  getCountries() {
    return this.api.get('/').then(({ data }) => data).catch(err => console.error(err))
  }

  getCountry(id) {
    return this.api.get(`/${id}`).then(({ data }) => data).catch(err => console.error(err))
  }

}

const countryService = new CountryService();
export default countryService;