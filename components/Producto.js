import React from 'react'

const Producto = ({producto,productos,carrito,agregarProducto}) => {
    const {nombre,precio,id} = producto;

    //Agregar elemntos al carrito
    const seleccionarProducto = id =>{
        const producto = productos.filter(producto => producto.id === id)[0]
        agregarProducto([
            ...carrito,
            producto
        
        ])    
    }
//Eliminar producto
    const eliminarProducto = id => {
        const producto = carrito.filter(producto => producto.id !== id)
        agregarProducto(producto)
    }


    return (
        <div>
        
        <h2>{nombre}</h2>
        <p>${precio}</p>

        {productos
        
        ? (<button
        type = "button"
        onClick = {()=> seleccionarProducto(id)}
        
        
        >Comprar</button>)
    
        : (<button
        type = "button"
        onClick ={()=> eliminarProducto(id)}
        
        
        >Eliminar</button>)
        
        }
        
        </div>
        
        );
}
 
export default Producto;