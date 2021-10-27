import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class VerDoctor extends Component {

    state = {
        doctor: {},
        status: false
    }

    cargarDoctor = () => {
        var request = "/api/Doctores/" + this.props.idDoctor;
        var url = Global.url + request;
        axios.get(url).then(response => {
            this.setState({
                doctor: response.data,
                status: true
            });
        });
    }

    componentDidMount = () =>{
        this.cargarDoctor();
    }

    render() {
        return (
            <div className="row m-3 justify-content-center">
                {this.state.status ? 
                <div className="col-6 text-center">
                    <h1>Doctor - ID {this.state.doctor.idDoctor}</h1>
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
                                    <NavLink to={"/doctores/"+this.state.doctor.idDoctor+"/editar"} className="btn btn-success">Editar</NavLink>
                                </div>
                                <div className="col-3">
                                    <NavLink to="/doctores/" className="btn btn-secondary">Volver</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>: 
                <div className="col-6">
                    <h1>Cargando datos...</h1>
                </div>
                }
            </div>
        )
    }
}
