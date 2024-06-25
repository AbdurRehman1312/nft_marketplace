import React from 'react'
import NftCard from '@/components/NftCard/NftCard'

const ScrollMarket = () => {
    const inventoryItems = [{
        id: 1,
        nftimg: "nft1",
        buy: true,
        badge: false,
        highlighted: false,
        style: "",
        nftName: "Animegirl#152",
        nftCaption: "Anime girls",
      },
      {
        id: 2,
        nftimg: "nft2",
        buy: true,
        badge: false,
        highlighted: false,
        style: "",
        nftName: "Animegirl#152",
        nftCaption: "Anime girls",
      },
      {
        id: 3,
        nftimg: "nft1",
        buy: true,
        badge: false,
        highlighted: false,
        style: "",
        nftName: "Animegirl#152",
        nftCaption: "Anime girls",
      },
      {
        id: 4,
        nftimg: "nft1",
        buy: true,
        badge: false,
        highlighted: false,
        style: "",
        nftName: "Animegirl#152",
        nftCaption: "Anime girls",
      },
      {
        id: 5,
        nftimg: "nft2",
        buy: true,
        badge: false,
        highlighted: false,
        style: "",
        nftName: "Animegirl#152",
        nftCaption: "Anime girls",
      },
      {
        id: 6,
        nftimg: "nft1",
        buy: true,
        badge: false,
        highlighted: false,
        style: "",
        nftName: "Animegirl#152",
        nftCaption: "Anime girls",
      },
      {
        id: 7,
        nftimg: "nft1",
        buy: true,
        badge: false,
        highlighted: false,
        style: "",
        nftName: "Animegirl#152",
        nftCaption: "Anime girls",
      },
      {
        id: 8,
        nftimg: "nft2",
        buy: true,
        badge: false,
        highlighted: false,
        style: "",
        nftName: "Animegirl#152",
        nftCaption: "Anime girls",
      },
      {
        id: 9,
        nftimg: "nft1",
        buy: true,
        badge: false,
        highlighted: false,
        style: "",
        nftName: "Animegirl#152",
        nftCaption: "Anime girls",
      },
      ]
  return (
    <>
    <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 mt-10 sm:mt-0 px-3 lg:px-10 w-full overflow-y-auto  md:h-[90vh] h-[120vh] xl:h-[100vh]'>
    {inventoryItems.map((item) => (
            <NftCard key={item.id} {...item} />
          ))}
    </div>
    </>
  )
}

export default ScrollMarket