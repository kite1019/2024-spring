
import { useDataNodes } from '../../context/DataNodesProvider';
import useLinkMixin from '../../mixin/useLinkMixin';

// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

import { SlideCard } from './style';
import { slidecoverflowListCardBg } from '../../assets/layout';

const SlideCoverFlow = () => {
    const dataNodes = useDataNodes();
    if (!dataNodes.slideCoverData) {
        return null;
    }
    const { target, getLinkUrl, goTo } = useLinkMixin();

    return (
        <>
        {dataNodes.slideCoverData.length > 0 && (
            <Swiper
                spaceBetween={10}
                modules={[Autoplay, Pagination, EffectCoverflow]}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                loopAdditionalSlides={2}
                pagination={{
                    clickable: true,
                }}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 35,
                    stretch: 0,
                    depth: 110,
                    modifier: 1,
                    slideShadows: false,
                }}
                className="mySwiper"
                breakpoints={{
                    '320': { slidesPerView: 1.5, spaceBetween: 10, loopedSlides: 2, },
                    '415': { slidesPerView: 1.7, spaceBetween: 10, loopedSlides: 2, },
                    '768': { slidesPerView: 2.4, spaceBetween: 20, loopedSlides: 3,},
                    '1024': { slidesPerView: 2.8, spaceBetween: 20, loopedSlides: 3, },
                    '1025': { slidesPerView: 4.2, spaceBetween: 10, loopedSlides: 4, },
                }}
            >
                {dataNodes.slideCoverData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <SlideCard>
                            <a href={getLinkUrl(item)} className={item.Link.Url === '#nolink' ? 'pe-none' : ''} target={target(item)} onClick={(e) => goTo(e, item)}>
                                <main>
                                    <div className='pic'>
                                        <img key={item.Id} src={item.Img.Src} alt="" className="w-100"/>
                                    </div>
                                    <div className="hotline">{ item.Link.Text2 }</div>
                                    <div className="pd_title">{ item.Link.Text }</div>
                                    <div className="price">
                                        <small>{ item.Link.Text3 === '' ? '' : '$' + item.Link.Text3 }</small>
                                        <strong><i>$</i>{ item.Link.Text1 }</strong>
                                    </div>
                                </main>
                                <img src={slidecoverflowListCardBg} alt="bg" className="d-block" />
                            </a>
                        </SlideCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        )}
        </>
    );
}

export default SlideCoverFlow;