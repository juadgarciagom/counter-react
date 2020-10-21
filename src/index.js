import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
// import FirstApp from './FirstApp';

import './index.css';

//const sayHi = <h1>Hola Juan</h1>;
const divRoot = document.getElementById('root');

ReactDOM.render(<CounterApp  title = 'Cuanto es 2 + 2?' value = {10} />, divRoot);
