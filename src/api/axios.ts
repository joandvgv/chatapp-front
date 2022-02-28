import Axios from "axios";
import { configure } from "axios-hooks";

Axios.defaults.withCredentials = true;
export const axios = Axios.create({
  baseURL: "https://mjw9mobb43.execute-api.us-east-1.amazonaws.com",
  withCredentials: true,
});
configure({ axios });
