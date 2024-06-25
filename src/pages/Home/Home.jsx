import HotCollections from '@/components/HotCollections/HotCollections'
import LatestCollections from '@/components/LatestCollections/LatestCollections'
import LatestSales from '@/components/LatestSales/LatestSales'
import NewsTrending from '@/components/NewsTrending/NewsTrending'
import TopCollections from '@/components/TopCollections/TopCollections'
import React from 'react'

const Home = () => {
  return (
    <>
      <NewsTrending />
      <TopCollections />
      <HotCollections />
      <LatestSales />
      <LatestCollections />
    </>
  )
}

export default Home