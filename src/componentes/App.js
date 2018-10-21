import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import PanelArriba from './PanelArriba';
class App extends Component {
  render() {
    return (
      
      <div className="App container">
      <div>
      </div>
      <div className="contenido-principal contenido">
        <PanelArriba />
      </div>
        <Header      
        titulo='Flasy Cards' /> 
      <div className="contenido-principal contenido">
      <div className="row" >
      <div className="panel-body" >
      <Formulario />
        
      </div>

      </div>


      </div>
      </div>
     
    );
  }
}

export default App;
