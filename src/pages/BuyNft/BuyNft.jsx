import React, { useState} from 'react';
import * as images from "../../assets";
import OrangeBtnText from '@/components/OrangeBtnText/OrangeBtnText';
import GreyButton from '@/components/GreyButton/GreyButton';
import {
    Table, TableBody, TableCell, TableRow, TableHeader, TableHead
} from "@/components/ui/table";
import { Link } from 'react-router-dom';
import BuyChart from '@/components/BuyChart/BuyChart';
import { ChevronDown } from 'lucide-react';

const formatId = (id) => {
    if (id.length > 7) {
        return `${id.slice(0, 10)}...${id.slice(-2)}`;
    }
    return id;
};

const BuyNft = () => {
    const [isSell, setIsSell] = useState(false);  // State to toggle between Buy Now and Sell Now
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);

    const renderPopup = () => {
        setShowPopup(true)
    }
    function closePopup() {
        setShowPopup(false);
        document.body.classList.remove("popup-open");
    }

    const renderPopup2 = () => {
        setShowPopup2(true)
    }
    function closePopup2() {
        setShowPopup2(false);
        document.body.classList.remove("popup-open");
    }
    const handlePopupClick = (e) => {
        e.stopPropagation();
    };
    const [selected, setSelected] = useState('1 month');
    const [isOpen, setIsOpen] = useState(false);

    const options = ['1 week', '1 month', '3 months', '1 year'];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };
    const data = {
        amount: '150 DOGE',
        price: '245,3 DOGE',
        status: 'At Floor',
        duration: 'In 5 Days',
        id: '1Lbcfr7sAHJASKnxnmj75571'
    };

    return (
        <>
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
                                <OrangeBtnText name={isSell ? "Sell Now" : "Buy Now"} style="py-3 px-5" onClick={renderPopup} />
                                {/* <Link to={"/sell-nft"} onClick={() => setIsSell(!isSell)}>
                                <GreyButton name="Make an Offer" styles={"py-3"} />
                            </Link> */}
                                <GreyButton name="Make an Offer" styles={"py-3"} onClick={renderPopup2} />
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
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center  z-[100] bg-black bg-opacity-50" onClick={closePopup}>
                    <div className="bg-[#262626] py-6 px-7 z-[300] w-[90%] md:w-[65%] lg:w-[55%] xl:w-[40%] rounded-[20px]" onClick={handlePopupClick}>
                        <h1 className='text-lg lg:text-2xl mt-3 font-semibold'>Approve transaction</h1>
                        <div className='mt-10 flex items-center  gap-5 sm:gap-0 justify-between'>
                            <div className='flex items-center gap-4'>
                                <div className='flex-shrink-0'>
                                    <img src={images.nft5} alt="" className='w-24 sm:w-28 ' />
                                </div>
                                <div className='hidden sm:block'>
                                    <h1 className='text-white text-base md:text-lg lg:text-xl font-semibold'>Animegirl#152</h1>
                                    <p className='text-gray-300 text-sm sm:text-base text-nowrap'>Blockchain : Laika</p>
                                </div>
                            </div>
                            <div className='hidden sm:flex flex-col items-end'>
                                <h1 className='text-white text-base md:text-lg lg:text-xl font-semibold text-nowrap'>{data.price}</h1>
                                <p className='text-gray-300 text-sm sm:text-base'>$18,45</p>
                            </div>

                        </div>
                        <div className='mt-5 flex sm:hidden items-center justify-between'>
                            <div className=''>
                                <h1 className='text-white text-base md:text-lg lg:text-xl font-semibold'>Animegirl#152</h1>
                                <p className='text-gray-300 text-sm sm:text-base text-nowrap'>Blockchain : Laika</p>
                            </div>
                            <div className='flex flex-col items-end'>
                                <h1 className='text-white text-base md:text-lg lg:text-xl font-semibold text-nowrap'>{data.price}</h1>
                                <p className='text-gray-300 text-sm sm:text-base'>$18,45</p>
                            </div>
                        </div>
                        <div className='mt-12'>
                            <h1 className='text-white text-lg font-semibold'>Access your wallet</h1>
                            <p className='text-gray-300 text-base mt-1 md:w-[85%] w-full lg:w-[80%] xl:w-[70%]'>You will be asked to approve this transaction from your wallet.</p>
                        </div>
                        <div className='mt-5'>
                            <OrangeBtnText name={"Continue"} style="py-3 px-5" onClick={closePopup} />
                        </div>
                    </div>
                </div>
            )}
            {showPopup2 && (
                <div className="fixed inset-0 flex items-center justify-center  z-[100] bg-black bg-opacity-50" onClick={closePopup2} >
                    <div className="bg-[#262626] py-6 px-7 z-[300] w-[90%] md:w-[65%] lg:w-[55%] xl:w-[40%] rounded-[20px]" onClick={handlePopupClick}>
                        <h1 className='text-lg lg:text-2xl mt-3 font-semibold'>Make an offer</h1>
                        <div className='mt-10 flex items-center  gap-5 sm:gap-0 justify-between'>
                            <div className='flex items-center gap-4'>
                                <div className='flex-shrink-0'>
                                    <img src={images.nft5} alt="" className='w-24 sm:w-28 ' />
                                </div>
                                <div className='hidden sm:block'>
                                    <h1 className='text-white text-base md:text-lg lg:text-xl font-semibold'>Animegirl#152</h1>
                                    <p className='text-gray-300 text-sm sm:text-base text-nowrap'>Blockchain : Laika</p>
                                </div>
                            </div>
                            <div className='hidden sm:flex flex-col items-end'>
                                <h1 className='text-white text-base md:text-lg lg:text-xl font-semibold text-nowrap'>-- Doge</h1>
                                <p className='text-gray-300 text-sm sm:text-base'>$--</p>
                            </div>

                        </div>
                        <div className='mt-5 flex sm:hidden items-center justify-between'>
                            <div className=''>
                                <h1 className='text-white text-base md:text-lg lg:text-xl font-semibold'>Animegirl#152</h1>
                                <p className='text-gray-300 text-sm sm:text-base text-nowrap'>Blockchain : Laika</p>
                            </div>
                            <div className='flex flex-col items-end'>
                                <h1 className='text-white text-base md:text-lg lg:text-xl font-semibold text-nowrap'>-- Doge</h1>
                                <p className='text-gray-300 text-sm sm:text-base'>$--</p>
                            </div>
                        </div>
                        <div className='mt-4 flex flex-col gap-1'>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray-400 text-sm sm:text-base text-nowrap'>Balance</p>
                                <p className='text-gray-400 text-sm sm:text-base'>0 DOGE</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray-400 text-sm sm:text-base text-nowrap'>Floor price</p>
                                <p className='text-gray-400 text-sm sm:text-base'>181,52 DOGE</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-gray-400 text-sm sm:text-base text-nowrap'>Best offer</p>
                                <p className='text-gray-400 text-sm sm:text-base'>805,4 LAIKA</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h2 className="text-white mb-3 font-semibold">Duration</h2>
                            <div className='mt-4'>
                                <div className="relative w-[50%] md:w-[30%] lg:w-[25%]">
                                    <div className="bg-black text-gray-400 w-[90%] text-nowrap rounded-s-[10px] text-sm font-medium py-2 pl-3 pr-10 rounded cursor-pointer appearance-none focus:outline-none"
                                        onClick={toggleDropdown}>
                                        {selected}
                                        <button
                                            className="absolute inset-y-0 right-0 flex items-center px-2 bg-[#4a4a4a] rounded-e-[10px]"
                                            onClick={toggleDropdown}
                                        >
                                            <ChevronDown className="h-5 w-5 text-white" />
                                        </button>
                                    </div>
                                    {isOpen && (
                                        <div className="absolute top-[-29vh] sm:top-auto w-full bg-black mt-1 rounded-[10px]">
                                            {options.map((option, index) => (
                                                <div key={index}
                                                    className="text-gray-400 text-sm text-nowrap py-2 pl-3 pr-10 hover:bg-gray-700 rounded cursor-pointer"
                                                    onClick={() => handleSelect(option)}>
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <Link to={"/sell-nft"}>
                            <OrangeBtnText name={"Continue"} style="py-3 px-5"  />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default BuyNft;
