import React from 'react'
import NftCard from '@/components/NftCard/NftCard'
import {
  Table, TableBody, TableCell, TableRow, TableHeader, TableHead, TableCaption
} from "@/components/ui/table";
import * as images from "../../assets"

const inventoryItems = [{
  id: 1,
  nftimg: "nft2",
  buy: true,
  badge: false,
  highlighted: false,
  style: "lg:w-[20%] xl:w-[22%] md:w-[40%]"
},
{
  id: 2,
  nftimg: "nft2",
  buy: true,
  badge: false,
  highlighted: false,
  style: "lg:w-[20%] xl:w-[22%] md:w-[40%]"
},
{
  id: 3,
  nftimg: "nft3",
  buy: true,
  badge: false,
  highlighted: false,
  style: "lg:w-[20%] xl:w-[22%] md:w-[40%]"
},
{
  id: 4,
  nftimg: "nft4",
  buy: true,
  badge: false,
  highlighted: false,
  style: "lg:w-[20%] xl:w-[22%] md:w-[40%]"
},
{
  id: 5,
  nftimg: "nft5",
  buy: true,
  badge: false,
  highlighted: false,
  style: "lg:w-[20%] xl:w-[22%] md:w-[40%]"
},
{
  id: 6,
  nftimg: "nft1",
  buy: true,
  badge: false,
  highlighted: false,
  style: "lg:w-[20%] xl:w-[22%] md:w-[40%]"
},
{
  id: 7,
  nftimg: "nft2",
  buy: true,
  badge: false,
  highlighted: false,
  style: "lg:w-[20%] xl:w-[22%] md:w-[40%]"
},
{
  id: 8,
  nftimg: "nft3",
  buy: true,
  badge: false,
  highlighted: false,
  style: "lg:w-[20%] xl:w-[22%] md:w-[40%]"
},
]
const latestTransactions = [
  {
    id: 1,
    type: "Airdrop",
    asset: "Animegirl#152",
    assetName: "Anime girls",
    price: "0.4 ETH",
    quantity: 1,
    from: "1Lbcfr7sAH...71",
    to: "You",
    date: "2hrs ago"
  },
  {
    id: 2,
    type: "Buy",
    asset: "Animegirl#152",
    assetName: "Anime girls",
    price: "0.4 ETH",
    quantity: 1,
    from: "1Lbcfr7sAH...71",
    to: "You",
    date: "2hrs ago"
  },
  {
    id: 3,
    type: "Sell",
    asset: "Animegirl#152",
    assetName: "Anime girls",
    price: "0.4 ETH",
    quantity: 1,
    from: "1Lbcfr7sAH...71",
    to: "You",
    date: "2hrs ago"
  },
  {
    id: 4,
    type: "Transfer",
    asset: "Animegirl#152",
    assetName: "Anime girls",
    price: "0.4 ETH",
    quantity: 1,
    from: "1Lbcfr7sAH...71",
    to: "You",
    date: "2hrs ago"
  },
]

const Inventory = () => {
  return (
    <div className=' md:container md:mx-auto px-3 py-8'>
      <section className='my-10'>
        <h1 className='font-semibold md:text-xl text-lg'>My Inventory</h1>
        <div className='lg:w-[90%] w-full flex flex-wrap gap-5 lg-gap-0 md:gap-4 my-16'>
          {inventoryItems.map((item) => (
            <NftCard key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className='my-10'>
        <h1 className='font-semibold md:text-xl text-lg'>Latest Transactions</h1>
        <Table className="my-10" >
        <TableCaption>No more transactions</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Type</TableHead>
              <TableHead className="">Asset</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-center">From</TableHead>
              <TableHead className="text-center">To</TableHead>
              <TableHead className="text-center">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              latestTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className={`rounded-s-[20px] text-center capitalize ${transaction.type === "Buy" ? "text-green-500" : transaction.type === "Sell" ? "text-red-600" : "text-white"}`}>{transaction.type}</TableCell>
                  <TableCell>
                    <div className='flex items-center gap-3 text-base'>
                      <img src={images.collect} alt="" className='md:w-20 w-10' />
                      <div className='flex flex-col gap-1 text-sm md:text-base'>
                        <span>{transaction.asset}</span>
                        <span className='font-light'>{transaction.assetName}</span>
                      </div>
                    </div></TableCell>
                  <TableCell className="text-center">{transaction.price}</TableCell>
                  <TableCell className="text-center">{transaction.quantity}</TableCell>
                  <TableCell className="text-center">{transaction.from}</TableCell>
                  <TableCell className="text-center">{transaction.to}</TableCell>
                  <TableCell className=" rounded-e-[20px] text-center">{transaction.date}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </section>
    </div>
  )
}

export default Inventory