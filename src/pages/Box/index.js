import React, { Component } from 'react'

import {MDInsertDriveFile} from 'react-icons/md'

import logo from '../../assets/logo.svg'


import './styles.css';

export default class Box extends Component {
  render() {
    return (
      <div id="box-container">
        <header>
          <img src={logo} alt=""/>
          <h1>gfbengel</h1>
        </header>

        <ul>
          <li>
            <a href="">
              <MDInsertDriveFile size={24} color="#a5cfff" />
              <strong>nome.file</strong>
            </a>
            <span>a 3 minutos atras</span>
          </li>
          <li>
            <a href="">
              <MDInsertDriveFile size={24} color="#a5cfff" />
              <strong>nome.file</strong>
            </a>
            <span>a 3 minutos atras</span>
          </li>
        </ul>
      </div>
    )
  }
}
