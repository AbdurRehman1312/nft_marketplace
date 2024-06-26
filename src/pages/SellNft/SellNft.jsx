import React, { useState} from 'react';
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
  const [selected, setSelected] = useState('1 month');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['1 week', '1 month', '3 months', '1 year'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
      setSelected(option);
      setIsOpen(false);
  };

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
                <Select >
                  <SelectTrigger className="w-[25%] sm:w-[20%]">
                    <SelectValue placeholder="Doge"/>
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
            <div className='w-full mt-4'>
              <div className="relative w-full">
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
                  <div className="absolute  w-full bg-black mt-1 rounded-[10px]">
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
