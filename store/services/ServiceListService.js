import axios from "axios";
import { BASE_URL } from "../actions/ActionConstant";

export function  getAllService(){
    return axios.get(BASE_URL+ "serviceList/all");
}

export function saveServiceRequest(sname){
    return axios.get(BASE_URL+ "serviceList/serviceName/"+sname)
}