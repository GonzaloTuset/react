import axios from "axios";
const getStatusUrl = "https://jsonplaceholder.typicode.com/posts";
export const request = {
    //asincrona cuando habia una interrupcion en el funcionamiento, es una interrupcion
    //otra forma de hacer promesas
    async get() {
        try{
            var response = await axios.get(getStatusUrl);
            return response.data;
        }
     catch(error){
        console.log(error);
     }   
    }
       

}
