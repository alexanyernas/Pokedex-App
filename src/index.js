import React from 'react';
import reactDom from 'react-dom';
import Pokedex from './components/Pokedex';
import './styles/index.css';

const divRoot = document.querySelector('#root');

reactDom.render( <Pokedex />, divRoot );