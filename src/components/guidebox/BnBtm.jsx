import { useDataNodes } from '../../context/DataNodesProvider';
import useLinkMixin from '../../mixin/useLinkMixin';

const BnBtm = () => {
    const dataNodes = useDataNodes();
    if (!dataNodes.bn5Data_2) {
        return null;
    }
    const { target, getLinkUrl, goTo } = useLinkMixin();
    
    return (
        <>
            <ul className="row mt-3 BnBtm">
                {dataNodes.bn5Data_2.map((item, index) => (
                    <li className="col-6" key={index}>
                        <a href={getLinkUrl(item)} className={item.Link.Url === '#nolink' ? 'pe-none' : 'hover-light'} target={target(item)} onClick={(e) => goTo(e, item)}>
                            <img key={item.Id} src={item.Img.Src} alt="" className="w-100"/>
                        </a>
                    </li>
                ))}
            </ul>
            
        </>
    );
}

export default BnBtm;