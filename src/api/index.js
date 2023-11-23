import axios from "axios";
const instans=axios.create({
    baseURL:"https://public.opendatasoft.com/api/explore/v2.1/"
})
export default instans;