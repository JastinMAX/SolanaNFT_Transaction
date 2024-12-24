import img from "../assets/nft_product.jpg" //black
import img2 from "../assets/nft_product2.jpg" //white
import img3 from "../assets/nft_product3.jpg" //blue

// Include both image and its color
const imageList = [
  { img: img, color: "blue" },
  { img: img2, color: "white" },
  { img: img3, color: "black" },
];
export let NFTData = [];
export const bannerNFT = () => {
  const random = Math.floor(Math.random()*3);
  const banner = {
    id: 1,
    img: imageList[random].img,
    color: imageList[random].color,
    price: 100,
    name: "NFT Product",
    description: "This is a description of the NFT product",
    category: "NFT pieces", 
    owner: "John Doe",
    unique_id: "0x1234567890" + 1 ,
  };
  return banner;
} 

export const remainNFTs = (array) => {
  let remainNFTs = [];
  let id = 0;
  for (let i = 0; i < 3; i++) {
    const element = array[i];
    const selectedImage = imageList[i];
    const partArray = Array(element).fill(0).map((_, index) => {
      return {
        id: index + id + 1,
        img: selectedImage.img,
        color: selectedImage.color,
        price: 100,
        name: "NFT Product",
        description: "This is a description of the NFT product",
        category: "NFT pieces", 
        owner: "John Doe",
        unique_id: "0x1234567890" + i + (index + 1) ,
      };
    })
    id += element;
    remainNFTs = [...remainNFTs, ...partArray];
  }
  NFTData = remainNFTs;
  return remainNFTs;
}
