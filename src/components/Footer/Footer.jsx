import React from 'react'
import * as images from "../../assets"

const Footer = () => {
  return (
    <>
      <footer className='bg-[#202020] mt-20 px-3 pt-16 pb-4'>
        <div className=' md:container md:mx-auto flex justify-between md:flex-row flex-col gap-10'>
          <div className='md:w-[30%] w-full flex flex-col gap-7'>
            <div className='flex items-center gap-3 '>
              <img src={images.logo} alt="" className='w-14 lg:w-12 xl:w-14' />
              <img src={images.logo2} alt="" className='w-20 lg:w-20 xl:w-24' />
            </div>
            <p className='leading-loose'>
              The leading NFT Marketplace on Laika Home to the next generation of digital creators. Discover the best NFT collections.
            </p>
            <div className='flex items-center gap-10'>
              <a href="" target='_blank' className='hover:opacity-80'>
                <img src={images.discord} alt="" className='w-7' />
              </a>
              <a href="" target='_blank' className='hover:opacity-80'>
                <img src={images.twitter} alt="" className='w-7' />
              </a>
              <a href="" target='_blank' className='hover:opacity-80'>
                <img src={images.insta} alt="" className='w-6' />
              </a>
              <a href="" target='_blank' className='hover:opacity-80'>
                <img src={images.yt} alt="" className='w-7' />
              </a>
            </div>
          </div>
          <div className='md:w-[60%] w-full flex gap-4 justify-around'>
            <div className='md:w-[30%] w-full flex flex-col gap-7'>
              <h1 className='font-semibold md:text-2xl text-lg'>Marketplace</h1>
              <div className='flex flex-col gap-5 text-gray-300'>
                <a href="" target='_blank'>
                  Explore
                </a>
                <a href="" target='_blank'>
                  Articles
                </a>
                <a href="" target='_blank'>
                  How it Works
                </a>
                <a href="" target='_blank'>
                  Help
                </a>
              </div>
            </div>
            <div className='md:w-[30%] w-full flex flex-col gap-7'>
              <h1 className='font-semibold md:text-2xl text-lg'>Links</h1>
              <div className='flex flex-col gap-5 text-gray-300'>
                <a href="" target='_blank'>
                  Tokens
                </a>
                <a href="" target='_blank'>
                  API
                </a>
                <a href="" target='_blank'>
                  Big Bounty
                </a>
                <a href="" target='_blank'>
                  Become Partners
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-14'>
          <p className="text-gray-300 "> <span className='text-xl mx-1'>&copy;</span>2022 eNDFT. all Right Reserved </p>
        </div>
      </footer>
    </>
  )
}

export default Footer