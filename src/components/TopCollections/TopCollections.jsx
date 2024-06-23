import React from 'react'
import NftCard from '../NftCard/NftCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
const TopCollections = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
    return (
        <>
        <section>
        <div className=' md:container md:mx-auto px-3 py-8'>
                <h1 className='font-semibold md:text-xl text-lg'>Top collections</h1>
            </div>
            <div>
                <Carousel
                    plugins={[plugin.current]}
                    className=""
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    
                >
                    <CarouselContent>
                        
                            <CarouselItem className=''>
                               <NftCard />
                            </CarouselItem>
                            <CarouselItem className=''>
                               <NftCard />
                            </CarouselItem>
                            <CarouselItem className=''>
                               <NftCard />
                            </CarouselItem>
                            <CarouselItem className=''>
                               <NftCard />
                            </CarouselItem>
                            <CarouselItem className=''>
                               <NftCard />
                            </CarouselItem>

                    </CarouselContent>
                    <CarouselPrevious className="left-[1.5%] top-[50%]" />
                    <CarouselNext className=" right-[1.5%] top-[50%]" />
                </Carousel>
            </div>
        </section>
           
        </>
    )
}

export default TopCollections