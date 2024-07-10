
import { useEffect, useState } from 'react';
import fetchJsonp from 'fetch-jsonp'; 
//載入資料區塊設定
import processDataNodes from '../../utils/DataProcessor';
import blockID from '../../utils/useBlockID'

const useActBigData = () => {
    const [actBigData, setactBigData] = useState([]);
    const dataNodes = processDataNodes(blockID, window.IndexBlock);
    const lalaBigData = dataNodes["couponBigData"];

    const fetchData = async () => {
        const couponList = lalaBigData.map(item => item.Link.Text1).join(','); 
        const jsonpURL = `https://ecapi.pchome.com.tw/marketing/coupon/v2/activity?id=${couponList}&_callback=jsonpcb_Coupon`;

        try {
            const response = await fetchJsonp(
                jsonpURL,
                {jsonpCallbackFunction: 'jsonpcb_Coupon'}
            );
            const data = await response.json();
            setactBigData(data);
        } catch (error) {
            console.log(`活動資訊解析失敗: ${error}`);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 150);
    }, []);
    return actBigData;
};

export default useActBigData;