import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import * as images from "../../assets"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import OrangeBtnText from '../OrangeBtnText/OrangeBtnText'
import GreyButton from '../GreyButton/GreyButton'

const trendingNews = [
    {
        title: "Anime girls",
        description: "Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. ire enim ipse compellebatur ad militem, quem exagitabat inopia...",
        image: images.news1,
        buttons: {
            orange: { name: "More", style: "py-3 px-5" },
            grey: [
                { name: "New" },
                { name: "Launchpad" }
            ]
        }
    },
    {
        title: "Anime girls",
        description: "Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. ire enim ipse compellebatur ad militem, quem exagitabat inopia...",
        image: images.news1,
        buttons: {
            orange: { name: "More", style: "py-3 px-5" },
            grey: [
                { name: "New" },
                { name: "Launchpad" }
            ]
        }
    },
    {
        title: "Anime girls",
        description: "Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. ire enim ipse compellebatur ad militem, quem exagitabat inopia...",
        image: images.news1,
        buttons: {
            orange: { name: "More", style: "py-3 px-5" },
            grey: [
                { name: "New" },
                { name: "Launchpad" }
            ]
        }
    },
    {
        title: "Anime girls",
        description: "Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. ire enim ipse compellebatur ad militem, quem exagitabat inopia...",
        image: images.news1,
        buttons: {
            orange: { name: "More", style: "py-3 px-5" },
            grey: [
                { name: "New" },
                { name: "Launchpad" }
            ]
        }
    },
    {
        title: "Anime girls",
        description: "Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. ire enim ipse compellebatur ad militem, quem exagitabat inopia...",
        image: images.news1,
        buttons: {
            orange: { name: "More", style: "py-3 px-5" },
            grey: [
                { name: "New" },
                { name: "Launchpad" }
            ]
        }
    },

]
const NewsTrending = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
    return (
        <>
            <div className=' md:container md:mx-auto px-3 py-8'>
                <h1 className='font-semibold'>News/Trending</h1>
            </div>
            <div className='w-full'>
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {trendingNews.map((news, index) => (
                            <CarouselItem key={index} className='h-[80vh] relative'>
                                <img src={news.image} alt="" className='w-full h-[100%] object-cover' />
                                <div className='bg-dark-gradient absolute bottom-0 left-0 right-0 w-full h-[30%] z-[2] container m-auto md:pt-16 pt-10'>
                                    <div className='flex justify-between items-center gap-3'>
                                        <div className='flex flex-col gap-3'>
                                            <h1 className='text-white text-xl font-semibold'>{news.title}</h1>
                                            <p className='text-white text-sm md:w-[45%] w-full limit_text font-extralight'>{news.description}</p>
                                        </div>
                                        <OrangeBtnText name={news.buttons.orange.name} style={news.buttons.orange.style} />
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 absolute top-[5%] right-[1.5%]'>
                                    {news.buttons.grey.map((btn, btnIndex) => (
                                        <GreyButton key={btnIndex} name={btn.name} />
                                    ))}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[1.5%] top-[50%]" />
                    <CarouselNext className=" right-[1.5%] top-[50%]" />
                </Carousel>
            </div>
        </>
    )
}

export default NewsTrending