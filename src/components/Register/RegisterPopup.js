import React from "react";

export default function RegisterPopup(props) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center">
      <div className="flex flex-col  z-112 bg-green-200 rounded-lg ">
        <div className="bg-green-700 rounded-t-lg  flex ">
          <div className="w-80 flex justify-center p-2">
            <div className="semi-bold text-xl  font-roboto text-white">{props.header} </div>
          </div>
          <div
            className="bg-rose-600 font-black font-roboto text-xl p-2 text-center px-4 rounded-tr-lg hover:bg-rose-500 hover:cursor-pointer"
            onClick={() => {
              props.close()
            }}
          >
            X{" "}
          </div>
        </div>
        <div className="bg-green-300 text-center black text-sm  font-oxygen pt-4 p-3 rounded-b-lg">
          {props.message}
        </div>
        <div className="bg-green-300 text-center semi-bold text-sm  font-roboto pt-0 p-3 rounded-b-lg">
          {props.advice}
        </div>
        <div className="bg-green-300 text-center  pt-0 p-3 rounded-b-lg">
          <button
            className="bg-yellow-300 p-1 px-5 bold text-sm  font-roboto hover:shadow-2xl hover:bg-yellow-300"
            onClick={() => {
              props.close()
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
