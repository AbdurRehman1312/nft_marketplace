import React, { useState } from 'react';
import * as images from "../../assets";
import OrangeBtnText from '@/components/OrangeBtnText/OrangeBtnText';
import GreyButton from '@/components/GreyButton/GreyButton';
import {
    Table, TableBody, TableCell, TableRow, TableHeader, TableHead
} from "@/components/ui/table";
import { Link } from 'react-router-dom';
import BuyChart from '@/components/BuyChart/BuyChart';

const formatId = (id) => {
    if (id.length > 7) {
        return `${id.slice(0, 10)}...${id.slice(-2)}`;
    }
    return id;
};

const BuyNft = () => {
    const [isSell, setIsSell] = useState(false);  // State to toggle between Buy Now and Sell Now

    const data = {
        amount: '150 DOGE',
        price: '245,3 DOGE',
        status: 'At Floor',
        duration: 'In 5 Days',
        id: '1Lbcfr7sAHJASKnxnmj75571'
    };

    return (
        <div className='md:container md:mx-auto px-3 py-8'>
            <div className='bg-[#262626] rounded-[20px] md:px-10 md:py-16 p-5 flex justify-between gap-6 md:flex-row flex-col'>
                <div className='flex flex-col gap-4 lg:w-[25%] w-full'>
                    <div className='lg:h-[300px] md:h-[280px] h-[250px] border-4 border-secondary rounded-[35px]'>
                        <img src={images.nft5} alt="" className='w-full h-full object-cover rounded-[30px]' />
                    </div>
                    <h1 className="text-white font-semibold text-lg md:text-2xl">Animegirl#152</h1>
                    <div className='flex items-center gap-3'>
                        <img src={images.nft2} alt="" className='w-8' />
                        <span className='font-light'>Anime girls</span>
                    </div>
                    <div>
                        <p className='text-sm text-gray-200 limit_text'>Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. ire enim ipse compellebatur ad militem, quem exagitabat inopia...</p>
                    </div>
                </div>
                <div className='lg:w-[70%] md:w-[50%] w-full'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <p className='font-light text-gray-300'>Current price</p>
                            <p className='text-lg lg:text-2xl mt-2 font-semibold'>{data.price}</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            {/* Toggle button text based on state */}
                            <OrangeBtnText name={isSell ? "Sell Now" : "Buy Now"} style="py-3 px-5" />
                            <Link to={"/sell-nft"} onClick={() => setIsSell(!isSell)}>
                                <GreyButton name="Make an Offer" styles={"py-3"} />
                            </Link>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <BuyChart />
                    </div>
                    <div className='flex flex-col gap-3 mt-10'>
                        <h1 className='font-light'>Offers</h1>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-center">Price</TableHead>
                                    <TableHead className="text-center text-nowrap">USD Price</TableHead>
                                    <TableHead className="text-center text-nowrap">Floor Difference</TableHead>
                                    <TableHead className="text-center">Expiration</TableHead>
                                    <TableHead className="text-center">From</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="rounded-s-[20px] text-center bg-[#4a4a4a] px-0">
                                        {data.amount}
                                    </TableCell>
                                    <TableCell className="text-white text-center bg-[#4a4a4a] px-0">
                                        {data.price}
                                    </TableCell>
                                    <TableCell className="text-white text-center bg-[#4a4a4a] px-0">
                                        {data.status}
                                    </TableCell>
                                    <TableCell className="text-white text-center bg-[#4a4a4a] px-0">
                                        {data.duration}
                                    </TableCell>
                                    <TableCell className="rounded-e-[20px] px-2 text-white text-center bg-[#4a4a4a]">
                                        {formatId(data.id)}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyNft;
