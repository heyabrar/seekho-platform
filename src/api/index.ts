import axios from "axios";

const getData = () => {
  return axios.get(`https://api.seekhoapp.com/api/v1.6/premium/premium-plans/?source=tab`);
};

export default getData;
