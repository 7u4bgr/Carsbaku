import axios from "../index";
const getCars=(query)=>{
    return axios.get(`catalog/datasets/all-vehicles-model/${query}`);

};
export {getCars}