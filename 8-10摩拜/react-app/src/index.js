import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css'

import axios from 'axios'
axios.get("/getlist1").then(res=>{
    console.log(res.data)
})
ReactDOM.render(<App />, document.getElementById('root'));
