import React from 'react'
import CartItem from './CartItem'

export default function CartDrop(props) {
   
   const cart = props.cart
   //const items = props.items
   const items = [
      {
        id: 1,
        name: "munchee",
        price: "120",
      },
      {
        id: 2,
        name: "munchee",
        price: "120",
      },
    ];
  
   console.log(items)

   const data = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Victor Wayne" },
      { id: 3, name: "Jane Doe" },
    ];
  

  return (
    <div className='w-96  bg-slate-100 bg-right-top absolute top-20 right-0  pt-10 flex flex-col p-4 space-y-2 rounded-bl-xl'
    >

     {

      // items.map((i)=>{
      //    <CartItem/>
      // })

      // items.map(element => {
        
      //   <CartItem/>
      // })

     }

           {cart.map((item) => (
        <CartItem name={item.name} price ={item.price} quantity={item.quantity}/>
      ))}
      
      
     

      
      
      <div className='flex justify-center'>
        <button className='px-4 bg-green-500 p-2 rounded-lg text-white hover:bg-green-600'>save cart</button>
      </div>
      
    </div>
  )
}
