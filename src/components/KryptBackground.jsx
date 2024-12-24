import React from 'react'
import {motion} from "framer-motion"
function KryptBackground() {

    const variant_animation_reveal ={
        initial:{
            width:1,
            height:1,
            skew:0
        },
        animate:{
            width:"95%",
            height:"100%",
            transition:{
                duration:0.5,
                delay:0.2,

            }
        }
    }

    const article_variant = {
        initial:{
            opacity:0,
        },
        animate:{
            opacity:1,
            transition:{
                duration:1.5,
                delay:0.5,
            }
        },

    }

  return (
    <React.Fragment>
        <div className=' flex flex-col items-center justify-center overflow-hidden my-4 '>
            <motion.section
                variants={variant_animation_reveal}
                initial="initial" animate="animate"
            className=' sm:py-16 rounded-md px-3 clip-path mx-5 my-8 py-9 lg:py-32 lg:space-y-6 bg-gradient-to-br from-[#f6efef] to-[#daba7e] '>
                <h1 className=' uppercase text-xl lg:text-2xl  font-black font-[helvetica] text-center text-orange-600'>Background</h1>
                <motion.article
                    variants={article_variant}
                    initial="initial" animate="animate"
                className=' text-center lg:text-base xl:text-lg font-medium text-sm space-y-3'>
                    Krypt Brand has always been at the forefront of streetwear fashion known for its <span className=' uppercase text-base italic'>alte</span>, <span className=' uppercase font-black text-base'>bold</span> designs and <span className=' font-[monospace] text-base uppercase'>innovative</span> approaches. With the rising popularity of NFTs and blockchain technology, we are taking a bold step forward by integrating these technologies into our brand, creating a unique and engagng customer experience
                </motion.article>
            </motion.section>
        </div>
    </React.Fragment>
  )
}

export default KryptBackground