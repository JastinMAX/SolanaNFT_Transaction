import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import emptyCart from "../assets/emptyCart.png"


function Order() {
    const { order, setOrder } = useContext(Context);
    const [subTotal,setSubTotal] =useState(0);


    const handleDeleteItem = (id)=>{
      const testFilter = order.filter((eachOne)=>{
        return eachOne.unique_id != id;
      }) 
      setOrder(testFilter)
    }

    useEffect(()=>{
      // const addedDuplicates = [];
      const subTotalCalc = order.reduce((acc,eachProduct)=>{
        return acc + eachProduct.total;
      },0)
      setSubTotal(subTotalCalc)
      console.log(order)
    },[])

  return (
    <React.Fragment>
        <div>
            {
            order.length==0?
            <div className="flex py-5   flex-col items-center  justify-center">
                <img src={emptyCart} className=" size-56" alt="Cart Is Empty"/>
                <p className=" text-white font-semibold text-lg">You Have No Orders</p>
            </div>
            :<div className=" my-2 flex flex-col gap-2">
              <table className=" text-white max-md:hidden w-full bg-gray-600  rounded-md ">
                <thead className="">
                  <tr className=' '>
                    <th className=''>Product</th>
                    <th className=''>Name</th>
                    <th className=''>Size</th>
                    <th className=''>Price</th>
                    <th className=''>Quantity</th>
                    <th className=''>Total</th>
                    {/* <th className=''></th> */}
                  </tr>
                </thead>
                {
                  order.map((eachProduct)=>{
                    return(
                      <tbody key={eachProduct.unique_id} className=' space-x-7'>
                          <tr className=' text-white'>
                            <td className='flex flex-col items-center'><img src={eachProduct.img} className=' size-20 rounded-sm md:size-24 ' alt={eachProduct.name} /></td>
                            <td className='text-center font-semibold'>{eachProduct.name}</td>
                            <td className='text-center font-semibold'>{eachProduct.size}</td>
                            <td className='text-center font-semibold'>{eachProduct.price}</td>
                            <td className='text-center font-semibold'>{eachProduct.quantity}</td>
                            <td className='text-center font-semibold'>{eachProduct.total}</td>
                            <td className=' cursor-default text-center h-fit '>
                              <span onClick={()=>{
                                handleDeleteItem(eachProduct.unique_id)
                                }} className=' bg-red-600 px-2 py-1 rounded-md'>Delete</span>
                            </td>
                          </tr>
                        </tbody>
                    )
                  })
                }
              </table>
                <br />
              {
                order.map((eachProduct)=>{
                  return(
                    <div key={eachProduct.unique_id}>
                      <section  className='md:hidden rounded-md bg-gray-600 px-2 py-5 flex items-center justify-center gap-10 sm:gap-20'>
                        <img src={eachProduct.img} alt={eachProduct.name} className=' rounded-md size-56 sm:size-64' />
                        <section className=' flex flex-col text-white'>
                          <p className='sm:text-xl font-semibold text-lg uppercase'>{eachProduct.name}</p>
                          <p className=' flex items-center gap-3 font-semibold text-xl'><span className=' sm:text-base text-sm capitalize font-semibold'>size:</span>{eachProduct.size}</p>
                          <p className=' flex items-center gap-1 font-semibold text-xl'><span className=' sm:text-base text-sm capitalize font-semibold'>price:</span>${eachProduct.price}</p>
                          <p className=' flex items-center gap-1 font-semibold text-xl'><span className=' sm:text-base text-sm capitalize font-semibold'>Qty:</span>{eachProduct.quantity}</p>
                          <p>#{eachProduct.id}</p>
                          <p className=' flex items-center gap-1 font-semibold text-xl'><span className=' sm:text-base text-sm capitalize font-semibold'>total:</span>{eachProduct.price*eachProduct.quantity}</p>
                          <button onClick={()=>{
                            handleDeleteItem(eachProduct.unique_id)
                            }} className="bg-red-600 rounded-md w-fit px-2 ">Remove</button>
                        </section>
                      </section>
                      
                    </div>
                  )
                })
              }
            </div>
              }

              <div className={`${order.length==0 && "hidden"} md:w-1/2  md:px-5 bg-gray-200 mx-5 py-5 px-2 rounded-md mb-5`}>
                <p className=" underline text-center font-semibold text-lg ">Order Details</p>
                <section className=" flex flex-col gap-3">
                    <aside className=' flex justify-between font-medium '>
                      <p>Item(s)</p>
                      <span>{order.length}</span>
                    </aside>
                    <aside className=' flex justify-between font-medium '>
                      <p>Estimated Tax </p>
                      <span>${subTotal*0.02}</span>
                    </aside>
                    <aside className=' border-t-[1px] py-2 border-black flex justify-between font-medium '>
                      <p>Total </p>
                      <span>${subTotal}</span>
                    </aside>
                    <aside className=' border-t-[1px] py-2 border-black flex justify-between font-medium '>
                      <p>Sub-Total </p>
                      <span>${subTotal+subTotal*0.02}</span>
                    </aside>
                    <button className=" bg-black rounded-md text-white font-medium uppercase">Check Out</button>
                </section>
              </div>
        </div>
    </React.Fragment>
  )
}

export default Order