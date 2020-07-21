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

