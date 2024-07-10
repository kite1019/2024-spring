import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// 隨機取出 products 資料
function getRandomProducts(products, count) {
    const productsRandom = JSON.parse(JSON.stringify(products));
    for (let i = productsRandom.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [productsRandom[i], productsRandom[j]] = [productsRandom[j], productsRandom[i]];
    }
    return productsRandom.slice(0, count);
}

const OnSaleContext = createContext();

export const OnSaleProvider = ({ children }) => {
    const [onSaleNowAll, setOnSaleNowAll] = useState([]);
    const [onSaleNowFirst, setOnSaleNowFirst] = useState(null);
    const [onSale_0, setOnSale_0] = useState(null);
    const [onSale_1, setOnSale_1] = useState(null);
    const [onSale_2, setOnSale_2] = useState(null);
    const [onSale_3, setOnSale_3] = useState(null);
    const [onSale_4, setOnSale_4] = useState(null);
    const [randomPD_1, setRandomPD_1] = useState([]);
    const [randomPD_2, setRandomPD_2] = useState([]);
    const [randomPD_3, setRandomPD_3] = useState([]);
    const [randomPD_4, setRandomPD_4] = useState([]);

    const nowUrl = window.location.href;
    const serchWord = nowUrl.indexOf('24h.pchome');
    const dataURL = serchWord < 0 
        ? './js/onsale.json' // 本機端
        : 'https://ecapi-cdn.pchome.com.tw/fsapi/cms/onsale'; // 雲端

    useEffect(() => {
        axios.get(dataURL)
        .then(response => {
            const data = response.data.data;
            const randomProducts = getRandomProducts(data[0].products, 10);
            setOnSaleNowAll(randomProducts);
            setOnSaleNowFirst(randomProducts[0]);
            setOnSale_0(data[0]);
            setOnSale_1(data[1]);
            setOnSale_2(data[2]);
            setOnSale_3(data[3]);
            setOnSale_4(data[4]);
            setRandomPD_1(getRandomProducts(data[1].products, 10));
            setRandomPD_2(getRandomProducts(data[2].products, 10));
            setRandomPD_3(getRandomProducts(data[3].products, 10));
            setRandomPD_4(getRandomProducts(data[4].products, 10));
        })
        .catch(error => {
            console.error('API 請求失敗:', error);
        });
    }, []);

    return (
        <OnSaleContext.Provider value={{ 
            onSaleNowAll, onSaleNowFirst, 
            onSale_0, onSale_1, onSale_2, onSale_3, onSale_4, 
            randomPD_1, randomPD_2, randomPD_3, randomPD_4 
        }}>
            {children}
        </OnSaleContext.Provider>
    );
};

export const useOnSaleData = () => useContext(OnSaleContext);
