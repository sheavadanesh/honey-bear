import axios from "axios";

export const search = searchData => {
  return axios.get('/api/items', searchData)
}