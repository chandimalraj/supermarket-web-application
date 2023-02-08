import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import RegisterPopup from "../Register/RegisterPopup";
import Spinner from "../Register/Spinner";


export default function Login() {
  const navigate = useNavigate();
  

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  const [spinner, setSpinner] = useState(false);
  const [popup, setPopup] = useState(false);

  const [header, setHeader] = useState("");
  const [message, setMessage] = useState("");
  const [advice, setadvice] = useState("");

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phonePattern = /^\d{10}$/;

  const closePopup = () => {
    setPopup(false);
    navigate("/store?login=true");
  };

  const login = (e) => {
    e.preventDefault();
    const idAndPassword = { id: id, password: password };
    //id.length!=0 &&
    console.log("login");
    
    //create cookie
    //Cookies.set("my-cookie frontend","mage value eka")


    if (
      id.length != 0 &&
      !(RegExp(emailPattern).test(id) || RegExp(phonePattern).test(id))
    ) {
      setError1("Email or Phone is not valid! please check again");
    } else {
      setSpinner(true)
      
      axios
        .post("http://localhost:8050/api/v1/customer/login", idAndPassword, {
          "withCredentials" : true
          })
        .then((res) => {
          setTimeout(()=>{setSpinner(false)},4000)
          console.log(res.headers);
          
          if (res.data == "password incorrect") {
            setHeader("Oops!");
            setMessage("password is incorrect");
            setadvice("please check again");
          } else {
            
            setHeader("Done");
            setMessage("Successfully Login");
            setadvice("thank you");
          }
          setPopup(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="h-screen reg-bg bg-no-repeat bg-cover bg-center bg-fixed flex items-center">
      <div className="container mx-auto  flex flex-col justify-center items-center font-roboto">
        <div className="w-11/12 lg:w-4/5 lg:h-96 bg-slate-50 flex  reg-input ">
          <div className="hidden lg:block flex flex-col bg-neutral-800  text-white px-6">
            <div className="flex justify-center mb-2">
              <div className="font-semibold py-1.5 text-lg mb-2">
                StarX Shopping
              </div>
            </div>

            <div className="mb-10">Log In</div>

            <div className="py-1.5">
              Shopped with us before? Log in with your details
            </div>

            <div className="py-1">New Member?</div>

            <button
              className=" bg-green-500 py-1 reg-input text-teal-50 w-36 hover:bg-green-700 "
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </div>

          <div className="flex flex-col p-7 w-full">
            <div className="lg:hidden font-semibold py-1.5 text-lg mb-7">
              StarX Shopping
            </div>

            <form
              onSubmit={(e) => {
                login(e);
                console.log("submitted");
              }}
            >
              <div>Email Or Phone</div>

              <input
                autoFocus
                required
                className="mb-1 h-8 reg-input px-2 w-full"
                placeholder="sample@gmail.com | 07XXXXXXXX"
                onChange={(e) => {
                  setError1("");
                  setId(e.target.value);
                }}
              ></input>
              <div className="h-4 mb-1 text-orange-600  flex flex-col justify-center font-lora">
                {error1}
              </div>

              <div>Password</div>

              <input
                className="mb-1 h-8 reg-input px-2 w-full"
                placeholder="************"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <div className="h-4 mb-3 text-orange-600  flex flex-col justify-center font-lora">
                {error2}
              </div>

              {/* <div>Phone</div>
                
                <input className='mb-5 h-8 reg-input px-2'></input>   


                
                
                <input className='mb-5 h-8 reg-input px-2'></input>   


                <div>Confirm Password</div>
                
                <input className='mb-6 h-8 reg-input px-2'></input>    */}

              <div className="mb-4 text-green-500 underline">
                {" "}
                <span className="hover:cursor-pointer">Forgot Password</span>
              </div>

              <input
                className="self-center lg:self-auto px-2 bg-green-500 py-1 reg-input text-teal-50 w-36 hover:bg-green-700"
                // onClick={(e) => {
                //   login();
                // }}
                type="submit"
                value="Next"
              ></input>
            </form>
          </div>
        </div>
      </div>
      {spinner == true && <Spinner />}
      {popup == true && (
        <RegisterPopup
          close={closePopup}
          header={header}
          message={message}
          advice={advice}
        />
      )}
    </div>
  );
}
