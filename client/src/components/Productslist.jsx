import React, { useEffect } from "react";
import { updateProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../js/product";
import Productcard from "./Productcard";

function Productslist() {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.list);    
    const user     = useSelector((state) => state.auth.user);

    useEffect(() => {
        const fetch = async () => {
            const result = await fetchProducts(user.token);  
            if(result.status)
                dispatch(updateProducts(result.data));
        };

        fetch();
        //eslint-disable-next-line
    }, []); 

    return (
        <div className="px-4">
            <div className="flex justify-between items-center">
                <h1>Available Products</h1>
                <button className="btn">Add new Product</button>
            </div>
            
            <div>   
                {products.length > 0 && products.map((product, index) => (
                    <Productcard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Productslist;
