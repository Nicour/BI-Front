import axios from 'axios';

class GnomeService {

  constructor() {
    this.gnomes = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  getOneGnome(id) {
    return this.gnomes.get(`/api/gnomes/${id}`)
    .then(response => response)
  };
}

const gnomeService = new GnomeService();

export default gnomeService
