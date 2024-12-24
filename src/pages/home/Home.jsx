import React, { useContext, useEffect } from 'react'
import Main from "./Main"
import Participate from './Participate'
import HiddenTreasures from './HiddenTreasures'
import ProductList from '../products/ProductList'
import {useRef} from "react"
import { Context } from '../../context/Context'
import {handleScroll} from "../../extras/scrollFunc"

function Home() {
  const scrollRef = useRef(null);
  const { scrollTo} = useContext(Context);


  useEffect(()=>{
    handleScroll(scrollRef)
  },[scrollTo])

  return (
    <React.Fragment>
      <Main/>
      <Participate/>
      <div ref={scrollRef}>
        <HiddenTreasures/>
      </div>
      <ProductList writeUp={true}/>
    </React.Fragment>
  )
}

export default Home