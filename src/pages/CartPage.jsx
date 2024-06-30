import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuMinusCircle } from "react-icons/lu";
import { LuPlusCircle } from "react-icons/lu";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import NotFound from "../utils/NotFound";
import {
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "../Store/slices/cartSlice";
import getTotalPrice from "../utils/TotoPrice";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!cart || cart.length === 0) {
    return <NotFound />;
  }

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const handleDeleteFromCart = (id) => {
    dispatch(deleteFromCart({ id }));
  };
  return (
    <div>
      <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-extrabold text-gray-800">Your Cart</h1>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="md:col-span-2 space-y-4">
            {cart
              ? cart.map((item) => (
                  <div
                    className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]"
                    key={item.id}
                  >
                    <div className="flex gap-4">
                      <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex  items-start flex-col gap-4">
                        <div>
                          <h3 className="  text-base text-wrap font-bold text-gray-800 ">
                            {item.title}
                          </h3>
                          <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">
                            Color:{" "}
                            <span className="inline-block w-5 h-5 rounded-md bg-[#ac7f48]"></span>
                          </p>
                        </div>

                        <div className="flex justify-center items-center gap-3">
                          <button
                            onClick={() => handleDecreaseQuantity(item.id)}
                            type="button"
                            disabled={item.quantity === 1}
                            className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full hover:cursor-pointer"
                          >
                            <LuMinusCircle />
                          </button>
                          <span className="font-bold text-sm leading-[18px]">
                            {item.quantity === null ? 1 : item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleIncreaseQuantity(item.id)}
                            className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full hover:cursor-pointer"
                          >
                            <LuPlusCircle />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="ml-auto flex flex-col">
                      <div
                        role="button"
                        onClick={() => handleDeleteFromCart(item.id)}
                        className="flex items-start gap-4 justify-end hover:cursor-pointer"
                      >
                        <MdOutlineDelete />
                      </div>
                      <h3 className="text-base font-bold text-gray-800 mt-auto">
                        ₹ {item.totalPrice.toFixed(2)}
                      </h3>
                    </div>
                  </div>
                ))
              : null}
          </div>

          <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
            <ul className="text-gray-800 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">
                Subtotal{" "}
                <span className="ml-auto font-bold">
                  ₹{getTotalPrice(cart).toFixed(2)}
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Shipping <span className="ml-auto font-bold">₹2.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Tax <span className="ml-auto font-bold">₹4.00</span>
              </li>
              <hr className="border-gray-300" />
              <li className="flex flex-wrap gap-4 text-sm font-bold">
                Total{" "}
                <span className="ml-auto">
                  ₹{(getTotalPrice(cart) + 6).toFixed(2)}
                </span>
              </li>
            </ul>

            <div className="mt-8 space-y-2">
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
              >
                <Link to="/payment">Buy Now</Link>
              </button>
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
              >
                <Link to="/product-list">Continue Shopping</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
