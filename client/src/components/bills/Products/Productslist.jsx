import React, { useEffect, useState } from "react";
import { updateProducts } from "@store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchProducts, updateStatus, updateProduct } from "@billsjs/product";
import Productcard from "./Productcard";
import Addproduct from "./Addproduct";
import Editproduct from "./EditProduct";

function Productslist() {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.list);
    const [productsData, setProductsData] = useState([...products]);
    const {user}     = useSelector((state) => state.bills);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editData, setEditData] = useState({});
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetch = async () => {
            const result = await fetchProducts(user.token);  
            if(result.status){
                dispatch(updateProducts(result.data));
                setProductsData(result.data);
            }
        };

        fetch();
        //eslint-disable-next-line
    }, []); 

    const handleAddProduct = async (productData) => { 
        const result = await addProduct(productData, user.token);
        if(result.status){
            dispatch(updateProducts([...products, result.data])); 
            setProductsData([...products, result.data]);
        }
    };
    const handleEditProduct = async (productId, data) => {
        const result = await updateProduct(productId, data, user.token);
        if(result.status){
            const updatedProducts = products.map((product)=> {
                return (product._id === productId)?data:{data, ...product};
            });
            dispatch(updateProducts(updatedProducts)); 
            setProductsData(updatedProducts);
        }
    };

    useEffect(() => {
        if(search.length > 0) {
            const searchString = search.toLowerCase();
            const filter = products.filter(product=>product.name.toLowerCase().includes(searchString));
            setProductsData(filter);
        }else{
            setProductsData(products);
        }
       //eslint-disable-next-line
    }, [search])
    
    const handleUpdateStatus =  async (productId, status) => {
        const result = await updateStatus(productId, status, user.token);
        if(result.status) {
            const productUpdate = products.map((product)=> (product._id===productId) ?{ ...product, status } : product );
            dispatch(updateProducts(productUpdate)); 
            setProductsData(productUpdate);
        }
    }

    return (
        <div className="px-4">
            <div className="flex justify-between items-center py-4">
                <h1>Available Products</h1>
                <div className="">
                    <input type="text" id="search" onChange={(e)=>setSearch(e.target.value)} value={search} className="input" placeholder="Search..."/>
                </div>
                <button className="btn" onClick={() => setShowAddModal(true)}>Add new Product</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 px-4">
                {productsData.length > 0 &&
                productsData.map((product, index) => (
                    <Productcard key={index} 
                        product={product} 
                        handleUpdateStatus={handleUpdateStatus}
                        setEditData={setEditData}
                        showEditModal={setShowEditModal}
                    />
                ))}
            </div>
            <Addproduct
                isOpen={showAddModal}
                onRequestClose={() => setShowAddModal(false)}
                onSubmit={handleAddProduct}
            />
            <Editproduct
                isOpen={showEditModal}
                onRequestClose={() => setShowEditModal(false)}
                onSubmit={handleEditProduct}
                editData={editData}
            />
        </div>
    );
}

export default Productslist;
