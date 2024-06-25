import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ScrollMarket from '../ScrollMarket/ScrollMarket';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const TabsMarket = () => {
    const [activeTab, setActiveTab] = useState("All");
    return (
        <>
            <section className='md:container md:mx-auto py-12 md:mt-16 mt-8'>
                <Tabs defaultValue="All" onValueChange={(value) => setActiveTab(value)} >
                    <div className='flex items-start md:flex-row flex-col '>
                        <div className='w-full md:w-[30%] lg:w-[40%] xl:w-[30%] flex flex-col items-center sm:items-start'>
                            <h1 className='font-semibold  text-lg md:text-base lg:text-lg xl:text-xl  pb-5'>Status</h1>
                            <TabsList className="flex items-center flex-wrap gap-4 mb-5">

                                <TabsTrigger value="All" isActive={activeTab === "All"} className="text-base lg:text-lg xl:text-xl rounded-[20px]">All</TabsTrigger>
                                <TabsTrigger value="Listed" isActive={activeTab === "Listed"} className=" text-base lg:text-lg xl:text-xl rounded-[20px]">Listed</TabsTrigger>
                                <TabsTrigger value="Bids" isActive={activeTab === "Bids"} className=" text-base lg:text-lg xl:text-xl rounded-[20px]">Bids</TabsTrigger>
                                <TabsTrigger value="Offers" isActive={activeTab === "Offers"} className="text-base lg:text-lg xl:text-xl rounded-[20px]">Offers</TabsTrigger>
                            </TabsList>
                            <h1 className='font-semibold text-lg md:text-base lg:text-lg xl:text-xl pb-5'>Price</h1>
                            <div className='flex items-center flex-col  lg:flex-row gap-6 md:gap-10'>
                                <div>
                                    <h1 className='font-semibold text-sm lg:text-base  mb-2'>From</h1>
                                    <div className='flex w-full'>
                                        <input type="number" className=' p-2 rounded-s-[10px] md:w-[120px] bg-black appearance-none border-0 focus:outline-none' />
                                        <Select value='Doge'>
                                            <SelectTrigger className="">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Doge">Doge</SelectItem>
                                                <SelectItem value="Laika">Laika</SelectItem>
                                                <SelectItem value="USDT">USDT</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                </div>
                                <div>
                                    <h1 className='font-semibold text-sm lg:text-base  mb-2'>To</h1>
                                    <div className='flex  w-full'>
                                        <input type="number" className=' p-2 rounded-s-[10px]  md:w-[120px] bg-black appearance-none border-0 focus:outline-none' />
                                        <Select value='Doge'>
                                            <SelectTrigger className="">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Doge">Doge</SelectItem>
                                                <SelectItem value="Laika">Laika</SelectItem>
                                                <SelectItem value="USDT">USDT</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:w-[70%] lg:w-[60%] xl:w-[70%]'>
                            <TabsContent value="All"><ScrollMarket /></TabsContent>
                            <TabsContent value="Listed"><ScrollMarket /></TabsContent>
                            <TabsContent value="Bids"><ScrollMarket /></TabsContent>
                            <TabsContent value="Offers"><ScrollMarket /></TabsContent>
                        </div>
                    </div>



                </Tabs>
            </section>
        </>
    )
}

export default TabsMarket