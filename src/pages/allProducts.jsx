import { useEffect, useState } from "react";
import Card from "../components/card";
import CategoriesBox from "../components/categorychip";
import '../index.css'

function AllProducts() {
    const [products, setProducts] = useState([]);
    const [categories,setCategories] = useState([]);

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

useEffect(()=>{
    ProductCategories();
},[])
    const ProductCategories = async() => {
        try {
            const PRODUCT_CATEGORIES_API = await fetch('https://dummyjson.com/products/categories');
            const categories_res = await PRODUCT_CATEGORIES_API.json()
            setCategories([...categories_res])
            console.log('Categories Response', categories_res);
        } catch (error) {
            console.log('Error', error.message);
        }
    }
    // console.log("products", products);



    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {
                            categories.map((categories_data)=> {
                                return <CategoriesBox key={categories_data.id} children={categories_data} />
                            })
                        }

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