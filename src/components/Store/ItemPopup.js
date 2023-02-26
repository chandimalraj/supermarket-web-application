import React, { useState } from "react";
import close from "../../icons/Cancel.png";

export default function ItemPopup(props) {

  const {name ,company,  img , price , size , unit ,addCart} = props

  const setOpen = props.setOpen;
  const [quantity,setQuantity] = useState(1);

  const regex = /^(?:[1-9]|[1-9][0-9]|[1-4][0-9]{2}|500)$/;
  
  const validate = (num)=>{
    if(regex.test(num)){
      setQuantity(num)
    }
    else{
      
    }
  }

  

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center">
      <div
        className="bg-slate-100  flex flex-col rounded-lg popup"
        
      >
        {/* Item popup {props.id}
          <button onClick={()=>{
            props.y(false)
          }}>close</button> */}

        <div className="flex">
          <div className="w-11/12  flex justify-center items-center font-roboto text-base font-medium">
            Item Details
          </div>
          <div className="flex justify-end p-1 ">
            {" "}
            <img
              src={close}
              className="h-10 hover:border hover:border-transparent"
              onClick={
                ()=>{
                  setOpen(false)
                }
              }
            />
          </div>
        </div>

        <div className="flex">
          <div className="p-4 ">
            <img src={img} className=" w-56 rounded-lg" />
          </div>

          <div className="flex flex-col p-4 pr-0  space-y-2  w-72 font-roboto font-base ">
            <div>{name}</div>
            <div className="text-green-800">{price}/=</div>
            <div>{company}</div>
            <p>Description</p>

            <div className=" flex pt-8">
              <div>Quantity </div>
              <input className="w-10 ml-4 px-2 outline-0 focus:outline-1 focus:outline-green-300 focus:placeholder:hidden"  onChange={(e)=>{
                const value = e.target.value
                validate(parseInt(value))
                // console.log()

              }}
              placeholder="1"
   />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-2">
          <button className="p-2 bg-green-500 px-4 rounded-lg  text-base font-medium text-white hover:bg-green-600" onClick={()=>{
            const obj = {name:name , company:company, price:price , quantity:quantity}
            addCart(obj)
            //console.log(quantity)
          }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
