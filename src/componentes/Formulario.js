import React, {Component} from 'react';

class FormularioLog extends Component{
    render(){
        return(
            <form>
            <h2>Inicio de Secion</h2>
            <div className="campo">
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div class="input-group-append"/>
            <span class="input-group-text" id="basic-addon2">@example.com</span>
  </div>
</div>
            
        
            <div className="campo">
                <label>Contraseña</label>
                <input className="u-full-width" type="password" />
            </div>
        
            
            <input className="button-primary " type="submit" value="Iniciar" />
            <input className="button-primary u-full-width" type="submit" value="Cancelar" />

        </form>
        )

    }

}
export default FormularioLog;