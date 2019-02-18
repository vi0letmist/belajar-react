import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Product from './Product';
import * as serviceWorker from './serviceWorker';

/*function getMahasiswa(mahasiswa){
    return 'Nama : '+ mahasiswa.nama + 'NIM : ' + mahasiswa.nim;
}

function getStatus(mahasiswa){
    if (mahasiswa < 2019){
        return 'mahasiswa baru';
    }
    else{
        return 'bukan sssmahasiswa baru';
    }

}
const mahasiswi={
    nama : "L:orem ipsum",
    nim : "124331213",
    angkatan : 1994

}

const element = <h1> Hellow, {getMahasiswa(mahasiswi)}</h1>

function tick(){
    const element = (
        <div>
            <h1>Hellow Lorem ipsum</h1>
            <h2>It is {new Date().toLocaleTimeString()} </h2>
        </div> 
    );

    ReactDOM.render(element, document.getElementById('root'));

}
setInterval(tick,1000);
function Product(props){
    return (<div><h1>{props.judul} </h1><h3>Harga : {props.harga}</h3></div>);
}
const element = <Product judul = "Koleksi Avengers"
harga="100.000"/>

ReactDOM.render(element, document.getElementById('root'));

class Product extends React.Component{
    render(){
        return (<div><h1>{this.props.judul}</h1><h3>Harga : {this.props.harga}</h3></div>);
    }
}*/
const element = <App/>

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
