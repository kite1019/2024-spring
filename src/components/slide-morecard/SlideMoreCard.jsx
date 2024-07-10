
import { useDataNodes } from '../../context/DataNodesProvider';
import useLinkMixin from '../../mixin/useLinkMixin';

// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination } from 'swiper/modules';

import { SlideCard } from './style';
import { sbdpreviewMore } from '../../assets/layout';

const SlideMoreCard = () => {
    const dataNodes = useDataNodes();
    if (!dataNodes.sbdpreviewData) {
        return null;
    }
    const { target, getLinkUrl, goTo } = useLinkMixin();

    return (
        <>
        {dataNodes.sbdpreviewData.length > 0 && (
            <div className="container outBox">
                <div className="h6 text-center">
                    <span style={{fontSize:'3rem'}}>強檔預告</span>
                </div>
                <Swiper
                    spaceBetween={10}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '320': { slidesPerView: 2.2, spaceBetween: 0, },
                        '768': { slidesPerView: 3.2, spaceBetween: 5, },
                        '1024': { slidesPerView: 3.5, spaceBetween: 20, },
                        '1025': { slidesPerView: 4.3, spaceBetween: 24, },
                    }}
                >
                    {dataNodes.sbdpreviewData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SlideCard>
                                <a href={getLinkUrl(item)} className={item.Link.Url === '#nolink' ? 'pe-none' : ''} target={target(item)} onClick={(e) => goTo(e, item)}>
                                    <main>
                                        <div className="date">{ item.Link.Text1 }</div>
                                        <div className={item.Link.Url === '#nolink' ? 'more d-none' : 'more'}>
                                            <img src={sbdpreviewMore} alt="看更多" className="d-block" />
                                        </div>
                                        <div className='pic'>
                                            <img key={item.index} src={item.Img.Src} alt="" className="w-100"/>
                                        </div>
                                        <div className="pd_title">{ item.Link.Text }</div>
                                        <div className="hotline">{ item.Link.Text2 }</div>
                                    </main>
                                </a>
                            </SlideCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )}
        </>
    );
}

export default SlideMoreCard;