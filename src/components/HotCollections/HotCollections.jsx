import React, { useState } from 'react'
import TableHome from '../TableHome/TableHome'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OrangeBtnText from '../OrangeBtnText/OrangeBtnText';
import { Link } from 'react-router-dom';

const HotCollections = () => {
    const [activeTab, setActiveTab] = useState("6h");
    return (
        <>
            <section>
                <div className='md:container md:mx-auto px-3 py-10'>
                    <h1 className='font-semibold md:text-xl text-lg my-10'>Hot collections</h1>
                    <Tabs defaultValue="6h" onValueChange={(value) => setActiveTab(value)} >
                        <div className='flex items-center md:flex-row flex-col justify-between'>
                            <TabsList className="flex items-center gap-4 mb-4">
                                <TabsTrigger value="6h" isActive={activeTab === "6h"} className="rounded-[20px]">6h</TabsTrigger>
                                <TabsTrigger value="12h" isActive={activeTab === "12h"} className="rounded-[20px]">12h</TabsTrigger>
                                <TabsTrigger value="24h" isActive={activeTab === "24h"} className="rounded-[20px]">24h</TabsTrigger>
                                <TabsTrigger value="7d" isActive={activeTab === "7d"} className="rounded-[20px]">7d</TabsTrigger>
                                <TabsTrigger value="All-time" isActive={activeTab === "All-time"} className="rounded-[20px] text-nowrap">All time</TabsTrigger>
                            </TabsList>
                            <Link>
                                <OrangeBtnText name={"See all"} style={"py-2 px-3"} />
                            </Link>
                        </div>

                        <TabsContent value="6h"><TableHome /></TabsContent>
                        <TabsContent value="12h"><TableHome /></TabsContent>
                        <TabsContent value="24h"><TableHome /></TabsContent>
                        <TabsContent value="7d"><TableHome /></TabsContent>
                        <TabsContent value="All-time"><TableHome /></TabsContent>

                    </Tabs>

                </div>

            </section>
        </>
    )
}

export default HotCollections