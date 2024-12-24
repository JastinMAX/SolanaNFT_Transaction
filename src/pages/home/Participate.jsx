import React, { useRef } from "react";
// import img from "../../assets/sample_img.png"
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import { useInView, motion } from "framer-motion";

const list_participations = [
  { text: "Users will access the Krypt Brand Website", img: img1 },
  { text: "They will connect their Solana Wallet", img: img2 },
  { text: "Users can mint one of the 100 collectilbles", img: img3 },
  {
    text: "Once minted, they will reveal contains a hidden treasure",
    img: img4,
  },
];

function Participate() {
  const staggeredVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 * index,
        duration: 0.3,
      },
    }),
  };
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <React.Fragment>
      <div className=" rounded-tr-2xl rounded-tl-2xl flex flex-col gap-8 py-8 px-4  bg-white">
        <header>
          <h1 className=" text-center font-black text-orange-600 text-xl uppercase font-[arial]">
            How to participate
          </h1>
        </header>
        <ul
          className=" flex flex-col md:grid md:grid-cols-2  gap-10 justify-center items-center"
          ref={ref}
        >
          {list_participations.map((each, index) => {
            return (
              <motion.div
                variants={staggeredVariant}
                initial="initial"
                animate={inView && "animate"}
                custom={index}
                key={index + "#**#"}
                className=" flex flex-col gap-3"
              >
                <p className=" sm:text-lg md:text-sm lg:text-lg  md:text-center text-medium font-semibold ">
                  {each.text}
                </p>
                <img
                  className=" sm:self-center sm:w-full md:w-[500px] w-[400px] rounded-md"
                  src={each.img}
                  alt="How To Participate"
                />
              </motion.div>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Participate;
