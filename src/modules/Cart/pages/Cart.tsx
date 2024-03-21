import React from "react";
import DetailProducts from "../components/DetalProducts/DetailProducts";

const Cart = () => {
  return (
    <div className="text-white flex h-screen justify-center items-center">
      <div className="border-2 border-gray-500 py-5 px-5">
        <DetailProducts />
      </div>
    </div>
  );
};

export default Cart;
