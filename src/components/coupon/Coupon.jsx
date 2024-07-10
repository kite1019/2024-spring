import { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// 載入資料
import processDataNodes from '../../utils/DataProcessor';
import blockID from '../../utils/useBlockID'
import useActBigData from './useActBigData';
import useActSmallData from './useActSmallData';

// 登入
import { useLoginID } from '../../context/LoginProvider';
// 用memberID 查還未領過 點領型 的折價券
import useVIPCouponData from './useVIPCouponData';
import { postCoupon } from './postCoupon';

// 內容子元件
import CouponButton from './CouponButton';
import GetAllCoupon from './GetAllCoupon';

// CSS
import { BigCouponWrapper, ModalContent } from './style';
import { couponCouponAccept, couponCouponWarning } from '../../assets/layout';


const Coupon = () => {
    // 登入
    const loginID = useLoginID();
    
    // 接資料
    const vipNotCollected = useVIPCouponData();
    const dataNodes = processDataNodes(blockID, window.IndexBlock);
    const lalaBigData = dataNodes["couponBigData"];
    const lalaSmallData = dataNodes["couponSmallData"];

    const actBigData = useActBigData();
    const actSmallData = useActSmallData();

    // 處理折價券
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [selectedCoupon, setSelectedCoupon] = useState(null);

    // 處理折扣或折金額
    function getAmt(item) {
        const SendAmt = item.SendAmt;
        const SendAmtMode = item.SendAmtMode;
        if (SendAmtMode === 'Discount') {
            const amtRes = (1 - SendAmt) * 100;
            const amtText = amtRes % 10 === 0 ? (amtRes / 10).toString() : amtRes.toString();
            return { type: 'Discount', amtText };
        }
        return { type: 'Amount', SendAmt };
    }

    // 判斷登錄狀態後處理領取方式
    const handleButtonClick = async (item, e) => {
        const rurl = window.location.href;
        const encodedStr = encodeURIComponent(rurl);
        if (!loginID) {
            const loginUrl = `https://ecvip.pchome.com.tw/login/v3/login.htm?rurl=${encodedStr}`;
            window.location.href = loginUrl;
        } else {
            e.preventDefault();
            const couponId = e.currentTarget.getAttribute('data-couponid');
            if (couponId) {
                try {
                    await postCoupon(item.CouponId);
                    setModalMessage(
                        <ModalContent>
                            <object data={couponCouponAccept}></object> 
                            <p>折價券領取成功</p>
                        </ModalContent>
                    );
                    updateButtonStatus(item.Id);
                } catch (error) {
                    setModalMessage(
                        <ModalContent>
                            <object data={couponCouponWarning}></object> 
                            <p><a className="warning" href={`https://ecvip.pchome.com.tw/login/v3/login.htm?rurl=${encodedStr}`}>無法領取，請先登入會員</a></p>
                        </ModalContent>
                    );
                }
            } else {
                setModalMessage(
                    <ModalContent>
                        <object data={couponCouponAccept}></object> 
                        <p>折價券已歸戶</p>
                    </ModalContent>
                );
                updateButtonStatus(item.Id);
            }
            setShowModal(true);
            setSelectedCoupon(item);
        }
    };

    //領取後更新狀態
    const updateButtonStatus = (itemId) => {
        const button = document.getElementById(itemId).querySelector('button');
        button.classList.add('pe-none');
        button.disabled = true;
        button.removeAttribute('data-couponid');
        button.querySelector('#btnText').innerText = '已領取';
    };

    //modal設定
    const handleClose = () => setShowModal(false);
    
    return (
        <BigCouponWrapper>
            <p className='text-center mb-5'>Login ID: {loginID}</p>
            {lalaBigData && lalaBigData.length > 0 && (
                <Row className='row couponBox'>
                    {actBigData.map((item, index) => {
                        const amtInfo = getAmt(item);
                        const isVipCoupon = vipNotCollected && vipNotCollected.some(vipItem => vipItem.CouponId === item.CouponId);
                        const isUseFinish = item.Status === 'UseFinish';
                        const bigDataItem = lalaBigData[index];
                        return (
                            <Col lg={6} sm={12} key={index} className='mb-2' id={item.Id}>
                                <CouponButton 
                                    item={{...item, Link: bigDataItem.Link}}
                                    amtInfo={amtInfo}
                                    isUseFinish={isUseFinish}
                                    isVipCoupon={isVipCoupon}
                                    loginID={loginID}
                                    handleButtonClick={handleButtonClick}
                                />
                            </Col>
                        );
                    })}
                </Row>
            )}
            <h2>Small Coupons</h2>
            {lalaSmallData && lalaSmallData.length > 0 && (
                <Swiper
                    spaceBetween={10}
                    modules={[Autoplay, Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                    breakpoints={{
                        '320': { slidesPerView: 1.5, },
                        '768': { slidesPerView: 2.5,},
                        '1024': { slidesPerView: 3, },
                        '1025': { slidesPerView: 3, },
                    }}
                >
                    {actSmallData.map((item, index) => {
                        const amtInfo = getAmt(item);
                        const isVipCoupon = vipNotCollected && vipNotCollected.some(vipItem => vipItem.CouponId === item.CouponId);
                        const isUseFinish = item.Status === 'UseFinish';
                        const SmallDataItem = lalaSmallData[index];
                        return (
                            <SwiperSlide key={index} className='mb-2' id={item.Id}>
                                <CouponButton 
                                    item={{...item, Link: SmallDataItem.Link}}
                                    amtInfo={amtInfo}
                                    isUseFinish={isUseFinish}
                                    isVipCoupon={isVipCoupon}
                                    loginID={loginID}
                                    handleButtonClick={handleButtonClick}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            )}
            
            <div className="w-100 mt-5">
                <GetAllCoupon loginID={loginID} rurl={window.location.href} />
            </div>

            <Modal show={showModal} onHide={handleClose} centered backdrop="static" className='takeCoupon'>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        關閉
                    </Button>
                </Modal.Footer>
            </Modal>
        </BigCouponWrapper>
    );
}

export default Coupon;
