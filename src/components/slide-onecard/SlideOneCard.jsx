import React from 'react';
import { useDataNodes } from '../../context/DataNodesProvider';
import useLinkMixin from '../../mixin/useLinkMixin';
import SlideOneItem from './SlideOneCardItem';
import { SlideWrapper } from './style';

const SlideOneCard = () => {
    const dataNodes = useDataNodes();
    if (!dataNodes.oneCardSlideData) {
        return null;
    }
    // 索引單雙數，拆成2組資料
    const oneCardSlideData_1 = dataNodes.oneCardSlideData.filter((_, index) => index % 2 === 0);
    const oneCardSlideData_2 = dataNodes.oneCardSlideData.filter((_, index) => index % 2 !== 0);

    return (
        <>
        {dataNodes.oneCardSlideData.length > 0 && (
            <SlideWrapper className="container w-1180">
                <div className="h6 text-center">
                    <span style={{fontSize:'3rem'}}>單筆資料拆成2組輪撥</span>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <SlideOneItem data={oneCardSlideData_1} />
                    </div>
                    <div className="col-lg-6 col-12">
                        <SlideOneItem data={oneCardSlideData_2} />
                    </div>
                </div>
            </SlideWrapper>
        )}
        </>
    );
}

export default SlideOneCard;
