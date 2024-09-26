
import axios from "axios";

export const makeRequest=axios.create({
    baseURL:"https://emotorad-dashboard.onrender.com/api"
   
})