import { useDataNodes } from '../../context/DataNodesProvider';
import useLinkMixin from '../../mixin/useLinkMixin';
import { BnWrapper } from './style';

const DiscountBn = () => {
    const dataNodes = useDataNodes();
    if (!dataNodes.preData) {
        return null;
    }
    const { target, getLinkUrl, goTo } = useLinkMixin();
    
    return (
        <>
        {dataNodes.preData.length > 0 && (
            <BnWrapper className="container w-1080">
                <div className="h6 text-center">
                    <span style={{fontSize:'3rem'}}>加碼必看</span>
                </div>
                <ul className="row">
                    {dataNodes.preData.map((item, index) => (
                        <li className={item.Link.Text} key={index}>
                            <a href={getLinkUrl(item)} className={item.Link.Url === '#nolink' ? 'pe-none' : 'hover-light'} target={target(item)} onClick={(e) => goTo(e, item)}>
                                <img key={item.Id} src={item.Img.Src} alt="" className="d-block"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </BnWrapper>
        )}
        </>
    );
}

export default DiscountBn;