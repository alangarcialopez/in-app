import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import PanelArriba from './PanelArriba';
class App extends Component {
  render() {
    return (
      
      <div className="App container">
      
      <div className="contenido-principal contenido">
       <div>
         <PanelArriba />
       </div>
      </div>
      
      
        <Header      
        titulo='Flasy Cards' />
            <img className="mb-4" src="./flashy.png" alt="" width="72" height="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1> 
      <div className="contenido-principal contenido">
      <div className="row" >
      <div>
      <div className="sixteen columns" >
      <Formulario />
        
      </div>
      </div>

      </div>


      </div>
      </div>
     
    );
  }
}

export default App;
