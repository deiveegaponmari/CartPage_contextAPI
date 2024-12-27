import React,{useContext} from "react"
import { ProductContext } from "../contexts/ProductContextProvider"
export default function Calculate(){
    const{products, subTotal,
        Total}=useContext(ProductContext);
    return(
        <div className="container">
         {
            products.map((item,index)=>{ 
                return 
                })
            }
            </div>
            )
}