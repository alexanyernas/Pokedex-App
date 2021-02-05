import React from 'react';
import reactDom from 'react-dom';
import Pokedex from './components/Pokedex';

const divRoot = document.querySelector('#root');

reactDom.render( <Pokedex />, divRoot );