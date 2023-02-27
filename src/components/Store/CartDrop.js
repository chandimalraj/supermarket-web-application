import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";


export default function CartDrop(props) {
  const cart = props.cart;
  const removeItemFromCart = props.removeItemFromCart;
  const editQuantity = props.editQuantity
  
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let y = 0;
    for (let index = 0; index < cart.length; index++) {
      console.log(cart[index]);
      y = y + cart[index].price * cart[index].quantity;
    }
    console.log(y);
    setAmount(y);
  }, [cart]);

 

  return (
    <div className="w-96   bg-slate-100 bg-right-top absolute top-14 sm:top-20 right-0  sm:pt-10 flex flex-col p-4 space-y-2 rounded-bl-xl">
      {cart.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          removeItemFromCart={removeItemFromCart}
          editQuantity = {editQuantity}
        />
      ))}

      <div className="flex pl-2 justify-between pr-3">
        <div className="text-lime-600">total amount</div>
        <div>Rs {amount}.00</div>
      </div>

      <div className="flex justify-center">
        <button className="px-4 bg-green-500 p-2 rounded-lg text-white hover:bg-green-600">
          save cart
        </button>
      </div>
    </div>
  );
}
