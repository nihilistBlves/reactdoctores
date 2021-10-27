import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom';

export default class EliminarDoctor extends Component {

    state = {
        doctor: {},
        carga: false,
        status: false
    }

    eliminarDoctor = () => {
        var request = "/api/Doctores/" + this.props.idDoctor;
        var url = Global.url + request;
        axios.delete(url).then(response => {
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

    componentDidMount = () =>{
        this.cargarDoctor();
    }

    render() {
        if (this.state.status) {
            return(<Redirect to="/doctores"/>);
        }
        return (
            <div className="row m-3 justify-content-center">
                {this.state.carga ? 
                    <div className="col-6">
                        <h1>¿Desea eliminar el siguiente elemento?</h1>
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title card-header list-group-flush">{this.state.doctor.apellido}</h5>
                            <ul className="list-group list-group-flush">
                                <h6 className="card-subtitle mb-2 text-muted list-group-item">{"ID Hospital: "+this.state.doctor.idHospital}</h6>
                                <h6 className="card-subtitle mb-2 text-muted list-group-item">{"Especialidad: "+this.state.doctor.especialidad}</h6>
                                <h6 className="card-subtitle mb-2 text-muted list-group-item">{"Salario: "+this.state.doctor.salario+" $"}</h6>
                            </ul>
                            <div className="row justify-content-center">
                                <div className="col-3">
                                    <button onClick={() => {this.eliminarDoctor()}} className="btn btn-danger">Eliminar</button>
                                </div>
                                <div className="col-3">
                                    <NavLink to="/doctores/" className="btn btn-secondary">Volver</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div> :
                    <h1>Cargando datos...</h1>
                }
            </div>
        )
    }
}
