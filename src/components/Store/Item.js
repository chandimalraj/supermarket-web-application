import React, { useState } from "react";
import ItemPopup from "./ItemPopup";

export default function Item(props) {


  const {name , company , img , price , size , unit , setCart} = props
  const addcart = props.addCart;

  const itemId = props.id;
  const [details  , setDetails] = useState(
    {id:"${props.id}"}
  )
  const [open,setOpen] =useState(false)
  const c = props.c

  






  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mx-0 p-2">
    <div className="flex flex-col  bg-white align-items shadow-lg rounded-lg box hover:shadow-2xl ">
      <div className="text-orange-700  font-roboto font-medium pt-2 pl-2">
        10% Off
      </div>
      <img src={props.img} />
      <div className="flex justify-center mb-2 font-oxygen  text-xs sm:text-base md:font-medium">
      {name} / {size}{unit}
      </div>
      <div className="flex justify-between  bg-green-500 rounded-b-lg">
        <div className="pl-2 pt-2 pb-2 text-sm sm:text-base text-white font-semibold">Rs {price}/=</div>
        <div onClick={()=>{
          // props.setId(itemId)
          //props.open(true)
          //setCart(false)
          setOpen(true)
          //c(false)
          //addcart()
        }}className="  flex justify-center p-2 w-1/2    bg-stone-200 hover:bg-lime-400 hover:text-white rounded-br-lg hover:cursor-pointer md:font-semibold text-sm sm:text-base ">
          Buy
          
        </div>
      </div>

      {open==true && <ItemPopup id={itemId}  setOpen={setOpen} img={img} name={name} price={price} size={size} unit={unit} company={company} addCart={addcart}/>}


    </div>
    </div>
  );
}
