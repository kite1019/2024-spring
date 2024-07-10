import React from 'react';
import { useDataNodes } from '../../context/DataNodesProvider';
import useLinkMixin from '../../mixin/useLinkMixin';
import { layoutHeroNew } from '../../assets/layout';

// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination } from 'swiper/modules';

const BnHeroSlide = () => {
    const dataNodes = useDataNodes();
    if (!dataNodes.bnHeroData) {
        return null;
    }
    const { target, getLinkUrl, goTo } = useLinkMixin();

    return (
        <>
        {dataNodes.bnHeroData.length > 0 && (
            <Swiper
                spaceBetween={10}
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                speed={1000}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
            >
                {dataNodes.bnHeroData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <a href={getLinkUrl(item, index)} className={item.Link.Url === '#nolink' ? 'pe-none' : ''} target={target(item)} onClick={(e) => goTo(e, item)}>
                            <div className="note n1">{item.Link.Text}</div>
                            <img src={item.Img.Src} alt="" className="heroImg absolute" />
                            <img src={layoutHeroNew} className="d-block w-100" alt="bg" />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        )}
        </>
    );
}

export default BnHeroSlide;
