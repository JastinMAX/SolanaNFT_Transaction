import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Successful = () => {
  const location = useLocation();
  const { id, nftAddress, signatureId } = location.state || {};
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    <div className="bg-white py-10 px-5">
      <h1 className="mb-7 text-3xl font-bold">Congratulations🎉🎉🎉</h1>
      <p className="text-center lg:w-[90%] m-auto">
        Thank you for your recent purchase! We're excited to confirm that your
        transaction has been successfully processed {id}, and you are now the
        proud owner of a KRYPT NFT. We truly appreciate your support and are
        thrilled to have you as part of our community. If you have any questions
        or need assistance with anything, feel free to reach out — we’re here to
        help! you can view the links bellow for more information!
      </p>

      <div className="mt-20">
        <h1 className="mb-10 font-medium text-lg">Quick Links</h1>
        <div className="sm:flex gap-5 justify-center items-center">
          <p>You can check your minted NFT here</p>
          <div className="sm:mt-0 mt-5">
            <a
              href={`https://explorer.solana.com/address/${nftAddress}?cluster=devnet`}
              target="_blank"
              className="px-5 py-3 submit-button"
            >
              NFT Information
            </a>
          </div>
        </div>
        <div className="sm:flex gap-5 justify-center items-center mt-10">
          <p>you can confirm the transaction here</p>
          <div className="sm:mt-0 mt-5">
            <a
              href={`https://explorer.solana.com/tx/${signatureId}?cluster=devnet`}
              target="_blank"
              className="px-5 py-3 submit-button"
            >
              Confirm Transaction
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Successful;
