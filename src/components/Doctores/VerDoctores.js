import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class VerDoctores extends Component {

    state = {
        doctores: [],
        status: false
    }

    cargarDoctores = () => {
        var request = "/api/Doctores";
        var url = Global.url + request;
        axios.get(url).then(response => {
            this.setState({
                doctores: response.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarDoctores();
    }

    render() {
        return (
            <div className="row m-3 text-center">
                <div className="col">
                    <h1>Tabla de doctores</h1>
                    {this.state.status ? 
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID Doctor</th>
                                    <th>ID Hospital</th>
                                    <th>Apellido</th>
                                    <th>Especialidad</th>
                                    <th>Salario</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.doctores.map((doctor, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{doctor.idDoctor}</td>
                                        <td>{doctor.idHospital}</td>
                                        <td>{doctor.apellido}</td>
                                        <td>{doctor.especialidad}</td>
                                        <td>{doctor.salario}</td>
                                        <td><NavLink className="btn btn-primary" to={"/doctores/"+doctor.idDoctor}>Ver detalles</NavLink></td>
                                        <td><NavLink className="btn btn-success" to={"/doctores/"+doctor.idDoctor+"/editar"}>Editar</NavLink></td>
                                        <td><NavLink className="btn btn-danger" to={"/doctores/"+doctor.idDoctor+"/eliminar"}>Eliminar</NavLink></td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>:
                        <h2>Cargando datos...</h2>
                    }
                </div>
            </div>
        )
    }
}
