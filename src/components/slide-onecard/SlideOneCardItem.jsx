
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination } from 'swiper/modules';

import useLinkMixin from '../../mixin/useLinkMixin';
import { layoutHeroNew } from '../../assets/layout';

function SlideOneItem({ data }) {
    const { target, getLinkUrl, goTo } = useLinkMixin();

    return (
        <Swiper
            spaceBetween={10}
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            speed={1000}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            // loop={true}
            pagination={{
                clickable: true,
            }}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <a href={getLinkUrl(item, index)} className={item.Link.Url === '#nolink' ? 'pe-none' : ''} target={target(item)} onClick={(e) => goTo(e, item)}>
                        <div className="note n1">{item.Link.Text}</div>
                        <img src={item.Img.Src} alt="" className="heroImg absolute" />
                        <img src={layoutHeroNew} className="d-block w-100" alt="bg" />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
export default SlideOneItem;