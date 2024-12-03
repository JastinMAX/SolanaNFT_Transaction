import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NFTData } from "../../extras/fakeData";
import limited_img from "../../assets/limited.png";
import { ClipLoader } from "react-spinners";
import { Context } from "../../context/Context";
import MintBlack from "../../components/Mint/MintBlack";
import { toast } from "react-toastify";

function Product() {
  const { id } = useParams();
  const { setCart } = useContext(Context);
  const { order, setOrder } = useContext(Context);
  const [product, setProduct] = useState([]);
  const [option, setOption] = useState({ size: "SM", quantity: "1" });
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();
  const date = new Date();

  useEffect(() => {
    const filterId = NFTData.filter((eachData) => {
      return eachData.unique_id === id;
    });
    setProduct(filterId);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAddedToCart(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [addedToCart]);

  const handleBack = () => {
    navigate("/products");
  };

  const handleOptions = (e) => {
    e.preventDefault();
    setOption((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // const addToCart = ()=>{
  //     // const addToCartObject = {...product[0],...option,quantity:Number(option.quantity),total:Number(option.quantity)*product[0].price}
  //     // console.log(addToCartObject);
  //     // setCart((prev)=>{
  //     //     return [...prev,addToCartObject]
  //     // })
  //     // setAddedToCart(true)
  //     alert("Okay")
  // }
  const mint = () => {
    if (true) {
      toast.success("NFT successfully Minted!");
    } else {
      toast.error("Something went wrong, try again later!");
    }
  };

  return (
    <React.Fragment>
      <div>
        <button
          onClick={handleBack}
          className=" font-black text-3xl px-5 text-white cursor-pointer"
        >
          ←
        </button>
        {product.length === 0 ? (
          <ClipLoader />
        ) : (
          product.map((product, index) => {
            return (
              <div className="bg-white py-10 px-2 md:px-8" key={index}>
                <div
                  key={product.unique_id}
                  className=" lg:grid md:grid-cols-2 relative gap-10 m-1 rounded-md "
                >
                  <section className="flex flex-col">
                    <div className="sm:flex justify-between  px-2 py-2 mt-5">
                      <h2 className=" font-semibold text-3xl text-left sm:mb-0 mb-3">
                        {product.name}
                      </h2>
                      <p className=" text-gray-900 font-light text-lg uppercase">
                        Published:{" "}
                        <span className=" font-semibold text-base">{`${date.toLocaleDateString()}`}</span>
                      </p>
                    </div>
                    <div className="mb-10 border-b-[1px] border-gray-600 text-gray-800 sm:flex items-center justify-between  px-2 py-2">
                      <p className=" text-gray-900 font-semibold text-xl">
                        ${product.price}
                      </p>
                      <div className=" flex gap-4 items-center  font-semibold text-[16px] ">
                        Limited Edition{" "}
                        <img
                          src={limited_img}
                          className=" size-8"
                          alt="Limited"
                        />
                      </div>
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                    <img
                      src={product.img}
                      alt="NFT"
                      className={` size-72 md:size-[23rem] lg:size-[30rem] rounded-md`}
                    />
                    </div>
                  </section>
                  <section className=" w-full lg:mt-0 mt-10 flex flex-col gap-5">
                    <MintBlack color={product.color} id={id}/>
                  </section>

                  <div>
                    <h1 className="lg:my-0 my-10 text-lg uppercase font-semibold ">
                      Krypt Collection
                    </h1>
                    <article className=" lg:mt-3 mb-7 bg-gray-100 px-3 py-3 rounded font-medium text-lg">
                      {product.description}
                    </article>

                    <article className=" md:col-span-2">
                      The wait is over! You can now mint your limited edition
                      KRYPT NFT shirt collection on the Solana blockchain. With
                      only 100 unique pieces available, don&apos;t miss your
                      chance to own a piece of digital fashion history. Once you
                      select your NFT shirt, press the Mint button to receive a
                      unique digital asset with: - Exclusive digital fashion
                      Art. Randomized Gifts and amazing Treasures will be
                      assigned to your Token&apos;s Address. Our lucky winners
                      will be Notified immediately after Minting an item in our
                      collection. This is our way of saying our customers are
                      priority at the KRYPT brand. Join the KRYPT community and
                      be part of an ever-expanding universe of fashion and art.
                      Mint your NFT shirt now and unlock exclusive experiences,
                      prizes, and more
                    </article>
                  </div>
                </div>
              </div>
            );
          })
        )}
        <br />
      </div>
    </React.Fragment>
  );
}

export default Product;
