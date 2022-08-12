import logo from './logo.svg';
import './App.css';
import {requestHttp2,requestHttp}from "./promesa";
import{request}from "./res/estatusUser";
import { Card } from './components/card';
function App() {
  //parentesis ejecuta
  var canShow=false;
  var data=[];
 async function showData(){
    data=await request.get();
    //!=devuelve lo opuesto al valor actual.
    canShow=!canShow
    console.log(data);
  }
  return (
    <div className="App">
      <div>
        <button onClick={showData}>mostrar informacion</button>
        {
          data?.map(json =><Card name={json["title"]} />)
        }
      </div>
    </div>
  );
}
export default App;
/*
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}*/