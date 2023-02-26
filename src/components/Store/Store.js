import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import search from "../../images/Vector.png";
import login from "../../images/login.png";
import menu from "../../images/menu.svg";
import Banner from "./BannerCarousel";
import Item from "./Item";
import c1 from "../../images/ShopByCategory1.jpg";
import c2 from "../../images/ShopByCategory2.jpg";
import c3 from "../../images/ShopByCategory3.jpg";
import c4 from "../../images/ShopByCategory4.jpg";
import c5 from "../../images/ShopByCategory5.jpg";
import c6 from "../../images/ShopByCategory6.jpg";
import ItemPopup from "./ItemPopup";
import cart from "../../icons/Buy.png";
import CartDrop from "./CartDrop";
import CatogeryDrop from "./CatogeryDrop";
import axios from "axios";
import Spinner from "../Register/Spinner";
import { queryAllByAltText } from "@testing-library/react";

export default function () {
  const [render, setRender] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(false);
  const [itemId, setId] = useState(0);
  const [cartdrop, setCart] = useState(false);
  const [catdrop, setCat] = useState(false);

  const [cartList, setItemToCart] = useState([]);
  const [amount,setAmount] = useState(0)
  const [i, setI] = useState();

  //fetch data of items from database
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8050/api/v1/item/get-all");
      //const data =  await res.json()
      //console.log(res.data[0]);
      setData(res.data);
      setRender(true);
    } catch (error) {
      console.log(error);
    }
  };

  //when page first time rendered this callback function executes
  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data[0].item_id)


  const itemAddToCart = (obj) => {


    if (cartList.length < 1) {
      setItemToCart([...cartList, obj]);
      console.log("1");
    } else {
      console.log("2");
      const size = cartList.length;
      let x=0;
      for (let index = 0; index < size; index++) {
        const element = cartList[index];
        if (element.name == obj.name) {
          console.log("3");
          x=1;
          const upitems = cartList.map((item) => {
            if (item.name == obj.name) {
              return { ...item, quantity: item.quantity + obj.quantity };
            }
            return item;
          });

          setItemToCart(upitems);
        } 

      }
      if(x==0){
        setItemToCart([...cartList, obj])
      }
    }

    
  };


  const removeItemFromCart = (name) => {
   const updatedItems = cartList.filter(item=>item.name !== name)
   setItemToCart(updatedItems)
  };

  

  

 

  if (!render) {
    return <Spinner />;
  }

  return (
    <div className="">
      {/* {openItem == true && <ItemPopup id={item.id} />} */}

      <div className="bg-slate-800 sticky top-0 z">
        <div className="md:container mx-auto flex justify-between pt-4 sm:pb-8 p-2 relative ">
          {cartdrop == true && (
            <CartDrop cart={cartList} removeItemFromCart={removeItemFromCart} />
          )}

          <div className="font-display md:text-lg font-semibold text-slate-100 md:pr-10">
            StarX Shopping
          </div>

          <ul
            className={` text-white absolute sm:static bg-slate-800 sm:z-auto  z-[-1] left-0 w-full sm:w-auto transition-all-duration-2000 ease-in ${
              open ? "top-14" : "top-[-410px]"
            }`}
          >
            <li className="mx-5 sm:inline hover:cursor-pointer font-roboto text-sm  md:text-base font-medium hover:text-orange-100 md:my-0 my-1">
              Home
            </li>
            <li className="mx-5   sm:inline hover:cursor-pointer font-roboto text-sm  md:text-base font-medium hover:text-orange-100 md:my-0 my-1">
              Products
            </li>
            <li className="mx-5   sm:inline hover:cursor-pointer font-roboto text-sm  md:text-base font-medium hover:text-orange-100 md:my-0 my-1">
              Exclusives
            </li>
            <li className="mx-5   sm:inline hover:cursor-pointer font-roboto text-sm  md:text-base font-medium hover:text-orange-100 md:my-0 my-1">
              Promotions
            </li>
            <li className="mx-5   sm:hidden hover:cursor-pointer font-roboto text-base font-medium hover:text-orange-100 md:my-0 my-1">
              <button
                className=" md:flex mt-2 mb-3 px-4 p-1 bg-green-500 hover:bg-green-600 hover:cursor-pointer text-sm font-medium text-white  mr-3 flex items-center rounded-3xl "
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </li>
          </ul>

          <div className="flex space-x-3 md:items-center ">
            <img
              src={cart}
              className="w-6 h-7 md:w-6 md:h-6 lg:w-9 lg:h-9 md:h-auto pt-1 md:pt-0"
              onClick={() => setCart(!cartdrop)}
            />

            <div
              className=" text-3xl  sm:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span>
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
              </span>
            </div>

            <button
              className="hidden sm:flex   md:px-6 p-2 md:p-2 bg-green-500 hover:bg-green-600 hover:cursor-pointer md:text-base font-medium text-white   flex items-center rounded-xl md:rounded-3xl "
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>

          {/* <img src={menu} className="md:hidden w-8 hover:cursor-pointer" /> */}
        </div>
      </div>

      <div className="hidden md:flex container mx-auto flex justify-center -mt-4 h-12 -mb-8 sticky top-16 z">
        <button className=" bg-green-500 hidden md:block    text-base font-medium text-white md:rounded-l-3xl  hover:bg-green-600 flex  items-center shadow-lg relative ">
          <span
            onClick={() => {
              setCat(!catdrop);
            }}
            className="pr-6 pl-5 p-4"
          >
            Catogeries
          </span>
          {catdrop == true && <CatogeryDrop />}
        </button>
        <input className="w-2/5 bg-slate-200 outline-0 px-5 font-roboto  shadow-lg rounded-l-3xl md:rounded-none" />
        <button className=" bg-green-500 pl-4 pr-6  text-base font-medium text-white rounded-r-3xl hover:bg-green-600 flex  items-center shadow-lg">
          SEARCH <img src={search} className="pl-2 " />
        </button>
      </div>

      <div className="   ">
        <Banner />
      </div>

      <div className="">
        <div className="sm:container mx-auto md:pb-8 md:px-5">
          <div className="w-full flex justify-center pt-4 pb-2 md:pb-8 text-base font-medium ">
            New Deals
          </div>

          <div className="flex  flex-wrap ">
            {data.map((item) => (
              <Item
                name={item.item_name}
                img={item.item_image}
                price={item.selling_price}
                size={item.item_size}
                unit={item.measuring_unit}
                company={item.company}
                open={setOpenItem}
                id={1}
                setId={setId}
                c={setCart}
                addCart={itemAddToCart}
                setCart={setCart}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <div className="sm:container mx-auto flex flex-col md:pb-8 md:px-5 ">
          <div className="flex justify-center  align-items px-8 pb-8">
            <div className="w-1/2 pt-10">
              <hr className="h-1 bg-gray-500" />
            </div>
            <div className="w-28 text-center pt-7 font-roboto text-base font-medium">
              Best Deals
            </div>
            <div className="w-1/2 pt-10 ">
              <hr className="h-1 bg-gray-500"></hr>
            </div>
          </div>

          <div className="flex  flex-wrap ">
            {data.map((item) => (
              <Item
                name={item.item_name}
                img={item.item_image}
                price={item.selling_price}
                size={item.item_size}
                unit={item.measuring_unit}
                company={item.company}
                open={setOpenItem}
                id={1}
                setId={setId}
                c={setCart}
                addCart={itemAddToCart}
                setCart={setCart}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="sm:container mx-auto  pb-8 md:px-5">
          <div className="flex justify-center align-items px-8 ">
            <div className="w-1/2 pt-8 h-1">
              <hr className="h-1 bg-gray-500" />
            </div>

            <div className="flex p-2 pt-5 w-48  justify-center">
              <div className="font-roboto text-base font-medium leading-6">
                Shop By &nbsp;{" "}
              </div>
              <div className="font-robotoslab text-lg leading-6 font-semibold">
                Category
              </div>
            </div>

            <div className="w-1/2 pt-8">
              <hr className="h-1 bg-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="sm:container mx-auto  pb-8 ">
          <div className="flex px-8 space-x-2 ">
            <div className="hidden lg:block lg:w-1/3 bg-orange-100 ">
              <img src={c1} />
            </div>
            <div className="w-full lg:w-2/3 flex space-x-2">
              <div className="lg:w-1/3 ">
                <img src={c2} className=" " />
              </div>

              <div className="lg:w-2/3 flex flex-col  space-y-2">
                <div className="flex space-x-2">
                  <div className="w-1/2 bg-lime-400">
                    <img src={c3} />
                  </div>
                  <div className="w-1/2 bg-orange-300">
                    <img src={c4} />
                  </div>
                </div>

                <div className="flex space-x-2">
                  <div className="w-1/2 bg-green-500">
                    <img src={c5} />
                  </div>
                  <div className="w-1/2 bg-orange-200">
                    <img src={c6} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 pt-4 ">
        <div className="container mx-auto grid grid-cols-4 gap-4  pb-8 ">
          <div className="flex flex-col   lg:pl-12">
            <div className=" pb-4 text-teal-300 ">Quick Links</div>

            <div className="py-2 text-white">Home</div>
            <div className="py-2 text-white">Catalogue & Deals</div>
            <div className="py-2 text-white">Utility bill payments</div>
            <div className="py-2 text-white">Track My Order</div>
          </div>

          <div className="flex flex-col  ">
            <div className=" pb-4 text-teal-300">Quick Links</div>

            <div className="py-2 text-white">Home</div>
            <div className="py-2 text-white">Catalogue & Deals</div>
            <div className="py-2 text-white">Utility bill payments</div>
            <div className="py-2 text-white">Track My Order</div>
          </div>

          <div className="col-span-2 lg:pr-10">
            <div className=" pb-2 text-teal-300">
              Enter Your Email To Subscribe
            </div>
            <div className="w-full flex pb-3">
              <input className="w-full outline-0 pl-2 " />
              <button className="bg-green-400 p-1.5 text-white font-roboto hover:bg-green-600 ">
                Subscribe
              </button>
            </div>
            <div className="text-white pb-3 ">Contact-Us</div>
            <div className="text-white pb-3">About-Us</div>
            <div className="text-white pb-3">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
