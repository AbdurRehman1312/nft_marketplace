import React from 'react'
import {
    Table, TableBody, TableCell, TableRow, TableHeader, TableHead
} from "@/components/ui/table";
import * as images from "../../assets"

const TableHome = () => {

    const Table1 = [
        {
            id: 1,
            collection_text: 'Inivisible friends',
            collection_image: images.collect,
            floorPrice: '0.4 ETH',
            volume: '5.4 ETH'
        },
        {
            id: 2,
            collection_text: 'Inivisible friends',
            collection_image: images.collect,
            floorPrice: '0.4 ETH',
            volume: '5.4 ETH'
        },
        {
            id: 3,
            collection_text: 'Inivisible friends',
            collection_image: images.collect,
            floorPrice: '0.4 ETH',
            volume: '5.4 ETH'
        },
        {
            id: 4,
            collection_text: 'Inivisible friends',
            collection_image: images.collect,
            floorPrice: '0.4 ETH',
            volume: '5.4 ETH'
        },
        {
            id: 5,
            collection_text: 'Inivisible friends',
            collection_image: images.collect,
            floorPrice: '0.4 ETH',
            volume: '5.4 ETH'
        }
    ]
    const Table2 = [
        {
            id: 6,
            collection_text: 'Inivisible friends',
            collection_image: images.collect,
            floorPrice: '0.4 ETH',
            volume: '5.4 ETH'
        },
        {
            id: 7,
            collection_text: 'Inivisible friends',
            collection_image: images.collect,
            floorPrice: '0.4 ETH',
            volume: '5.4 ETH'
        },
        {
            id: 8,
            collection_text: 'Inivisible friends',
            collection_image: images.collect,
            floorPrice: '0.4 ETH',
            volume: '5.4 ETH'
        },
        {
            id: 9,
            collection_text: 'Inivisible friends',
            collection_image: images.collect,
            floorPrice: '0.4 ETH',
            volume: '5.4 ETH'
        },
        {
            id: 10,
            collection_text: 'Inivisible friends',
            collection_image: images.collect,
            floorPrice: '0.4 ETH',
            volume: '5.4 ETH'
        }
    ]
    return (
        <>
            <div className='flex md:flex-row flex-col items-center w-full gap-8'>
                <div className='md:w-[50%] w-full'>
                    <Table >
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-center">Rank</TableHead>
                                <TableHead className="">Collection</TableHead>
                                <TableHead className="text-center">Floor price</TableHead>
                                <TableHead className="text-center">Volume</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                Table1.map((table) => (
                                    <TableRow key={table.id}>
                                        <TableCell className="rounded-s-[20px] text-center">{table.id}</TableCell>
                                        <TableCell><div className='flex items-center gap-3 text-sm md:text-base'>
                                            <img src={table.collection_image} alt="" className='md:w-20 w-10' />
                                            <span>{table.collection_text}</span>
                                        </div></TableCell>
                                        <TableCell className="text-center">{table.floorPrice}</TableCell>
                                        <TableCell className=" rounded-e-[20px] text-center">{table.volume}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>
                <div className='md:w-[50%] w-full'>
                <Table >
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-center">Rank</TableHead>
                                <TableHead className="">Collection</TableHead>
                                <TableHead className="text-center">Floor price</TableHead>
                                <TableHead className="text-center">Volume</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                Table2.map((table) => (
                                    <TableRow key={table.id}>
                                        <TableCell className="rounded-s-[20px] text-center">{table.id}</TableCell>
                                        <TableCell><div className='flex items-center gap-3 text-sm md:text-base'>
                                            <img src={table.collection_image} alt="" className='md:w-20 w-10' />
                                            <span>{table.collection_text}</span>
                                        </div></TableCell>
                                        <TableCell className="text-center">{table.floorPrice}</TableCell>
                                        <TableCell className=" rounded-e-[20px] text-center">{table.volume}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default TableHome