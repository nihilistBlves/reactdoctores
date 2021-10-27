import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuDoctores extends Component {
    render() {
        return (
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/doctores">DOCTORES</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/doctores">Ver doctores</NavLink>
                            <NavLink className="nav-link" to="/doctores/crear">Crear doctor</NavLink>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
