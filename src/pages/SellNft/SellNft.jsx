import React, { useState } from 'react';
import * as images from "../../assets";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDown } from 'lucide-react';


const SellNft = () => {
  const [saleType, setSaleType] = useState('');

  return (
    <div className='md:container md:mx-auto px-3 py-8'>
      <div className='flex justify-center items-start md:flex-row flex-col gap-20'>
        <div className='bg-[#262626] xl:w-[25%] lg:w-[40%] md:w-[50%] w-full rounded-[10px] p-5 flex justify-between gap-3 flex-col'>
          <div className='lg:h-[300px] md:h-[280px] h-[250px] border-4 border-secondary rounded-[35px]'>
            <img src={images.nft5} alt="" className='w-full h-full object-cover rounded-[30px]' />
          </div>
          <div className='flex justify-between items-center gap-y-3 mt-2'>
            <div>
              <h1 className="text-white font-semibold text-lg md:text-xl mb-1">Animegirl#152</h1>
              <div className='flex items-center gap-3'>
                <img src={images.nft2} alt="" className='w-8' />
                <span className='font-light'>Anime girls</span>
              </div>
            </div>
            <div>
              <h1 className="text-white font-semibold text-lg md:text-xl mb-1">245,3 DOGE</h1>
              <span className='font-light'>$18,34</span>
            </div>
          </div>
        </div>
        <div className='xl:w-[25%] lg:w-[40%] md:w-[50%] w-full flex flex-col'>
          <h2 className="text-white mb-3 font-semibold">Choose a type of sale:</h2>
          <div className='flex flex-col gap-3 mt-2'>
            <div
              className={`cursor-pointer font-semibold rounded-[15px] text-white p-5 ${saleType === 'fixed' ? 'bg-[#4a4a4a]' : 'bg-[#232323]'}`}
              onClick={() => setSaleType('fixed')}
            >
              Fixed price
              <p className='text-sm font-light mt-2'>The item is listed at the price you set</p>
            </div>
            <div
              className={`cursor-pointer font-semibold rounded-[15px] text-white p-5 ${saleType === 'auction' ? 'bg-[#4a4a4a]' : 'bg-[#232323]'}`}
              onClick={() => setSaleType('auction')}
            >
              List for auction
              <p className='text-sm font-light mt-2'>The item will be sold to the highest bidder</p>
            </div>
          </div>
          <div className='mt-6'>
            <h2 className="text-white mb-3 font-semibold">Set a price</h2>
            <div>
              <h2 className="text-white text-sm mb-3 font-semibold mt-8">Starting price</h2>
              <div className='flex w-full mt-4'>
                <input type="number" placeholder='Amount' className=' p-2.5 text-sm rounded-s-[10px] w-full bg-black appearance-none border-0 focus:outline-none' />
                <Select value='Doge'>
                  <SelectTrigger className="w-[15%]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Doge">Doge</SelectItem>
                    <SelectItem value="Laika">Laika</SelectItem>
                    <SelectItem value="USDT">USDT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className='text-gray-300 font-light mt-3'>= $0.00</p>
            </div>
          </div>
          <div className='mt-6'>
            <h2 className="text-white mb-3 font-semibold">Duration</h2>
            <div className='flex w-full mt-4'>
              <input type="number" placeholder='1 month' className=' p-2.5 text-sm rounded-s-[10px] w-full bg-black appearance-none border-0 focus:outline-none' />
              <Select value='down'>
                <SelectTrigger className="w-[15%]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="hidden" value="down"><ChevronDown /></SelectItem>
                  <SelectItem value="onemonth">1 month</SelectItem>
                  <SelectItem value="twomonths">2 months</SelectItem>
                  <SelectItem value="threemonths">3 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <h2 className="text-white mb-3 font-semibold mt-8">Summary</h2>
            <div className='w-full mt-4 text-gray-300'>
              <div className='flex items-center justify-between text-sm'>
                <p>Listing price</p>
                <p>--DOGE</p>
              </div>
              <div className='flex items-center justify-between text-sm my-3'>
                <p>Fee</p>
                <p>2.5%</p>
              </div>
              <div className='flex items-center justify-between text-sm'>
                <p>Creator Earning</p>
                <p>77.5%</p>
              </div>
              <div className='bg-black w-[23%] py-2 px-1 rounded-[10px] text-center text-gray-300 mt-3'>
                <p className='text-center'>7.5 <span className=''>%</span></p>
              </div>
            </div>
              <div className='flex items-center justify-between mt-5'>
                <p>Total potential earnings</p>
                <p className='text-gray-300'>--DOGE</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellNft;
