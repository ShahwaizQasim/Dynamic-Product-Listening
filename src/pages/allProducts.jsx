import { useEffect, useState } from "react";
import Card from "../components/card";
import CategoriesBox from "../components/categorychip";
import "../index.css";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading,setLoading] = useState(true)
  const [chosenCategory, setChosenCategory] = useState("All");

  useEffect(() => {
    productsListening();
  }, []);

  const productsListening = async () => {
    try {
      const PRODUCT_API = await fetch("https://dummyjson.com/products");
      const res = await PRODUCT_API.json();
      setLoading(false);
      setProducts([...res.products]);
      console.log("Response", res);
    } catch (error) {
      console.log("error", error);
      setLoading(false)
    }
  };

  useEffect(() => {
    ProductCategories();
  }, []);
  const ProductCategories = async () => {
    try {
      const PRODUCT_CATEGORIES_API = await fetch(
        "https://dummyjson.com/products/categories"
      );
      const categories_res = await PRODUCT_CATEGORIES_API.json();
      setCategories([...categories_res]);
      console.log("Categories Response", categories_res);
    } catch (error) {
      console.log("Error", error.message);
    }
  };
  // console.log("products", products);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">


            <CategoriesBox
                isChosen = {chosenCategory === "All"}
              children={{
                name: "All",
                slug: "All",
              }}
            />

            {categories.map((categories_data) => {
              return (
                <CategoriesBox
                  key={categories_data.slug}
                  children={categories_data}
                  isChosen={categories_data.slug === chosenCategory}
                />
              );
            })}

            {products.map((data) => {
              return <Card key={data.id} item={data} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllProducts;
