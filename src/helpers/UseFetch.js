import axios from "axios";
import * as Constants from "../helpers/Constants";

export default async function UseFetch(url)  {  //NÃO USAR HOOKS AQUI
    let loading = true;
    let error = null;
    let data = null;

    //const url = Constants.BASE_URL + Constants.USER + Constants.QUERY + input + Constants.LOGIN;
    // const url = Constants.BASE_URL + Constants.USER + input;

   
    await axios
    .get(url, {timeout : 6000})
    .then(response => {
        data = response.data
        loading = false
    })

    return data;
    // .catch(ex => {
    //     error =
    //     ex.code === "ECONNABORTED"
    //     ? "A timeout has occurred"
    //     : ex.code === 403
    //         ? "Authentication expired, please try again later!" :
    //         "An unexpected error has occurred";
    //     loading = false
    //     //return error
    // });
    //     console.log(error ? error : data)
    //     return error ? error : data;
    };