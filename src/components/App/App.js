import React, { Component } from 'react'
import Router from '../Router'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle'

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router />
      </div>
    )
  }
}

