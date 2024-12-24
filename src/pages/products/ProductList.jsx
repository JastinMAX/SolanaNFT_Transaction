/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { remainNFTs } from '../../extras/fakeData'
import { walletAdapterIdentity } from "@metaplex-foundation/js";
import { Connection, PublicKey} from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";
import { useWallet } from "@solana/wallet-adapter-react";
import PreviewBtn from '../../components/PreviewBtn'

const QUICKNODE_RPC = "https://api.devnet.solana.com";
const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC, {
    commitment:'finalized',
});

function ProductList({listEnd=10,writeUp}) {
    const [data, setData] = useState([]);
    const wallet = useWallet();
    async function getRemainingNFTs() {
        const addressArray = [
            '3QJhWHHprHNke6RWDQJYMmKoin2EYW8J4vJoMNRwvdsM', // BLACK
            'FKyCmTiE6BnPrWUqWxZ2bHq4mZbGo7eMBXsxRTxWDHJ', // BLUE
            'DgNwtLF1HivLQ2ZukTbBRzdUbJm5YhC3XK8us6HhpbwC'// WHITE
        ]
        let remainArray = [];
        try {
            for (let index = 0; index < 3; index++) {
                const candyMachineAddress = addressArray[index];
                const METAPLEX = Metaplex.make(SOLANA_CONNECTION).use(
                    walletAdapterIdentity(wallet)
                );
                const candyMachine = await METAPLEX.candyMachines().findByAddress({
                    address: new PublicKey(candyMachineAddress),
                });    
                const totalItems = candyMachine.itemsAvailable.toNumber();
                const itemsMinted = candyMachine.itemsMinted.toNumber();
                const remainingItems = totalItems - itemsMinted;
                const items = candyMachine.items
                console.log('totalItems:',totalItems,"remainingItems:",remainingItems, "items:", items);
                remainArray[index] = remainingItems;
            }
            const Data = remainNFTs(remainArray);
            setData(Data);
        } catch (error) {
            console.error('Error fetching Candy Machine state:', error);
        }
    }

    useEffect(()=>{
        getRemainingNFTs();
    },[])

    return (
        <React.Fragment>
            <div className=' flex flex-col gap-10 py-5'>
                <header className=' flex flex-col items-center gap-3 px-2 text-white'>
                    <h1 className=" font-[helvetica] text-shadow uppercase text-2xl text-center font-black">products</h1>
                    {writeUp && <article className=' sm:text-base  text-center font-medium  text-sm'>
                        We have two colors for this collection. You either conquer the day with blue or classic with black. All items are carefully hand tailored by KRYPT. Each variation are uniquely tagged and identifyable by its number and address
                    </article>}
                </header>
                <main className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-x-8 px-3 gap-x-3 gap-y-5'>
                    {
                        data.map((eachImg,index)=>{
                            return(
                                <div key={eachImg.unique_id+index+"#"} className=' bg-gray-700 border-[1px] border-white rounded-md px-1 py-2 gap-3 flex flex-col '>
                                    <section className=" flex flx-col justify-center">
                                        <img src={eachImg.img} alt={eachImg.name} className=' size-32 rounded-md ' loading="lazy"/>
                                    </section>
                                    <section className=' grid grid-cols-2 items-center justify-center gap-2'>
                                        <span className=' px-3 font-semibold italic font-[monospace] text-xl'>{String(eachImg.id).length<3?'0'+eachImg.id:eachImg.id}</span>
                                        <span className=' px-3 font-semibold  text-right'>${eachImg.price}</span>
                                        <p className=' text-center  col-span-2 text-white font-medium text-lg'>{eachImg.name}</p>
                                    </section>
                                    <section className=' gap-2 flex flex-col'>
                                        <PreviewBtn id={eachImg.unique_id}/>
                                    </section>
                                </div>
                            )
                        })
                    }
                </main>
            </div>
        </React.Fragment>
    )
}

export default ProductList