import React, { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import logo from "../../assets/logo.svg";
import NavMobile from "./naviagtions/NavMobile";
import NavDesktop from "./naviagtions/NavDesktop";
import { Context } from "../../context/Context";
import { NavLink, Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
//import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { toast } from "react-toastify";

function Header() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect();
        const address = response.publicKey.toString();
        setWalletAddress(address);
        console.log("Connected to wallet:", address);
      } catch (err) {
        console.error("Failed to connect to wallet:", err);
      }
    } else {
      toast.warn(
        "Solana wallet not found. Please install a wallet extension like Phantom."
      );
    }
  };

  const { navigation, setNavigation, cart } = useContext(Context);

  const handleCloseNavigation = () => {
    setNavigation(!navigation);
  };

  return (
    <React.Fragment>
      <section className=" lg:hidden">
        <NavMobile />
      </section>
      <main className=" bg-primary flex items-center justify-between px-5">
        <div className="">
          <Link to={"/"}>
            <img
              src={logo}
              className=" sm:w-20 md:w-28  w-14"
              alt="Logo"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="max-lg:hidden">
          <NavDesktop />
        </div>
        <section className="lg:block hidden">
          <WalletMultiButton />
        </section>
        <div className="lg:hidden flex items-center">
          <WalletMultiButton />

          <section className="pl-5" onClick={handleCloseNavigation}>
            <IoMenu />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Header;
