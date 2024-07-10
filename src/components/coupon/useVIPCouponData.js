import { useEffect, useState } from 'react';
import fetchJsonp from 'fetch-jsonp'; 
import { useLoginID } from '../../context/LoginProvider';

const useVIPCouponData = () => {
    // 登入
    const [vipNotCollected, setVipNotCollected] = useState(null);
    const loginID = useLoginID();

    useEffect(() => {
        const fetchData = async () => {
            
            console.log('***** ',loginID);
    
            if (loginID != null) {
                const nowUrl = window.location.href;
                const serchWord = nowUrl.indexOf('pchome');
                const timeNum = Date.now();
                let checkMemCouponURL = '';
                (serchWord < 0) 
                    ? checkMemCouponURL = `./js/CouponNotCollected.json?_callback=jsonpcb_CouponNotCollectedd&${timeNum}&memberid=`+ loginID//本機端
                    : checkMemCouponURL = `https://ecapi.pchome.com.tw/marketing/coupon/v2/activity/coupon?q=notcollected&_callback=jsonpcb_CouponNotCollected&${timeNum}&memberid=`+ loginID;
    
                try {
                    const response = await fetchJsonp(checkMemCouponURL, {
                        jsonpCallbackFunction: 'jsonpcb_CouponNotCollected',
                        timeout: 1500 // 延遲
                    });
                    const data = await response.json();
                    setVipNotCollected(data); // 將資料儲存至狀態
                } catch (error) {
                    console.log(`活動資訊解析失敗: ${error}`);
                }
                console.log('----------- ',checkMemCouponURL);
            }
        };
        fetchData();
    },  [loginID] );
    
    return vipNotCollected;
};

export default useVIPCouponData;
