//importar siempre sitaxis que se utilice
import React from "react";
//cuando se le pone una mayusucula se le dice a react que ahora es un compoenete y apra llamarla se la llama com etitqueta
/*export function Card(props){
    return (<div>
         <h2>
            pase por aca xddddd
        </h2>
        {/*props le dice a react que el componente react puede recibir propiedades */
      /*  <h1>{props.title}</h1>
        <p>
            {props.body}
        </p>
        <h2>
            pase por aca xddddd
        </h2>
    </div>)
}*/
export function Card(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  