import React, { createContext, useState, useEffect } from 'react';
export const ProductContext = createContext({
    products: [], //initial state
    setProducts: () => { },
    selectValue: 1,
    setSelectValue: () => { },
    subTotal: 0,
    subSetTotal: () => { },
    Total: 0,
    subTotalvalue: () => { },
    individualTotals:{},
    setIndividualTotals:()=>{},
    handleRemove: () => { },
    handlechange: () => { }
})
export default function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [selectValue, setSelectValue] = useState(1);
    const[subTotal,subSetTotal]=useState(0);
    const[ Total,subTotalvalue]=useState(0);
    const [individualTotals, setIndividualTotals] = useState({});

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
    function handlechange(value, id) {
        setSelectValue(value);
        const matchingProduct = products.find((item) => item.id === id);
        if(!matchingProduct){
            console.log("Product Not Found");
            return;
        }
        //calculate subtotal
        const subTotal = value * matchingProduct.price;
        subSetTotal(subTotal)
        //calculate the shipping cost
        const shippingCost = typeof matchingProduct.shipping === "number" && Number.isFinite(matchingProduct.shipping)
            ? matchingProduct.shipping : 0;

            //calculate total
        const Total = shippingCost + subTotal;
        subTotalvalue(Total);

        //update result individual id product
        setIndividualTotals((Prevalue)=>({
            ...Prevalue,
            [id]:{subTotal,Total}
        }))


    }
    const value = {
        products,
        selectValue,
        subTotal,
        Total,
        individualTotals,
        setIndividualTotals,
        handleRemove,
        handlechange
    }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}