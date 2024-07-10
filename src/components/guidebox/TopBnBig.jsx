import React from 'react';
import { useDataNodes } from '../../context/DataNodesProvider';
import useLinkMixin from '../../mixin/useLinkMixin';

const TopBnBig = () => {
    const dataNodes = useDataNodes();
    if (!dataNodes.topbnData) {
        return null;
    }
    const { target, getLinkUrl, goTo } = useLinkMixin();
    
    return (
        <>
            <div className="topbnBig mx-auto">
                {dataNodes.topbnData.map((item, index) => (
                    <React.Fragment key={index}>
                        {index === 3 && (
                            <img src={item.Img.Src} alt={item.Link.Text} className="d-lg-block d-none w-100" />
                        )}
                        {index === 4 && (
                            <img src={item.Img.Src} alt={item.Link.Text} className="d-lg-none d-block w-100" />
                        )}
                        {index >= 3 && (
                            <a href={getLinkUrl(item)} className={item.Link.Url === '#nolink' ? 'pe-none' : 'link_'+index} target={target(item)} onClick={(e) => goTo(e, item)}>
                                btn
                            </a>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}


export default TopBnBig;