import { useEffect, useState } from "react";
import Card from "../components/card";
import CategoriesBox from "../components/categorychip";
import "../index.css";
import axios from "axios";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All");

  useEffect(() => {
    console.log("useffect run");
    productsListening();
  }, [chosenCategory]);

  useEffect(() => {
    ProductCategories();
  }, []);

  const productsListening = async () => {
    const url =
      chosenCategory === "All"
        ? `https://dummyjson.com/products`
        : `https://dummyjson.com/products/category/${chosenCategory}`;
    // console.log("url", url);

    try {
      let res = await axios.get(url);
      setProducts([...res.data.products]);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const ProductCategories = async () => {
    try {
      const categories_res = await axios.get(
        `https://dummyjson.com/products/categories/`
      );
      setCategories([...categories_res.data]);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <>
      {loading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <CategoriesBox
                onClick={() => setChosenCategory("All")}
                isChosen={chosenCategory === "All"}
                children={{
                  name: "All",
                  slug: "All",
                }}
              />

              {categories.map((categories_data) => {
                return (
                  <CategoriesBox
                    onClick={() => setChosenCategory(categories_data.slug)}
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
      )}
    </>
  );
}

export default AllProducts;
