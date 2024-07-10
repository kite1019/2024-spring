import React from 'react';
import { useDataNodes } from '../../context/DataNodesProvider';
import useLinkMixin from '../../mixin/useLinkMixin';

const TopBn = () => {
    const dataNodes = useDataNodes();
    if (!dataNodes.topbnData) {
        return null;
    }
    const { target, getLinkUrl, goTo } = useLinkMixin();
    
    return (
        <>
            <ul className="row justify-content-center align-items-end">
                {dataNodes.topbnData.map((item, index) => (
                    <React.Fragment key={index}>
                        {index <= 2 && (
                            <li className="col-4" key={index}>
                                <a href={getLinkUrl(item)} className={item.Link.Url === '#nolink' ? 'pe-none' : ''} target={target(item)} onClick={(e) => goTo(e, item)}>
                                    <img key={item.Id} src={item.Img.Src} alt="" className="w-100"/>
                                </a>
                            </li>
                        )}
                    </React.Fragment>
                ))}
            </ul>
            
        </>
    );
}

export default TopBn;