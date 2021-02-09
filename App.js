import React , {Fragment, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  //CREAR PRODUCTOS CON STATE
// entre los corchetes el primer parametro se pone que es lo que es y el segundo el nombre que se va a modificar el state(en gral se usa set<nombre>)

// entre los parentesis de useState se crea un array que adentro contendra un objeto con las caracteristicas del state incial
  const[productos, guardarProductos] = useState([
  {id: 1 , nombre : "Camisa", precio : 500},
  {id: 2 , nombre : "zapatillas", precio : 1200},
  {id: 3 , nombre : "pantalon", precio : 800},
  {id: 4 , nombre : "Remera", precio : 400}

    
  ]);
  
  const [carrito,agregarProducto] = useState([])
  
  
  
  //FECHA
  const date = new Date().getFullYear()

  return (
    <Fragment> 
  
   <Header
    titulo = "Tienda Virtual"
    
   />

   <h1>Lista de productos</h1>
   {productos.map(producto => (
    <Producto 
    key = {producto.id}
    productos = {productos}
    producto = {producto}
    carrito ={carrito}
    agregarProducto = {agregarProducto}
    />
   ))}


    <Carrito
    
    carrito={carrito}
    agregarProducto = {agregarProducto}
    
    />


   <Footer 
   fecha = {date}
   
   />
  
   </Fragment>
  );
}

export default App;
