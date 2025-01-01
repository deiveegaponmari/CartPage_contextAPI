import React,{useContext} from "react";
import { ProductContext } from "../contexts/ProductContextProvider"
export default function CartItem() {
  const{  products,
    selectValue,
    subTotal,
    Total,
    individualTotals,
    setIndividualTotals,
    handleRemove,
    handlechange}=useContext(ProductContext)
 
   return (

    <div className='container d-flex align-content-center justify-content-center flex-wrap'>
      {
        products.map((element, index) => {
          return <div className=" m-2 "  key={`${element.title}-${index}`} >
          <div className='card'style={{ width: "30rem", height: "30rem" }}>
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
                      {selectValue}
                      </button>
                      <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={()=>handlechange(1,element.id)}>1</button></li>
                        <li><button className="dropdown-item"  onClick={()=>handlechange(2,element.id)}>2</button></li>
                        <li><button className="dropdown-item"  onClick={()=>handlechange(3,element.id)}>3</button></li>
                      </ul>
                    </div>
                    <p>{element.price}</p>
                    <button onClick={()=>handleRemove(element.id)}     className="btn btn-danger btn-sm">Remove</button>
                  </div>
                
                </div>
                <hr></hr>
                {/* 
                <Calculate/> */}
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="mb-1">SUBTOTAL:</p>
                    <p className="mb-1">SHIPPING:</p>
                    <hr />
                    <p className="fw-bold fs-5">TOTAL:</p>
                  </div>
                  <div className="text-end">
                    <p className="mb-1 fw-bold">{individualTotals[element.id]?.subTotal || 0}</p>
                    <p className="mb-1 text-success fw-bold">{element.shipping}</p>
                    <hr/>
                    <p className="fw-bold fs-5">{individualTotals[element.id]?.Total || 0}</p>
                  </div>
                  </div>
              </div>

            
            <div>
            </div>
            </div>
          </div>
        })
      }
    </div>
  
  )
}