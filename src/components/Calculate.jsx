import React,{useContext} from "react"
import { ProductContext } from "../contexts/ProductContextProvider"
export default function Calculate(){
    const{}=useContext(ProductContext);
    return(
        <>
        <div className="d-flex justify-content-between">
                  <div>
                    <p className="mb-1">SUBTOTAL:</p>
                    <p className="mb-1">SHIPPING:</p>
                    <hr />
                    <p className="fw-bold fs-5">TOTAL:</p>
                  </div>
                  <div className="text-end">
                    <p className="mb-1 fw-bold"></p>
                    <p className="mb-1 text-success fw-bold">SHIPPING:</p>
                    <hr/>
                    <p className="fw-bold fs-5">TOTAL:</p>
                  </div>
                </div>
        </>
    )
}