import axios from "axios";
import * as Constants from "../helpers/Constants";

export default async function UseFetch(url)  {
    let data = null;
   
    await axios
    .get(url, {timeout : 6000})
    .then(response => {
        data = response.data
    })

    return data;
    };