import React, { useRef } from 'react'
import {useInView, motion} from "framer-motion"
import solana from "../../assets/solana_img.png"
import point from "../../assets/bullet_point.png"

function HiddenTreasures() {
  // REFRENCES
  const first_ref = useRef(null);
  const second_ref = useRef(null);
  const first_view = useInView(first_ref, { once: true });
  const second_view = useInView(second_ref, { once: true });

  // VARIANTS
  const hidden_treasure_variant = {
    initial: {
      x: -1000,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const hidden_treasure_writeup = {
    initial: {
      x: 1000,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const solana_variant = {
    initial: {
      y: -1000,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeIn",
      },
    },
  };
  const solana_variant_writeup = {
    initial: {
      y: -1000,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeIn",
      },
    },
  };
  const solana_variant_img = {
    initial: {
      y: -1000,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.6,
        ease: "easeIn",
      },
    },
  };

  const list_hidden_treasures = [
    {
      id: "123456",
      header: "Merchandise (Merch):",
      text: "Every collectible is paired with exclusive merchandise for the treasure hunter. Details on how to claim your merch will be provided after the minting process.",
    },

    {
      id: "654321",
      header: "Additional Limited Perks:",
      text: "Some lucky treasure hunters will also unlock additional rewards along with their collectibles. These perks include",
    },

    {
      id: "543289",
      header: "Discount Rate for Krypt Products:",
      text: "Gain access to special discounts on all Krypt products, giving you a unique advantage on future purchases.",
    },

    {
      id: "985789",
      header: "Access to VIP Events: ",
      text: "Receive invitations to exclusive VIP events where you can meet fellow collectors, engage in unique experiences, and enjoy premium perks.",
    },

    {
      id: "739249",
      header: "Access to an Exclusive Community:",
      text: "Join a private, treasure hunters-only community where members can share insights, network, and enjoy exclusive content and updates.",
    },

    {
      id: "0w29jwd",
      header: "Gift Box Access:",
      text: "Some treasure hunters will receive access to a limited-edition Gift Box packed with special surprises and an Exclusive Weekend getaway experience..",
    },
  ];

  return (
    <React.Fragment>
      <div className=" py-8 flex flex-col gap-8 bg-[white]">
        <section
          ref={first_ref}
          className=" border-b-2 border-gray-300 pb-5 mb-5 space-y-5 sm:space-y-8 "
        >
          <div className="overflow-hidden  flex flex-col items-center justify-center">
            <motion.h1
              variants={hidden_treasure_variant}
              animate={first_view ? "animate" : "initial"}
              className=" text-xl  w-fit  uppercase font-black text-orange-600 text-center sm:text-2xl"
            >
              Hidden Treasures
            </motion.h1>
          </div>
          <div className=" overflow-hidden  flex flex-col items-center justify-center">
            <motion.p
              variants={hidden_treasure_writeup}
              animate={first_view ? "animate" : "initial"}
              className=" text-slate-900 text-center text-base sm:text-lg md:font-semibold px-5"
            >
              Exclusive Perks and Rewards Every treasure hunter who mints one of
              the 100 collectibles will unlock exclusive rewards. Here&apos;s
              what you can expect:{" "}
            </motion.p>
          </div>
          <ul className=" grid grid-cols-1 sm:grid-cols-2 sm:gap-10 md:gap-14 font-normal gap-6 px-7 md:text-base md:font-medium">
            {list_hidden_treasures.map(({ header, text, id }) => {
              return (
                <div className=" bg-gray-100 rounded-md px-3 py-2" key={id}>
                  <section className=" flex gap-2 items-center">
                    <img src={point} alt="bullet" className=" w-5" />
                    <h1 className=" font-semibold">{header}</h1>
                  </section>
                  <span className=" text-sm font-normal md:text-base ">
                    <li>{text}</li>
                  </span>
                </div>
              );
            })}
          </ul>
        </section>
        <section
          ref={second_ref}
          className=" relative py-5 px-3 flex flex-col items-center  gap-5 sm:gap-7 md:gap-10 bg-gradient-to-bl via-yellow-500 to-purple-500 from-yellow-400"
        >
          <section className=" overflow-hidden ">
            <motion.h1
              variants={solana_variant}
              animate={second_view ? "animate" : "initial"}
              className="  py-4 px-2  uppercase text-center font-black text-xl sm:text-2xl md:text-3xl text-orange-700"
            >
              Why Solana
            </motion.h1>
          </section>

          <section className="overflow-hidden pb-4">
            <motion.article
              variants={solana_variant_writeup}
              animate={second_view ? "animate" : "initial"}
              className="  text-center font-medium text-sm sm:text-lg md:text-xl text-white "
            >
              Solana is chosen for its high performance, low transaction costs,
              and fast processing speeds, making it ideal for a smooth and
              seamless user experience
            </motion.article>
          </section>
          <section className="overflow-hidden ">
            <motion.img
              variants={solana_variant_img}
              animate={second_view ? "animate" : "initial"}
              src={solana}
              alt="solana_img"
              className=" sm:w-60 md:w-72 w-56"
            />
          </section>
        </section>
      </div>
    </React.Fragment>
  );
}

export default HiddenTreasures;
