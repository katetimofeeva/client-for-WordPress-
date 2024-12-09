"use client";
import { useEffect, useState } from "react";
import useGetData from "@/hooks/useGetData";
import { IProduct } from "../../../type";
import ProductCart from "@/components/ProductCart";
import { FilterType } from "../../../type";

const filter: FilterType[] = [
  "All",
  "Development",
  "Security",
  "Support",
  "Analytics",
  "Infrastructure",
];

const Product = () => {
  const [products, isLoading] = useGetData<IProduct[]>(
    `https://dev-cs-test-50-13.pantheonsite.io/wp-json/twentytwentyone-child/v1/products`
  );

  // const savedFilterName = localStorage.getItem("filterName") || "All";
  const [filterName, setFilterName] = useState("All");

  useEffect(() => {
    const savedFilterName = localStorage.getItem("filterName") || "All";
    setFilterName(savedFilterName);
  }, []);

  const renamedProducts = products.map(product => ({
    id: product.ID,
    productName: product.product_name,
    price: product.price_value,
    description: product.description_value,
    category: product.category_value,
    projectId: product.project_id_value,
  }));

  if (isLoading) return <p>...Loading</p>;

  const handleButtonClick = (btn: FilterType) => {
    setFilterName(btn);
    localStorage.setItem("filterName", btn);
  };

  const filteredProduct = renamedProducts.filter(item => {
    switch (filterName) {
      case "Development":
        return item.category === "Development";
      case "Security":
        return item.category === "Security";
      case "Support":
        return item.category === "Support";
      case "Analytics":
        return item.category === "Analytics";
      case "Infrastructure":
        return item.category === "Infrastructure";
      default:
        return item;
    }
  });

  return (
    <>
      <div className="space-x-4 flex justify-center ">
        {filter.map((btn, i) => (
          <button
            className={`px-4 py-2 ${
              filterName === btn ? "bg-green-600" : "bg-lime-600"
            } text-white font-semibold rounded my-4`}
            key={i}
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center  mt-6 gap-4">
        {filteredProduct.map(product => {
          return (
            <ProductCart
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    </>
  );
};

export default Product;
