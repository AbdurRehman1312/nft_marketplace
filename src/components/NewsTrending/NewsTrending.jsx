import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import * as images from "../../assets"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import OrangeBtnText from '../OrangeBtnText/OrangeBtnText'
import GreyButton from '../GreyButton/GreyButton'
import { Link } from 'react-router-dom'

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
            <section>
                <div className=' md:container md:mx-auto px-3 py-8'>
                    <h1 className='font-semibold md:text-xl text-lg'>News/Trending</h1>
                </div>
                <div className='w-full'>
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        id="hero-carousel"
                    >
                        <CarouselContent>
                            {trendingNews.map((news, index) => (
                                <CarouselItem key={index} className='h-[80vh] relative pl-0'>
                                    <img src={news.image} alt="" className='w-full h-[100%] object-cover' />
                                    <div className=''>
                                        <div className='bg-dark-gradient absolute bottom-0 lg:bottom-[-1%] left-0 right-0 w-full h-[35%] m-0 z-[2] flex justify-center items-center'>
                                            <div className='flex justify-between items-center gap-3 w-full lg:px-10 pl-8 md:pr-4 pr-2'>
                                                <div className='flex flex-col gap-3'>
                                                    <h1 className='text-white text-xl font-semibold'>{news.title}</h1>
                                                    <p className='text-white text-sm md:w-[45%] w-full limit_text font-extralight'>{news.description}</p>
                                                </div>
                                                <Link to={"/marketplace"}>
                                                    <OrangeBtnText name={news.buttons.orange.name} style={news.buttons.orange.style} />
                                                </Link>
                                            </div>
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
            </section>

        </>
    )
}

export default NewsTrending