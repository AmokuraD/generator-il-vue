import axios from "./request";

const SAMPLE_URL = "/sample";

const getSampleData = (url = SAMPLE_URL) => {
  return axios.get(url);
};

export { getSampleData };
