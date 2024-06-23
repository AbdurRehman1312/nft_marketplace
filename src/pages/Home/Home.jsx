import HotCollections from '@/components/HotCollections/HotCollections'
import NewsTrending from '@/components/NewsTrending/NewsTrending'
import TopCollections from '@/components/TopCollections/TopCollections'
import React from 'react'

const Home = () => {
  return (
    <>
      <NewsTrending />
      <TopCollections />
      <HotCollections />
    </>
  )
}

export default Home