import React from 'react';
import { useDataNodes } from '../../context/DataNodesProvider';
import useLinkMixin from '../../mixin/useLinkMixin';
import { layoutHeroNew } from '../../assets/layout';

// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const BankSlide = () => {
    const dataNodes = useDataNodes();
    if (!dataNodes.bankWebData) {
        return null;
    }
    if (!dataNodes.bankAppData) {
        return null;
    }
    
    const { target, getLinkUrl, goTo } = useLinkMixin();

    return (
        <>
        {dataNodes.bankWebData.length > 0 && (
            <div className="bankBox d-lg-block d-none">
                <Swiper
                    spaceBetween={15}
                    centeredSlides={true}
                    speed={600}
                    loop={true}
                    loopAdditionalSlides={2}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '320': { slidesPerView: 1.3, spaceBetween: 10, },
                        '768': { slidesPerView: 1.3, spaceBetween: 10,},
                        '1024': { slidesPerView: 3, spaceBetween: 20, },
                    }}
                >
                    {dataNodes.bankWebData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <a href={getLinkUrl(item, index)} className={item.Link.Url === '#nolink' ? 'pe-none' : ''} target={target(item)} onClick={(e) => goTo(e, item)}>
                                <img src={item.Img.Src} alt="" className="w-100" />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )}
        {dataNodes.bankAppData.length > 0 && (
            <div className="bankBox d-lg-none d-block">
                <Swiper
                    spaceBetween={15}
                    centeredSlides={true}
                    speed={600}
                    loop={true}
                    loopAdditionalSlides={2}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '320': { slidesPerView: 1.3, spaceBetween: 10, },
                        '768': { slidesPerView: 1.3, spaceBetween: 10,},
                        '1024': { slidesPerView: 3, spaceBetween: 20, },
                    }}
                >
                    {dataNodes.bankAppData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <a href={getLinkUrl(item, index)} className={item.Link.Url === '#nolink' ? 'pe-none' : ''} target={target(item)} onClick={(e) => goTo(e, item)}>
                                <img src={item.Img.Src} alt="" className="w-100" />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )}
        </>
    );
}

export default BankSlide;
