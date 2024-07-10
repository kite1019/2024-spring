import { useOnSaleData } from '../../context/OnSaleProvider';
import { onsaleOnsaleFirst } from '../../assets/layout';
// CSS
import { OnSaleNoWrapper } from './style';

const OnSaleFirst = () => {
    const { onSaleNowFirst } = useOnSaleData();

    if (!onSaleNowFirst) {
        return null;
    }
    // 下滑到 限時瘋搶
    const scrollTo = () => {
        const viewOnSaleAll = document.getElementById('onsale');
        viewOnSaleAll.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <OnSaleNoWrapper>
            <button onClick={scrollTo}>
                <div className="title">
                    限時瘋搶
                </div>
                <div className="main">
                    <div className="pic">
                        <img src={onSaleNowFirst.image + '?width=320'} alt={onSaleNowFirst.name} className="d-block"/>
                    </div>
                    <div className="slogag">{onSaleNowFirst.name}</div>
                    <div className="price">
                        <small>${onSaleNowFirst.price.origin.toLocaleString()}</small> <strong><i>$</i>{onSaleNowFirst.price.onsale.toLocaleString()}</strong>
                    </div>
                </div>
                <img src={onsaleOnsaleFirst} alt="限時瘋搶" className="d-block bg"></img>
            </button>
        </OnSaleNoWrapper>
    );
};

export default OnSaleFirst;
