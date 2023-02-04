import axios from "axios";
import React, { useRef, useState } from "react";
import RegisterPopup from "./RegisterPopup";
import Spinner from "./Spinner";

export default function Register() {
  const [uname, setUname] = useState("");
  const [error1, setError1] = useState("");

  const [email, setEmail] = useState("");
  const [error2, setError2] = useState("");

  const [phone, setPhone] = useState("");
  const [error3, setError3] = useState("");

  const [password, setPassword] = useState("");
  const [error4, setError4] = useState("");

  const [confpassword, setconfPassword] = useState("");
  const [error5, setError5] = useState("");

  const [popup, setPopup] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const [header, setHeader] = useState("");
  const [message, setMessage] = useState("");
  const [advice, setadvice] = useState("");

  const usernamePattern = "^[A-Za-z0-9]{3,20}$";
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phonePattern = /^\d{10}$/;
  const passwordPattern = /^.{5,15}$/;

  const closePopup = () => {
    setPopup(false);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setSpinner(true);

    const customer = {
      username: uname,
      email: email,
      phone: phone,
      password: password,
    };
    //console.log(customer)
    axios
      .post("http://localhost:8050/api/v1/customer/register", customer)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          setSpinner(false);
        }, 3000);

        if (
          (res.data ==
            "Email and phone already registered" ||
            res.data == "Email is already registered" ||
            res.data == "phone is already registered")
        ) {
          setHeader("Oops!");
          setMessage(res.data);
          setadvice("Please Check Again");
        } else {
          setHeader("Done");
          setMessage(res.data);
          setadvice("Thank you!");
        }
        setTimeout(() => {
          setPopup(true);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen reg-bg bg-no-repeat bg-cover bg-center bg-fixed flex items-center">
      <div className="container mx-auto    h-screen reg-bg bg-no-repeat bg-cover bg-center bg-fixed flex flex-col justify-center items-center font-roboto  ">
        <div className=" w-full sm:w-11/12 lg:w-4/5 bg-slate-50 flex  reg-input">
          <div className="hidden lg:block flex flex-col bg-neutral-800  text-white px-6">
            <div className="flex justify-center mb-2">
              <div className="font-semibold py-1.5 text-lg mb-2">
                StarX Shopping
              </div>
            </div>

            <div className="mb-10">Create Account</div>

            <div className="py-1.5">
              Enter the details to create an account to shop online
            </div>

            <div className="py-1">
              If you wish to create your account without verifying
            </div>

            <div className="py-1.5">
              the Mobile number, please click "Next" after you enter the Mobile
              number
            </div>

            <div className="py-1.5">
              Have trouble logging in? Call us on 0112303500
            </div>

            <div className="py-1.5">
              (Daily operating hours 8.00a.m to 8.00p.m)
            </div>
          </div>

          <div className="flex flex-col   w-full ">
            <div className="pd lg:hidden font-semibold pb-4 py-1.5 p-7 text-lg  text-white bg-neutral-800 flex justify-center ">
              StarX Shopping
            </div>

            <div className="pd lg:hidden mb-0 pb-4 pl-7 text-white bg-neutral-800 ">
              Create Account
            </div>

            <form
              className="p-7 pd"
              method="post"
              onSubmit={(e) => {
                submit(e);
              }}
            >
              <div>Enter your user name</div>

              <input
                id="uname"
                pattern="^[A-Za-z0-9]{3,20}$"
                className="mb-1 h-8 reg-input px-2 w-full"
                name="user_name"
                type="text"
                autoFocus
                maxLength="20"
                minLength="5"
                placeholder="username"
                required
                onChange={(e) => {
                  setUname(e.target.value);
                  if (!RegExp(usernamePattern).test(e.target.value))
                    setError1(
                      "3-16 characters ,shouldn't include any special character!"
                    );
                  else {
                    setError1("");
                  }
                }}
              ></input>
              <div className="h-4 text-orange-600 flex flex-col justify-center font-lora text-sm">
                {error1}
              </div>

              <div>Email</div>

              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (!RegExp(emailPattern).test(e.target.value))
                    setError2("Email is not valid");
                  else {
                    setError2("");
                  }
                }}
                className="mb-1 h-8 reg-input px-2 w-full"
                name="email"
                type="email"
                placeholder="sample@gmail.com"
                required
              ></input>
              <div className="h-4 text-orange-600  flex flex-col justify-center font-lora ">
                {error2}
              </div>

              <div>Phone</div>

              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (!RegExp(phonePattern).test(e.target.value))
                    setError3("Phone number is not valid");
                  else {
                    setError3("");
                  }
                }}
                className="mb-1 h-8 reg-input px-2 w-full"
                name="phone"
                type="text"
                placeholder="07XXXXXXXX"
                required
              ></input>
              <div className="h-4 text-orange-600  flex flex-col justify-center font-lora">
                {error3}
              </div>

              <div>Password</div>

              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (!RegExp(passwordPattern).test(e.target.value))
                    setError4(
                      "Password should contain between 5 and 15 characters:"
                    );
                  else {
                    setError4("");
                  }
                }}
                className="mb-1 h-8 reg-input px-2 w-full"
                name="password"
                type="password"
                required
                placeholder="**********"
              ></input>
              <div className="h-4 text-orange-600  flex flex-col justify-center font-lora">
                {error4}
              </div>

              <div>Confirm Password</div>

              <input
                onBlur={() => {
                  if (password.length == 0) {
                    setError5("");
                  }
                }}
                onChange={(e) => {
                  setconfPassword(e.target.value);
                  if (password.length == 0) {
                    setError5("Password field is empty");
                  } else {
                    if (password !== e.target.value)
                      setError5("Passwords don't match");
                    else {
                      setError5("");
                    }
                  }
                }}
                className="mb-1 h-8 reg-input px-2 w-full"
                name="confirm_password"
                type="password"
                required
                placeholder="**********"
              ></input>
              <div className="h-4 text-orange-600  flex flex-col justify-center font-lora mb-2">
                {error5}
              </div>

              <input
                className=" self-center lg:self-auto px-2 bg-green-500 py-1 reg-input text-teal-50 w-36 hover:cursor-pointer hover:bg-green-700"
                name="confirm_password"
                type="submit"
                required
                placeholder="**********"
                value="Next"
              ></input>
            </form>
          </div>
        </div>
      </div>
      {popup == true && (
        <RegisterPopup
          close={closePopup}
          header={header}
          message={message}
          advice={advice}
        />
      )}
      {spinner == true && <Spinner />}
    </div>
  );
}
