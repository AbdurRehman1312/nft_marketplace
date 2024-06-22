import React, { useState } from 'react'
import * as images from "../../assets"
import OrangeBtnArrow from '../OrangeBtnArrow/OrangeBtnArrow'
import { NavLink } from 'react-router-dom'
import OrangeBtnText from '../OrangeBtnText/OrangeBtnText'
const links = [
    {
        name: 'Marketplace',
        to: '/marketplace'
    },
    {
        name: 'Create',
        to: '/create'
    },
    {
        name: 'Inventory',
        to: '/inventory'
    }

]
const Header = () => {
    const [toggle, setToggle] = useState(false)
    const [search, setSearch] = useState(false)
    return (
        <>
            <header>
                <div className=' md:container md:mx-auto px-3 py-8 flex items-center justify-between'>
                    <div className='flex items-center gap-5 lg:gap-4 xl:gap-8'>
                        <NavLink className='flex items-center gap-3 '>
                            <img src={images.logo} alt="" className='w-14 lg:w-12 xl:w-14' />
                            <img src={images.logo2} alt="" className='w-20 lg:w-20 xl:w-24' />
                        </NavLink>
                        <div className='hidden sm:flex items-center gap-3'>
                            <input type="text" className=" bg-black text-sm w-[45vh] lg:w-[45vh] xl:w-[50vh] appearance-none border-0 focus:outline-none px-4 py-3 rounded-xl" placeholder='search collection, category...' />
                            <OrangeBtnArrow />
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <ul className='list-none text-white lg:flex hidden'>
                            {
                                links.map((link, index) => (
                                    <li key={index} className='inline-block lg:mx-3 xl::mx-4'>
                                        <NavLink to={link.to}>{link.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                        <OrangeBtnText name={'Connect Wallet'} style='px-4 py-3 text-nowrap lg:block hidden' />
                    </div>
                    <div className='lg:hidden flex items-center gap-5'>
                    <div className="md:hidden flex justify-end items-center">
                        <img
                            src={search ? images.close : images.search}
                            alt="menu"
                            className="w-[28px] h-[28px] object-contain"
                            onClick={() => setSearch((prev) => !prev) & setToggle(false)}
                        />
                    </div>
                    <div className="lg:hidden flex justify-end items-center">
                        <img
                            src={toggle ? images.close : images.menu}
                            alt="menu"
                            className="w-[28px] h-[28px] object-contain"
                            onClick={() => setToggle((prev) => !prev) & setSearch(false)}
                        />
                    </div>
                    
                    </div>

                    {search && (
                        <div className="lg:hidden absolute top-[17vh] right-0 w-full px-1 z-[100]">
                            <div className="py-10 px-6 bg-black shadow-2xl mx-4 my-2 rounded-xl sidebar">
                                <div className='flex items-center justify-center gap-3'>
                                    <input type="text" className=" bg-[#141414] text-sm w-[50vh] appearance-none border-0 focus:outline-none px-4 py-3 rounded-xl" placeholder='search collection, category...' />
                                    <OrangeBtnArrow />
                                </div>
                            </div>
                        </div>
                    )}

                    {toggle && (
                        <div className="lg:hidden absolute top-[17vh] right-0 w-full px-1 z-[100]">
                            <div className="p-6 bg-black shadow-2xl mx-4 my-2 rounded-xl sidebar">
                                <ul className=' items-center gap-5 flex flex-col justify-center'>
                                    {
                                        links.map((link, index) => (
                                            <li key={index} className='inline-block mx-4'>
                                                <NavLink to={link.to} onClick={() => setToggle(false)}>{link.name}</NavLink>
                                            </li>
                                        ))
                                    }
                                    <li>

                                    </li>
                                    <li>
                                        <OrangeBtnText name={'Connect Wallet'} style='px-4 py-3 text-nowrap' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header