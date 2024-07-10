import React from 'react';
import { useDataNodes } from '../../context/DataNodesProvider';
import useLinkMixin from '../../mixin/useLinkMixin';
import { SbdWrapper } from './style';

const SbdPd = () => {
    const dataNodes = useDataNodes();
    if (!dataNodes.sbdPdData) {
        return null;
    }
    const { target, getLinkUrl, goTo } = useLinkMixin();
    
    return (
        <>
        {dataNodes.sbdPdData.length > 0 && (
            <SbdWrapper className="container w-1180">
                <div className="bigBox">
                    {dataNodes.sbdPdData.map((item, index) => (
                        <React.Fragment key={index}>
                            {index === 0 && (
                                <div className="d-lg-block d-none big" key={index}>
                                    <a href={getLinkUrl(item)} className={item.Link.Url === '#nolink' ? 'pe-none' : ''} target={target(item)} onClick={(e) => goTo(e, item)}>
                                        <img key={item.Id} src={item.Img.Src} alt={item.Img.Text}/>
                                    </a>
                                </div>
                            )}
                            {index === 1 && (
                                <div className="col-12 d-lg-none d-block big" key={index}>
                                    <a href={getLinkUrl(item)} className={item.Link.Url === '#nolink' ? 'pe-none' : ''} target={target(item)} onClick={(e) => goTo(e, item)}>
                                        <img key={item.Id} src={item.Img.Src} alt={item.Img.Text}/>
                                    </a>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <ul className="d-grid justify-content-center align-items-center">
                {dataNodes.sbdPdData.map((item, index) => (
                    <React.Fragment key={index}>
                        {index >= 2 && (
                            <li className="pd-box" key={index}>
                                <a href={getLinkUrl(item)} className={item.Link.Url === '#nolink' ? 'pe-none' : ''} target={target(item)} onClick={(e) => goTo(e, item)}>
                                    <div className="pic">
                                        <img src={item.Img.Src} alt={item.Link.Text} />
                                    </div>
                                    <div className="hotline">{ item.Link.Text2 }</div>
                                    <div className="pd_title">{ item.Link.Text }</div>
                                    <div className="price">
                                        <small>{ item.Link.Text3 === '' ? '' : '$' + item.Link.Text3 }</small>
                                        <strong><i>$</i>{ item.Link.Text1 }</strong>
                                    </div>
                                </a>
                            </li>
                        )}
                    </React.Fragment>
                ))}
                </ul>
            </SbdWrapper>
        )}
        </>
    );
}

export default SbdPd;