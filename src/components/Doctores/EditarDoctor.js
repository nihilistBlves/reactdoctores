import axios from 'axios';
import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom';
import Global from '../../Global';

export default class EditarDoctor extends Component {

    state = {
        doctor: {},
        carga: false,
        status: false
    }

    cajaHospital = React.createRef();
    cajaApellido = React.createRef();
    cajaEspecialidad = React.createRef();
    cajaSalario = React.createRef();

    editarDoctor = (e) => {
        e.preventDefault();
        var request = "/api/Doctores";
        var url = Global.url + request;
        var doctor = {
            idDoctor: parseInt(this.props.idDoctor),
            idHospital: parseInt(this.cajaHospital.current.value),
            apellido: this.cajaApellido.current.value,
            especialidad: this.cajaEspecialidad.current.value,
            salario: parseInt(this.cajaSalario.current.value)
        }
        axios.put(url, doctor).then(response => {
            this.setState({
                status: true
            });
        });
    }

    cargarDoctor = () => {
        var request = "/api/Doctores/" + this.props.idDoctor;
        var url = Global.url + request;
        axios.get(url).then(response => {
            this.setState({
                doctor: response.data,
                carga: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarDoctor();
    }

    render() {
        if (this.state.status) {
            return (<Redirect to="/doctores"/>);
        }
        return (
            <div className="row m-3 justify-content-center">
                <div className="col-6">
                    <h1>Editar doctor</h1>
                    {this.state.carga ? 
                        <form onSubmit={this.editarDoctor}>
                            <div className="row">
                                <div class="col-6 mb-3">
                                    <label class="form-label">ID Doctor</label>
                                    <input type="number" disabled class="form-control" value={this.state.doctor.idDoctor}/>
                                </div>
                                <div class="col-6 mb-3">
                                    <label class="form-label">ID Hospital</label>
                                    <input type="number" class="form-control" defaultValue={this.state.doctor.idHospital} ref={this.cajaHospital}/>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Apellido</label>
                                <input type="text" class="form-control" defaultValue={this.state.doctor.apellido} ref={this.cajaApellido}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Especialidad</label>
                                <input type="text" class="form-control" defaultValue={this.state.doctor.especialidad} ref={this.cajaEspecialidad}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Salario</label>
                                <input type="text" class="form-control" defaultValue={this.state.doctor.salario} ref={this.cajaSalario}/>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <button type="submit" class="btn btn-success">Editar doctor</button>
                                </div>
                                <div className="col">
                                    <NavLink className="btn btn-secondary" to="/doctores">Volver</NavLink>
                                </div>
                            </div>
                        </form> :
                        <h2>Cargando datos...</h2>
                }
                </div>
            </div>
        )
    }
}
