import React, { useEffect } from 'react'
import {motion, useMotionValue, useTransform, animate} from "framer-motion"

const cursorVariants = {    
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }
    }
  };


function TypingAnimation() {
    const baseText= "Welcome"
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
      baseText.slice(0, latest)
    );
    // const newValue = useTransform(count, [0, 1], [0, 100])
    // When `count` goes from `0` to `1`, I want `newValue` to go from `0` to `100`.
    // const newValue = useTransform(count, (latest) => {latest * 100})
    // When `count` changes, I want `newValue` to be 100 times that of `count`.
  


    useEffect(()=>{
        const controls = animate(count, baseText.length, {
            type: "tween", // Not really needed because adding a duration will force "tween"
            duration: 1,
            ease: "easeInOut",
          });
          return controls.stop;
    },[])

  return (
    <React.Fragment>
        <div className=" pt-8  flex items-center lg:pb-5 lg:pl-5 lg:justify-start justify-center">
            <span className="">
                <motion.span className='  text-2xl font-semibold uppercase font-[Helvetica] text-[#ffe600f5]  text-center'>
                    {displayText}
                </motion.span>
                <motion.div variants={cursorVariants} animate="blinking" className="inline-block text-white  h-6 w-[0.5px]  text-center bg-slate-100">
                    .
                </motion.div>
            </span>
        </div>
    </React.Fragment>
  )
}

export default TypingAnimation