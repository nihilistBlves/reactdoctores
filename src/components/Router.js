import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import EditarDoctor from './Doctores/EditarDoctor'
import MenuDoctores from './Doctores/MenuDoctores'
import VerDoctores from './Doctores/VerDoctores'
import VerDoctor from './Doctores/VerDoctor'
import EliminarDoctor from './Doctores/EliminarDoctor'
import CrearDoctor from './Doctores/CrearDoctor'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
            <MenuDoctores />
                <Switch>
                    <Route exact path="/doctores" component={VerDoctores}/>
                    <Route exact path="/doctores/crear" component={CrearDoctor}/>
                    <Route exact path="/doctores/:idDoctor" render={props => {
                        var id = props.match.params.idDoctor;
                        return(<VerDoctor idDoctor={id}/>);
                    }}/>
                    <Route exact path="/doctores/:idDoctor/editar" render={props => {
                        var id = props.match.params.idDoctor;
                        return(<EditarDoctor idDoctor={id}/>);
                    }}/>
                    <Route exact path="/doctores/:idDoctor/eliminar" render={props => {
                        var id = props.match.params.idDoctor;
                        return(<EliminarDoctor idDoctor={id}/>);
                    }}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
