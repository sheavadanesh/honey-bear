import axios from "axios";

export const fetchItems = () => {
  debugger
  return axios.get('/api/items/')
};

// export const fetchItem = (itemId) => {
//     return axios.get(`/api/items/${itemId}`, {
//         params: {
//             title: title,
//             startDate: startDate,
//             endDate: endDate
//         }
//     })
// };