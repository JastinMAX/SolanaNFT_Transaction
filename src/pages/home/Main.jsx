import React from 'react'
import KryptBackground from '../../components/KryptBackground'
import TypingAnimation from "../../components/TypingAnimation"
import {motion} from "framer-motion"
import video from '../../assets/krypt_video.mp4'
// import gsap from 'gsap'
// import { TextPlugin } from 'gsap/all'

function Main() {
    // const ref = useRef()
    const variant_animation={
        initial:{
            y:1000
        },
        animate:{
            y:0,
            transition:{
                duration: 1.5,
                ease: 'easeInOut',
                },
        }
    }

  return (
    <React.Fragment>
       <div className=' w-full h-[700px] relative bg-red-500 '>
            <section className=' object-cover bg-red-300'>
                <video src={video} muted autoPlay loop type="video/mp4" className=' object-cover h-[700px] w-full'></video>
            </section>
            <div className=' h-full bg-black bg-opacity-85 absolute  top-0 flex flex-col gap-5 sm:gap-5 lg:flex-row lg:pb-16 lg:items-center'>
                <main className=' py-5 flex flex-col gap-14'>
                    <section>
                        <TypingAnimation/>
                        <article className=" text-sm px-5 text-white text-center sm:text-lg sm:font-semibold lg:text-left lg:pl-5 ">
                           BENNNNN Unlock the future of street-wear by introducing an innovative physical & digital experience through Luxury and Art .

                        </article>
                    </section>
                    <section  className=' overflow-hidden sm:font-semibold'>
                        <div>
                            <motion.h1 variants={variant_animation}
                            initial="initial" animate="animate" className=' sm:text-2xl text-xl font-semibold uppercase font-[Helvetica] lg:px-5 lg:pb-3  text-[#ffe600f5]  text-center lg:text-left'> Vision</motion.h1>
                        </div>
                        <motion.article variants={variant_animation}
                            initial="initial" animate="animate" className=" text-white text-center text-sm sm:text-lg px-5 lg:pl-5 lg:text-left">
                            Our campaign aims to blend the allure of digital collectibles with real-world treasures, offering exciting rewards, including cash prizes, gadgets, and an all-inclusive trip for the lucky few.
                        </motion.article>
                    </section>
                </main>
                <section className=''>
                    <KryptBackground/>
                </section>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Main