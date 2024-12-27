import React, { createContext, useState, useEffect } from 'react';
export const ProductContext = createContext({
    products: [], //initial state
    setProducts: () => { },
    handleRemove: () => { },
    handlechange:()=>{}
})
export default function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [selectValue, setSelectValue] = useState(1);
   // const [price, setPrice] = useState(0);
   const[subTotal,subSetTotal]=useState(0);
    const [shipping,setShipping]=useState("")
    const [Total, subTotalvalue] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5173/products.json")
            .then((response) => response.json())
            .then((result) => setProducts(result.products))
            .catch((error) => {
                console.log('ERROR is occured at the', error)
            })
    }, [])
    function handleRemove(id) {
        const Removedata = products.filter((item) => item.id !== id)
        setProducts(Removedata)
    }
    function handlechange(value, itemPrice, id,shipping) {
        setSelectValue(value);
        console.log(value,itemPrice,id)
        const matchingProduct=products.find((item)=>item.id===id);
       // console.log(matchingProduct.itemPrice)
        if(matchingProduct){
            const subTotal=value * itemPrice;
            console.log(subTotal);
            subSetTotal(subTotal);
            
            if(shipping){
                setshipping(shipping)
            }else{
                const Total=shipping + subTotal;
                subsetTotal(Total)
            }
        }
        setSelectValue(value)
        setPrice(itemPrice)
        subsetTotal(value * itemPrice)
    }
    const value = {
        products,
        setProducts,
        handleRemove,
        handlechange
    }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}