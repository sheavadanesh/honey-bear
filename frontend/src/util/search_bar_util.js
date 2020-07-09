import axios from "axios";

export const search = ({title, startDate, endDate}) => {
  return axios.get('/api/items/search/', {
    params: {
      title: title,
      startDate: startDate,
      endDate: endDate
    }
  })
};

// export const search = searchData => {
//   debugger
//   return axios.get('/api/items', searchData )
// }

// export const search = searchData => {
//   debugger
//   return axios.post('/api/items/search-items', searchData)
// }  