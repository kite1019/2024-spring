import { Row, Col } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';
import { onsaleOnsaleBtn } from '../../assets/layout';

function PDitem({ data }) {
    return (
    <OverlayScrollbarsComponent defer>
        <ul>
            {data.map((item, index) => (
                <li className='col-sm-12' key={index}>
                    <a href={'https://24h.pchome.com.tw/prod/' + item.id} target="_blank">
                        <div className="pic">
                            <img src={item.image + '?width=320'} alt={item.name} className="w-100"/>
                        </div>
                        <main>
                            <div className="slogag d-flex justify-content-md-center align-items-center">
                                { item.price.discount == '' ? (
                                    <div className="slogag__label best">
                                        <i className="srrow"></i>
                                        精選
                                    </div>
                                ):(
                                    <div className="slogag__label">
                                        <i className="srrow"></i>
                                        { item.price.discount }折
                                    </div>
                                )}
                                <div className="slogag__text">{ item.slogan }</div>
                            </div>
                            <div className="name">{ item.name }</div>
                            <div className="price d-flex justify-content-between align-items-baseline">
                                <div className="price__origin">${ item.price.origin.toLocaleString() }</div>
                                <div className="price__onsale">
                                    <small>$</small>
                                    <strong>{ item.price.onsale.toLocaleString() }</strong>
                                    {item.price.unit && <small className="unit">/{item.price.unit}</small>}
                                </div>
                            </div>
                            <div className="goToBuy">
                                <img src={onsaleOnsaleBtn} alt="馬上搶" className="d-block" />
                            </div>
                        </main>
                    </a>
                </li>
            ))}
        </ul>

    </OverlayScrollbarsComponent>
    );
}
export default PDitem;