import React from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import person from "../../images/person.png";
import plus from '../../images/pluscircle.png';
import radio from "../../images/radio.png";
import shoppingcart from "../../images/shoppingcart.png";
import newShopping  from  "../../images/new.jpeg";

export default function Home() {

  // const regNavigate = useNavigation('/register');
  // const navigate = useNavigation();
  const navigate = useNavigate();



  return (
    <div className="container mx-auto h-screen flex ">
      {/*Image container  */} 
      <div className="hidden home-bg sm:flex h-screen w-1/2 bg-lime-300  bg-no-repeat bg-cover bg-center bg-fixed px-10  text-white sm:text-3xl md:text-4xl lg:text-5xl 2xl:px-48 font-semibold space-y-3  flex flex-col justify-center">
        {/* <img src={img} className='h-screen'/> */}
        
        
        <div> Hello, </div>
        <div> Log into your</div>
        <div> account for a</div>
        <div> quick and easy </div>
        <div> shopping</div>
        <div>  experience</div>
        <div>  Happy shopping!</div>
       
        

      
 
      </div>

      {/*  */}
      <div className="h-screen w-full sm:w-1/2 flex flex-col justify-center p-8">

        <div className="lg:h-40 xl:h-48 xxl:h-60 w-full flex lg:flex-row flex-col">
          
          <a className="mb-4 lg:mb-0 h-36 lg:h-auto lg:w-1/2  card-bg  flex flex-col text-white items-center lg:pt-8 lg:mr-8 bg-lime-500 hover:text-orange-100 " href='/login'>
            <img src={person} className="mt-4 lg:mt-0 w-8 mb-4" />

            <div className="text-lg font-semibold mb-2 ">
              Already Registered?
            </div>

            <div className="text-sm">Login</div>

          </a>
          
          
          <a className="mb-4 lg:mb-0 h-36 lg:h-auto lg:w-1/2 card-bg bg-cyan-400 flex flex-col text-white items-center lg:pt-8 hover:text-orange-100" href="/register">
            <img src={plus} className="mt-4 lg:mt-0 w-8 mb-4" />
            <div className="text-lg font-semibold mb-2 ">New To Shopping?</div>

            <div className="text-sm" >
             
              Register
              
              </div>
          </a>
          
         
          
         

        </div>

        <div className=" lg:h-40 xl:h-48 xxl:h-60 w-full flex lg:mt-8 lg:flex-row flex-col">
          
          <a className="mb-4 lg:mb-0 h-36 lg:h-auto lg:w-1/2  card-bg bg-amber-400 lg:mr-8 flex flex-col text-white items-center lg:pt-8 hover:text-orange-100" href="/store">
            
          <img src={shoppingcart} className="mt-4 lg:mt-0 w-8 mb-4" />
            <div className="text-lg font-semibold mb-2 ">Browse The Store</div>

            <div className="text-sm">Store</div>

          </a>

          <a className="mb-4 lg:mb-0 h-36 lg:h-auto lg:w-1/2  card-bg flex flex-col text-white items-center lg:pt-8 bg-pink-400 hover:text-orange-100" href="/testing">

          <img src={radio} className="mt-4 lg:mt-0 w-8  mb-4" />
            <div className="text-lg font-semibold mb-2 ">Track your Order</div>

            <div className="text-sm">Tracking</div>
          </a>

        </div>

      </div>

    </div>
  );
}
