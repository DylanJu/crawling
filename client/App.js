import React from 'react';
import ReactDOM from 'react-dom';
// import Layout from './Layout'
import { Provider } from 'react-redux'; //REDUX
import { createstore } from 'redux';
import HelloWorld from './Header.js';

let store = createStore(sample);

ReactDOM.render(<Provider store = {store}> {() => <HelloWorld/> } </Provider> , document.getElementById('app'))
