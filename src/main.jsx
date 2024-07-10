import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/js/dist/scrollspy.js';
import "./scss/layout.scss"

// 預處理 JSONP 數據
// ---------------------------------
// 接campaign data jsonp
// 活動編號
const dataNum = 'C612112487';   
// --------------------------------- 
const url = window.location.href;
const searchTerm = 'inside';
let dataURL = '';
// var IndexBlock;

// 判斷是否在內網或外網
(url.includes(searchTerm)) ? inside() : online();

// 內網
function inside() {
    const urlParams = new URLSearchParams(window.location.search);
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    let insideValue = urlParams.get('inside');
    console.log(insideValue); 
    if (insideValue === null || insideValue === undefined || insideValue === '') {
        insideValue = `${year}${month}${day}${hours}${minutes}${seconds}`;
        console.log('insideValue 2', insideValue);
    }
    dataURL = `https://ecman.global.mypchome.com.tw/eip/activity/campaign/v2/layout/${dataNum}.htm/data?time=${insideValue}`;
}

// 外網
function online() {
    const nowUrl = window.location.href;
    const searchWord = nowUrl.indexOf('pchome');
    dataURL = (searchWord < 0) 
    ? 'js/IndexBlock5.json' // 本機端
    : 'js/IndexBlock5.json' //雲端
    // ? `https://shopping.pchome.com.tw/cdn/activity/campaign/${dataNum}/data?v=${Date.now()}`
    // : `https://shopping.pchome.com.tw/cdn/activity/campaign/${dataNum}/data?v=${Date.now()}`;
}

// 創建 script
const dataScript = document.createElement('script');
dataScript.type = 'text/javascript';
dataScript.src = dataURL;
document.getElementsByTagName('head')[0].appendChild(dataScript);


dataScript.onload = function() {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    )
}

