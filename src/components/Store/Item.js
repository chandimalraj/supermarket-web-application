import React, { useState } from "react";
import ItemPopup from "./ItemPopup";

export default function Item(props) {

  const itemId = props.id;
  const [details  , setDetails] = useState(
    {id:"${props.id}"}
  )
  const [x,y] =useState(false)
 const c = props.c

  return (
    <div className="flex flex-col  bg-white align-items shadow-lg rounded-lg box hover:shadow-2xl">
      <div className="text-orange-700  font-roboto font-medium pt-2 pl-2">
        10% Off
      </div>
      <img src={props.img} />
      <div className="flex justify-center mb-2 font-oxygen font-medium">
        Munchee Snack / 200g
      </div>
      <div className="flex justify-between  bg-green-500 rounded-b-lg">
        <div className="pl-2 pt-2 pb-2 text-white font-semibold">Rs 120/=</div>
        <div onClick={()=>{
          // props.setId(itemId)
          // props.open(true)
          y(true)
          c(false)
        }}className="  flex justify-center p-2 w-1/2    bg-stone-200 hover:bg-lime-400 hover:text-white rounded-br-lg hover:cursor-pointer font-semibold">
          Buy
          {/* Add to &nbsp;
          <button className="flex   ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button> */}

        </div>
      </div>

      {x==true && <ItemPopup id={itemId}  y={y} img={props.img} />}
    </div>
  );
}
