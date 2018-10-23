import React, {Component} from 'react';


class FormularioLog extends Component{
    nombreCorreo = React.createRef();
    contrasena = React.createRef()

    logIn =(e) => {
        e.preventDefault();

        const correo= {
            nombreCorreo : this.nombreCorreo.current.value,
            contrasena : this.contrasena.current.value
        }
        console.log(correo);

        e.currentTarget.reset();
    }
    render(){
        return(
            <form onSubmit={this.logIn}>
    <h2>Ingresa tu correo aqui</h2>
    <div className="campo">
        <label>Correo de Usuario</label>
        <input ref={this.nombreCorreo} className="form-control u-full-width" type="email"  />
    </div>

    <div className="campo">
        <label>Contraseña</label>
        <input ref={this.contrasena}className="u-full-width" type="password"  />
    </div>

    <input className="button-primary u-full-width" type="submit" value="Iniciar" />
    <input className="button-primary u-full-width" type="reset" value="Cancelar" />
</form>
        )

    }

    
}
export default FormularioLog;