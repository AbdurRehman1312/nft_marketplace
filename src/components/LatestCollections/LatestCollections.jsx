import React, { useState, useRef, useEffect } from 'react';
import NftCard from '../NftCard/NftCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const LatestCollections = () => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(2);

    const checkActiveIndex = () => {
        if (carouselRef.current) {
            const scrollLeft = carouselRef.current.scrollLeft;
            const carouselWidth = carouselRef.current.offsetWidth;
            const itemWidth = carouselRef.current.firstChild.offsetWidth;
            const index = Math.round((scrollLeft + carouselWidth / 2) / itemWidth) - 1;
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', checkActiveIndex);

            setTimeout(() => {
                const itemWidth = carousel.firstChild.offsetWidth;
                carousel.scrollLeft = itemWidth * 2 - (carousel.offsetWidth - itemWidth) / 2;
            }, 100);

            return () => {
                carousel.removeEventListener('scroll', checkActiveIndex);
            };
        }
    }, []);

    const cardData = [
        {
            styles: 'xl:w-[95%] md:w-full lg:w-[80%] mx-auto', highlighted: false, badge: false, desc: false, nftimg: 'nft2', nftName: "Animegirl#152",
            nftCaption: "Anime girls",
            boughtOrFloor: "Floor price: 2.1 ETH"
        },
        { styles: 'xl:w-[95%] md:w-full lg:w-[80%] mx-auto', highlighted: false, badge: false, desc: false, nftimg: 'nft3' },
        {
            styles: 'xl:w-[95%] md:w-full lg:w-[80%] mx-auto', buy: true, highlighted: true, badge: true, desc: true, nftimg: 'nft1', nftName: "Anime girls",
            boughtOrFloor: "Floor price: 2.1 ETH", category: "Hot"
        },
        { styles: 'xl:w-[95%] md:w-full lg:w-[80%] mx-auto', highlighted: false, badge: false, desc: false, nftimg: 'nft4' },
        { styles: 'xl:w-[95%] md:w-full lg:w-[80%] mx-auto', highlighted: false, badge: false, desc: false, nftimg: 'nft5' }
    ];

    return (
        <>
            <section className='mt-16'>
                <div className='md:container md:mx-auto px-3 py-2'>
                    <h1 className='font-semibold md:text-xl text-lg'>Latest Collections</h1>
                </div>
                <div ref={carouselRef}>
                    <Carousel
                        className="mt-20"
                        id="top-collection"
                    >
                        <CarouselContent className="">
                            {cardData.map((card, index) => (
                                <CarouselItem key={index} className={index === activeIndex ? 'md:scale-100 scale-90' : 'md:scale-90 scale-90'}>
                                    <NftCard
                                        styles={`${card.styles} ${index === activeIndex ? 'md:scale-100 scale-90' : 'md:scale-96 scale-90'}`}
                                        highlighted={card.highlighted}
                                        badge={card.badge}
                                        desc={card.desc}
                                        nftimg={card.nftimg}
                                        nftName={card.nftName}
                                        nftCaption={card.nftCaption}
                                        buy={card.buy}
                                        boughtOrFloor={card.boughtOrFloor}
                                        category={card.category}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-[1.5%] top-[-10%]" />
                        <CarouselNext className="right-[1.5%] top-[-10%]" />
                    </Carousel>
                </div>
            </section>
        </>
    );
};

export default LatestCollections;
