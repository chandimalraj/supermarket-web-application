import React from "react";
import close from "../../icons/redClose.png";

export default function CartItem(props) {
  const { name, price, quantity, removeItemFromCart } = props;

  return (
    <div className="bg-white w-90 h-10 flex items-center rounded">
      <div className="w-3/6 pl-2  font-bold">{name}</div>
      <div className="w-1/6 text-center text-green-400 font-bold">{price}</div>
      <div className="w-2/6 pl-6 flex ">
        <input
          className="border w-10 bg-slate-100 ml-2 px-2"
          value={quantity}
        />
        <img
          src={close}
          className="w-6 ml-3"
          onClick={() => removeItemFromCart(name)}
        />
      </div>
    </div>
  );
}
