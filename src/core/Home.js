import React, { useState, useEffect } from "react";
import axios from "axios"

export default function Home() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = async() => {

        try {
          const { data } = await axios.get("/api/product")

      
          setProducts(data);

        } 
        catch (e) {
          setError(e);
          console.log(e);
        }
      };
    
    useEffect(() => {
        loadAllProducts();
    }, []);
    
    return(
        <div>
            <h1>
                Home Component
            </h1>
            <div className="row">
                {products.map( (product, index) => {
                    return (
                        <div key={index}>
                            <h2>{product.name}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}