const CouponButton = ({ item, amtInfo, isUseFinish, isVipCoupon, loginID, handleButtonClick }) => {
    return (
        <button 
            className={`coupon-button main ${isUseFinish ? 'pe-none' : ''}`} 
            onClick={(e) => !isUseFinish && handleButtonClick(item, e)}
            data-couponid={isVipCoupon && !isUseFinish ? item.CouponId : undefined}
            disabled={isUseFinish}
        >
            <p>{item.Id}</p>
            <p>【{item.Link.Text3}】{item.Link.Text}</p>
            {amtInfo.type === 'Amount' && (
                <div> 現抵<small>$</small>{amtInfo.SendAmt} </div>
            )}
            {amtInfo.type === 'Discount' && (
                <div>
                    <strong style={{ marginRight: '4px' }}>{amtInfo.amtText}</strong>
                    <small>折</small>
                </div>
            )}
            <div className="date">
                <span>{ item.UseStartDate } ~ { item.UseEndDate }</span>
            </div>
            <div id='btnText'>
                {isUseFinish ? '活動結束' : (loginID ? '立即領取' : '登入領取')}
            </div>
        </button>
    );
};

export default CouponButton;
