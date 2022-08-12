//Es algo que puede cumplirse o no. El If solo compara la promesa ejecuta un codigo y si ese codigo realiza la tarea esperadad la ahce sino no pasa nada(esta contemplado que pueda llegar a fallar).
//http request: ir y solicitar cierta informacion(cualquier cosa) a un cliente http(otro host)
//tipos de request(http), se puede obtener los datos, cambiarlos, subir datos y eliminar datos
//get llama obvtiene la info. del http request.
//put cambia la informacion que quieras alterar.
//post: sube datos
//delete: deletea broooo, olaf full build.
//ejemplo
const axios = require('axios').default;//import de la libreria axios
export function requestHttp() {
    //response:se le dice a la respuesta realizada por esa request

    var response;
    //fetch palabra recervada para hacer request, funcion que devuelve una promesa
    //then alamacena datos de fetch si se cumple lo esperado
    //catch lo contrario
    //las promesas existen para: 
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())//pasa todo lo de response a un formato jason, response ahroa es un objeto
        .then(data => console.log(data))//obtiene la info de response. por lo tanto recibe el objeto .json.

        .catch(function (error) {
            console.log(error);
        }); //por defecto hace un get, cuando se pone ".al lado de el parentecis de fetch se le esta diciendo que ahi se van a cargar los datos si son verdaderos."

    console.log(response);
    //se usa return para que una funcion devuelva un valor y se devuelkve en una variable.
}
//asincronia: que hace una funcion asincrona , realiza la funcion normal de una funcion solo que de forma asincronica, mientras se ejecuta el codigo ejecuta otra cosa.
//la funcion va a esperar a que se ejecute una accion
/*con async declaras funcion asincronica*/
export async function requestHttp2(){
   var response=await axios.get("https://jsonplaceholder.typicode.com/posts").data;
    console.log(response.data);


}