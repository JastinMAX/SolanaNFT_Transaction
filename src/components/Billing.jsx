import React from 'react'
import banner from "../assets/contact_img.jpg";

function Billing() {
  return (
    <React.Fragment>
        <div className=' md:grid md:grid-cols-2 '>
            <div className=' max-md:hidden relative'>
                <img src={banner} alt="" className=' h-full md:object-cover' />
                <div className='top-0 w-full h-full bg-opacity-80 bg-black absolute text-transparent'>
                        .
                    </div>
            </div>
            <div className=' flex flex-col gap-5 bg-gray-200 px-4 rounded-md py-8 mx-5 my-4'>
            <header className=' text-center font-semibold text-xl'>
                <h1>Billing Information</h1>
                <span className=' font-normal text-xs'>Please fill in your details to complete your order </span>
            </header>
            <form action="" className=' flex flex-col gap-3'>
                <label htmlFor="" className=' flex flex-col gap-1'>
                    <span className=' font-semibold uppercase'>Full Name</span>
                    <input type="text" className=' border-[1px] border-gray-500 outline-none px-2 py-1'/>
                </label>
                <label htmlFor="" className=' flex flex-col gap-1'>
                    <span className=' font-semibold uppercase'>email</span>
                    <input type="text" className=' border-[1px] border-gray-500 outline-none px-2 py-1'/>
                </label>
                <label htmlFor="" className=' flex flex-col gap-1'>
                    <span className=' font-semibold uppercase'>Phone Number</span>
                    <input type="text" className=' border-[1px] border-gray-500 outline-none px-2 py-1'/>
                </label>
                <label htmlFor="" className=' flex flex-col gap-1'>
                    <span className=' font-semibold uppercase'>address</span>
                    <input type="text" className=' border-[1px] border-gray-500 outline-none px-2 py-1'/>
                </label>
                <label htmlFor="" className=' flex flex-col gap-1'>
                    <span className=' font-semibold uppercase'>State</span>
                    <input type="text" className=' border-[1px] border-gray-500 outline-none px-2 py-1'/>
                </label>
                <label htmlFor="" className=' flex flex-col gap-1'>
                    <span className=' font-semibold uppercase'>Town</span>
                    <input type="text" className=' border-[1px] border-gray-500 outline-none px-2 py-1'/>
                </label>
                <button className=' bg-black mt-6 text-white py-1 font-semibold uppercase rounded-md'>Continue</button>
            </form>
        </div>
        </div>
    </React.Fragment>
  )
}

export default Billing