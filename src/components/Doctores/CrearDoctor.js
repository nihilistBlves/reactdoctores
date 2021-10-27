import React, { Component } from 'react'
import axios from 'axios'
import { NavLink, Redirect } from 'react-router-dom'
import Global from '../../Global';

export default class CrearDoctor extends Component {

    state = {
        status: false
    }

    cajaDoctor = React.createRef();
    cajaHospital = React.createRef();
    cajaApellido = React.createRef();
    cajaEspecialidad = React.createRef();
    cajaSalario = React.createRef();

    crearDoctor = (e) => {
        e.preventDefault();
        var request = "/api/Doctores";
        var url = Global.url + request;
        var doctor = {
            idDoctor: parseInt(this.cajaDoctor.current.value),
            idHospital: parseInt(this.cajaHospital.current.value),
            apellido: this.cajaApellido.current.value,
            especialidad: this.cajaEspecialidad.current.value,
            salario: parseInt(this.cajaSalario.current.value)
        }
        axios.post(url, doctor).then(response => {
            this.setState({
                status: true
            });
        });
    }

    render() {
        if (this.state.status) {
            return(<Redirect to="/doctores"/>)
        }
        return (
            <div className="row m-3 justify-content-center">
                <div className="col-6">
                        <h1>Crear doctor</h1>
                        <form onSubmit={this.crearDoctor}>
                            <div className="row">
                                <div class="col-6 mb-3">
                                    <label class="form-label">ID Doctor</label>
                                    <input type="number" class="form-control" placeholder="ID del doctor" ref={this.cajaDoctor}/>
                                </div>
                                <div class="col-6 mb-3">
                                    <label class="form-label">ID Hospital</label>
                                    <input type="number" class="form-control" placeholder="ID del hospital"  ref={this.cajaHospital}/>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Apellido</label>
                                <input type="text" class="form-control" placeholder="Introduzca el apellido del doctor" ref={this.cajaApellido}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Especialidad</label>
                                <input type="text" class="form-control" placeholder="Introduzca la especialidad del doctor" ref={this.cajaEspecialidad}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Salario</label>
                                <input type="number" class="form-control" placeholder="Introduzca el salario del doctor"  ref={this.cajaSalario}/>
                            </div>
                            <div className="row m-4 justify-content-center">
                                <div className="col-5">
                                    <button type="submit" class="btn btn-primary">Crear doctor</button>
                                </div>
                                <div className="col-3">
                                    <NavLink className="btn btn-secondary" to="/doctores">Volver</NavLink>
                                </div>
                            </div>
                        </form>
                </div>  
            </div>
        )
    }
}
