import React, { useEffect } from 'react'
import {  Outlet, useLocation, useNavigate } from 'react-router-dom'
import img from "../../assets/contact_img.jpg"


function Auth() {
    const location = useLocation();
    const pathArray = location.pathname.split("/")
    const navigate = useNavigate();

    useEffect(()=>{
        if(pathArray[pathArray.length-1]=="auth" || pathArray[pathArray.length-1]==""){
            navigate("/auth/login");
        }
    },[]);

  return (
    <React.Fragment>
        <div className='  rounded-md'>
            <div className=' md:grid md:grid-cols-2 '>
                <div className=' max-md:hidden relative'>
                    <img src={img} alt="Image" className=' h-full md:object-cover lg:object-center' />
                    <div className='top-0 w-full h-full bg-opacity-80 bg-black absolute text-transparent'>
                        .
                    </div>
                </div>
                <div className='  relative bg-no-repeat bg-cover  max-md:bg-[url(assets/contact_img.jpg)] '>
                    <div className=" py-10 px-10 text-white md:bg-gray-900 bg-black bg-opacity-85">
                        <Outlet/>
                    </div>
                </div>
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default Auth