import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postCoupon } from './postCoupon';
import { ModalContent } from './style';
import { couponCouponAccept, couponCouponWarning } from '../../assets/layout';

const GetAllCoupon = ({ loginID, rurl }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleGetAllCoupons = async () => {
        const buttons = document.querySelectorAll('.coupon-button');
        let couponIds = [];

        buttons.forEach(button => {
            const couponId = button.getAttribute('data-couponid');
            if (couponId) {
                couponIds.push(couponId);
            }
        });

        const couponIdStr = couponIds.join(',');
        const encodedStr = encodeURIComponent(rurl);
        console.log('/////// ',couponIdStr);
        if (couponIdStr) {
            try {
                const data = await postCoupon(couponIdStr);
                setModalMessage(
                    <ModalContent>
                        <object data={couponCouponAccept}></object>
                        <p>折價券領取成功</p>
                    </ModalContent>
                );
                buttons.forEach(button => {
                    button.classList.add('pe-none');
                    button.disabled = true;
                    button.removeAttribute('data-couponid');
                    button.querySelector('#btnText').innerText = '已領取';
                });
            } catch (error) {
                setModalMessage(
                    <ModalContent>
                        <object data={couponCouponWarning}></object> 
                        <p><a className="warning" href={`https://ecvip.pchome.com.tw/login/v3/login.htm?rurl=${encodedStr}`}>無法領取，請先登入會員</a></p>
                    </ModalContent>
                );
            } finally {
                setShowModal(true);
            }
        } else {
            buttons.forEach(button => {
                button.classList.add('pe-none');
                button.disabled = true;
                button.removeAttribute('data-couponid');
                button.querySelector('#btnText').innerText = '已領取';
            });
            setModalMessage(
                <ModalContent>
                    <object data={couponCouponAccept}></object> 
                    <p>折價券已歸戶</p>
                </ModalContent>
            );
            setShowModal(true);
        }
    };

    const handleClose = () => setShowModal(false);

    return (
        <>
            <div className="w-100 mt-5">
                <button className='getAllCoupon' onClick={handleGetAllCoupons}>一鍵領取</button>
            </div>

            <Modal show={showModal} onHide={handleClose} centered backdrop="static" className='takeCoupon'>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        關閉
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default GetAllCoupon;
