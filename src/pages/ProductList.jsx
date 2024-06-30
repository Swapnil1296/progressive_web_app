import React, { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Instance/axios";
import Loader from "../utils/Loader";
const ProductList = () => {
  const [product, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/products`);
        //setting product to local state
        setProducts(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);
  if (loading) {
    return <Loader />;
  }
  const handleItemClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div>
      <div className="font-[sans-serif] bg-gray-100">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Premium Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
            {product &&
              product.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative"
                    onClick={() => handleItemClick(item.id)}
                  >
                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                      <IoIosHeartEmpty />
                    </div>

                    <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {item.description}
                      </p>
                      <h4 className="text-lg text-gray-800 font-bold mt-4">
                        ₹{item.price}
                      </h4>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
