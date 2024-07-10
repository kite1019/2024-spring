
import { useEffect, useState } from 'react';
import fetchJsonp from 'fetch-jsonp'; 
//載入資料區塊設定
import processDataNodes from '../../utils/DataProcessor';
import blockID from '../../utils/useBlockID'

const useActSmallData = () => {
    const [actSmallData, setactSmallData] = useState([]);
    const dataNodes = processDataNodes(blockID, window.IndexBlock);
    const lalaSmallData = dataNodes["couponSmallData"];

    const fetchData = async () => {
        const couponList = lalaSmallData.map(item => item.Link.Text1).join(','); 
        const jsonpURL = `https://ecapi.pchome.com.tw/marketing/coupon/v2/activity?id=${couponList}&_callback=jsonpcb_Coupon`;

        try {
            const response = await fetchJsonp(
                jsonpURL,
                {jsonpCallbackFunction: 'jsonpcb_Coupon'}
            );
            const data = await response.json();
            setactSmallData(data);
        } catch (error) {
            console.log(`活動資訊解析失敗: ${error}`);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 300);
    }, []);
    return actSmallData;
};

export default useActSmallData;