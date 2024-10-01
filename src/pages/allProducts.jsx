import { useEffect, useState } from "react";
import Card from "../components/card";

function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
      productsListening();
    },[])

    const productsListening = async() => {
        try {
            const PRODUCT_API = await fetch('https://dummyjson.com/products');
            const res = await PRODUCT_API.json()
            setProducts([...res.products])
            console.log('Response', res);
            
        } catch (error) {
            console.log("error", error);
        }
    }

    console.log("products", products);



    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {
                            products.map((data) => {
                                return <Card key={data.id} item={data} />
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default AllProducts;