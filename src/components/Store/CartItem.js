import React from 'react'
import close from '../../icons/redClose.png'

export default function CartItem() {
  return (
    <div className='bg-white w-90 h-10 flex items-center rounded'>

        <div className='w-3/6 pl-2  font-bold'>
           munchee snack
        </div>
        <div className='w-1/6 text-center text-green-400 font-bold'>
           120.00
        </div>
        <div className='w-2/6 pl-6 flex '>
           
           <input className='border w-10 bg-slate-100 ml-2'/>
           <img src={close} className="w-6 ml-3"

           />
           
        </div>


      </div>
  )
}
