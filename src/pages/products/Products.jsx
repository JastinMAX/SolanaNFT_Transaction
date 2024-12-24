import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import {useNavigate} from "react-router-dom"
import { bannerNFT } from '../../extras/fakeData'

function Products() {
    const navigate = useNavigate()
    const [bannerProduct, setBannerProduct] = useState([])

    useEffect(()=>{
        const banner = bannerNFT();
        setBannerProduct(()=>{
            return [banner]
        })
    },[])


  return (
    <React.Fragment>
        <div>
            <section className=' m-1 rounded-md bg-white px-5 py-5'>
                <p className=' text-center font-semibold uppercase text-2xl md:text-3xl font-serif pb-5 sm:pb-10'>KRYPT MERCH </p>
                {
                    bannerProduct.map((obj)=>{
                        return(
                            <div key={obj.unique_id} className='  lg:px-40 grid grid-cols-2 lg:justify-center'>
                                <section>
                                    <img src={obj.img} className=' md:size-72 size-48' alt="Product" />
                                </section>
                                <section className=' flex flex-col gap-2 lg:gap-4 justify-center px-5 '>
                                    <p className=' font-semibold text-2xl lg:text-3xl'>{obj.name}</p>
                                    <p className=' font-semibold text-2xl md:text-3xl'>${obj.price}</p>
                                    <p className=' font-semibold text-base md:text-lg lg:text-xl'>#{obj.id}</p>
                                    <button className=' bg-black text-white rounded-full px-2 font-semibold py-1' onClick={()=>{
                                        navigate(`/${obj.unique_id}`)
                                    }}>Preview</button>
                                </section>
                            </div>
                        )
                    })
                }
            </section>
            <section>
                <ProductList listEnd={100}/>
            </section>
        </div>
    </React.Fragment>
  )
}

export default Products