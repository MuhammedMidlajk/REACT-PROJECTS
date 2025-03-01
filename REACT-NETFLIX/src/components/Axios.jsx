import axios from "axios";
import { baseUrl } from "../constants/Dark"; 

const instance = axios.create({
    baseURL: baseUrl,
    
  });

  export default instance