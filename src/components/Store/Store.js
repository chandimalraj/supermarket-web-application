import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import buscuit from "../../images/buscuit.png";
import b2 from "../../images/b2.jpeg";
import b3 from "../../images/b3.jpeg";
import b4 from "../../images/b4.jpeg";
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

export default function () {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(false);
  const [itemId, setId] = useState(0);
  const [cartdrop, setCart] = useState(false);
  const [catdrop, setCat] = useState(false);
  const [cartList, setItemToCart] = useState([]);

  //fetch data of items from database
  const fetchData = async ()=>{

    try {
      const res = await axios.get('http://localhost:8050/api/v1/item/get-all')
      //const data =  await res.json()
      console.log(res.data[0])                
      
    } catch (error) {
      console.log(error)
    }

  }

  //when page first time rendered this call back function executes
  useEffect(()=>{

    fetchData()

  },[])


  
  const itemAddFunction = () => {
    setItemToCart([...cartList, { id: "1", name: "munchee", price: "120" }]);
  };

  //console.log(cartList);

  const [item, setItem] = useState({
    id: "",
    name: "",
    price: "",
  });

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

  const itemFind = () => {
    setItem({
      id: itemId,
      name: "ona maggulak",
    });
  };

  const { id } = useParams();
  //console.log(id);

  return (
    <div className="">
      {openItem == true && <ItemPopup id={item.id} />}

      <div className="bg-slate-800 sticky top-0 z ">
        <div className="container mx-auto flex justify-between pt-4 pb-8 p-2 relative">
          {cartdrop == true && <CartDrop cart={cartList} items={items} />}
          <div className="font-display text-lg font-semibold text-slate-100 pr-10">
            StarX Shopping
          </div>

          <ul
            className={`text-white absolute sm:static bg-slate-800 sm:z-auto z-[-1] left-0 w-full md:w-auto transition-all-duration-2000 ease-in ${
              open ? "top-16" : "top-[-400px]"
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
              className=" md:flex  px-6 p-1 bg-green-500 hover:bg-green-600 hover:cursor-pointer text-base font-medium text-white  mr-3 flex items-center rounded-3xl "
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
            </li>


          </ul>

          <div className="flex space-x-6">

            <img
              src={cart}
              className="w-7 h-7 md:w-9 md:h-auto pt-1 md:pt-0"
              onClick={() => setCart(!cartdrop)}
            />

            <div
              className=" text-3xl  sm:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span>
                <ion-icon name={open ? "close" : "menu"} ></ion-icon>
              </span>
            </div>

            <button
              className="hidden sm:flex   md:px-6 p-2 md:p-2 bg-green-500 hover:bg-green-600 hover:cursor-pointer text-base font-medium text-white  mr-3 flex items-center rounded-xl md:rounded-3xl "
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
        <div className="container mx-auto md:pb-8 px-5">
          <div className="w-full flex justify-center pt-4 pb-2 md:pb-8 text-base font-medium ">
            New Deals
          </div>

          <div className="flex justify-center space-x-3">
            <div className="w-1/2 sm:w-fit md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Item
                img={'https://i.ibb.co/Xp5PLgz/b4.jpg'}
                open={setOpenItem}
                id={1}
                setId={setId}
                c={setCart}
                addCart={itemAddFunction}
              />
            </div>

            <div className="w-1/2 sm:w-fit md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Item img={b3} />
            </div>

            <div className="hidden sm:block md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Item img={b2} />
            </div>

            <div className="hidden lg:block  lg:w-1/4 xl:w-1/5">
              <Item img={b3} />
            </div>

            <div className="hidden xl:block  xl:w-1/5">
              <Item img={b4} />
            </div>
          </div>

          <div className="flex justify-center space-x-3 pt-3">
            <div className="w-1/2 sm:w-fit md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Item
                img={b4}
                open={setOpenItem}
                id={1}
                setId={setId}
                c={setCart}
                addCart={itemAddFunction}
              />
            </div>

            <div className="w-1/2 sm:w-fit md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Item img={b3} />
            </div>

            <div className="hidden sm:block md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Item img={b2} />
            </div>

            <div className="hidden lg:block  lg:w-1/4 xl:w-1/5">
              <Item img={b3} />
            </div>

            <div className="hidden xl:block  xl:w-1/5">
              <Item img={b4} />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto flex flex-col md:pb-8 px-5 ">
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

          <div className="flex justify-center space-x-3 ">
            <div className="w-1/2 sm:w-fit md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Item img={b4} c={setCart} />
            </div>

            <div className="w-1/2 sm:w-fit md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Item img={b3} />
            </div>

            <div className="hidden sm:block md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Item img={b2} />
            </div>

            <div className="hidden lg:block  lg:w-1/4 xl:w-1/5">
              <Item img={b3} />
            </div>

            <div className="hidden xl:block  xl:w-1/5">
              <Item img={b4} />
            </div>
          </div>

          <div className="flex justify-center space-x-3 pt-3">
            <div className="w-1/2 sm:w-fit md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Item
                img={b4}
                open={setOpenItem}
                id={1}
                setId={setId}
                c={setCart}
                addCart={itemAddFunction}
              />
            </div>

            <div className="w-1/2 sm:w-fit md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Item img={b3} />
            </div>

            <div className="hidden sm:block md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Item img={b2} />
            </div>

            <div className="hidden lg:block  lg:w-1/4 xl:w-1/5">
              <Item img={b3} />
            </div>

            <div className="hidden xl:block  xl:w-1/5">
              <Item img={b4} />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="container mx-auto  pb-8 px-5">
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
        <div className="container mx-auto  pb-8 ">
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
            <div className=" pb-2 text-teal-300">Enter Your Email To Subscribe</div>
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
