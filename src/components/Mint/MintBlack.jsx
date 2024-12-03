window.global ||= window;

import React, { useState, useEffect } from "react";
import { publicKey } from "@metaplex-foundation/umi";
import { useWallet } from "@solana/wallet-adapter-react";
import { walletAdapterIdentity } from "@metaplex-foundation/js";
import { fetchorderById, saveOrderInfo } from "../../firebase/query";
import CheckoutForm from "../CheckoutForm";
import { toast } from "react-toastify";
import { Connection, PublicKey} from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";
import { useNavigate } from "react-router-dom";

const QUICKNODE_RPC = "https://api.devnet.solana.com"; // 👈 Replace with your QuickNode Solana Devnet HTTP Endpoint
const mainnetEndpoint = import.meta.env.VITE_NEXT_PUBLIC_RPC || "https://api.mainnet-beta.solana.com";
const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC, {
  commitment:'finalized',
});

function MintBlack({ color }) {
  const [loading, setLoading] = useState(false);
  const [candyMachineAddress, setCandyMachineAddress] = useState(null);
  const wallet = useWallet();
  const navigate = useNavigate();

  const METAPLEX = Metaplex.make(SOLANA_CONNECTION).use(
    walletAdapterIdentity(wallet)
  );
  
  async function mintEachNFT() {
    try {
      console.log("Minting each NFT...");
      const candyMachine = await METAPLEX.candyMachines().findByAddress({
        address: new PublicKey(candyMachineAddress),
      });
      console.log('candymacine:',candyMachine);
      let { nft, response } = await METAPLEX.candyMachines().mint(
        {
          candyMachine,
          collectionUpdateAuthority: candyMachine.authorityAddress,
        },
        { commitment: "finalized" }
      );
      const result = {
        nftAddress: nft.address.toString(),
        signatureID: response.signature.toString()
      }
      return result;
    } catch (error) {
      console.log("mintError",err)    
    }
  }

  useEffect(() => {
    let address;
    if (color === "black") {
      address = publicKey(import.meta.env.VITE_BLACK_CANDY_MACHINE_ID);
    } else if (color === "white") {
      address = publicKey(import.meta.env.VITE_WHITE_CANDY_MACHINE_ID);
    } else {
      address = publicKey(import.meta.env.VITE_BLUE_CANDY_MACHINE_ID); 
    }
    setCandyMachineAddress(address);
  }, [color]);

  const set_loading = (val = false) => {
    setLoading((priv) => val);
  };

  const handleOrderSubmission = async (orderData, size) => {
    set_loading(true);

    const results = await mintNFT(orderData, size);
    if (results.status === true)
      setTimeout(() => {
        navigate("/order-successful", {
          state: { 
            id: orderData?.fullName,
            nftAddress: results.nftAddress,   
            signatureId: results.signatureId
          }
        });
      }, 3000);
    set_loading();
  };

  const mintNFT = async (orderData, size) => {
    try {
      console.log("Minting NFT...");

      const results = await mintEachNFT();

      const billingInfo = {
        name: orderData.fullName,
        email: orderData.email,
        address: orderData.addressLine1,
        city: orderData.city,
        state: orderData.state,
        zip: orderData.postalCode,
      };

      const nftMetadata = {
        nftAddress: results.nftAddress,
        trait: generateRandomTrait(),
        size,
      };

      await saveOrderInfo(
        wallet.publicKey.toString(),
        nftMetadata,
        billingInfo
      );

      return { status: true, nftAddress: results.nftAddress, signatureId: results.signatureID };
    } catch (error) {
      console.error("Mint failed:", error);
      toast.warn("Mint failed! Please try again.");
      return { status: false };
    }
  };

  function generateRandomTrait() {
    const traits = [
      "Discount Rate for Krypt Products",
      "Access to VIP Events",
      "Exclusive Community Access",
      "Gift Box Access",
    ];
    const randomIndex = Math.floor(Math.random() * traits.length);
    return traits[randomIndex];
  }

  return (
    <div>
      <CheckoutForm submitOrder={handleOrderSubmission} loading={loading} />
    </div>
  );
}

export default MintBlack;
