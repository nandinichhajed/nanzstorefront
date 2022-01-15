import React, { useState, useEffect } from "react";
import axios from "axios"
import Base from "./Base";
import Card from "./Card";

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
        <Base title="Home Page" description="Welcome to Nanz-Store">
            <div className="row">
                {products.map((product, index) => {
                    return (
                        <div key={index} className="col-4 mb-4">
                            <Card product={product} />
                        </div>
                    );
                })}
            </div>
        </Base>
    );
}