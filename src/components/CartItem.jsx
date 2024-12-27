import React,{useState,useContext} from "react";
import { ProductContext } from "../contexts/ProductContextProvider";
import Calculate from "./Calculate";
export default function CartItem() {
  const{products,setProducts,handleRemove,handlechange}=useContext(ProductContext)
 
   return (

    <div className='container'>
      {
        products.map((element, index) => {
          return <div className='card' key={`${element.title}-${index}`} style={{ width: "30rem", height: "30rem" }}>
            <div className="card-body">
                <div className="d-flex ">
                  <div className="flex-shrink-0">
                    <img src={element.image} className="img-fluid  "
                      style={{ width: "100px", height: "100px" }} alt={element.title} />
                  </div>
                  <div className="flex-grow-1 mx-3">
                    <h5>{element.title}</h5>
                    <p className="text-muted mb-2">{element.description}</p>

                  </div>
                  <div className="text-end">
                  <div className="btn-group">
                      <button type="button" className="btn btn-danger dropdown-toggle" 
                      data-bs-toggle="dropdown" aria-expanded="false" >
                      1
                      </button>
                      <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={()=>handlechange(1,element.price,element.id,element.shipping)}>1</button></li>
                        <li><button className="dropdown-item"  onClick={()=>handlechange(2,element.price,element.id,element.shipping)}>2</button></li>
                        <li><button className="dropdown-item"  onClick={()=>handlechange(3,element.price,element.id,element.shipping)}>3</button></li>
                      </ul>
                    </div>
                    <p>{element.price}</p>
                    <button onClick={()=>handleRemove(element.id)}     className="btn btn-danger btn-sm">Remove</button>
                  </div>
                
                </div>
                <hr></hr>
                <Calculate/>
              </div>

            
            <div>
            </div>
          </div>
        })
      }
    </div>
  )
}