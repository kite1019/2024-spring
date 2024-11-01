import { createApp } from 'vue';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './index.vue';


// 預處理 JSONP 數據
// ---------------------------------
// (1) 接campaign data jsonp
// 活動編號
const dataNum = 'C612112487';   
// ---------------------------------

const url = window.location.href;
const searchTerm = 'inside';
let dataURL = '';
(url.includes(searchTerm)) ? inside() : online();

// 內網
function inside() {
    // console.log(searchTerm);
    const urlParams = new URLSearchParams(window.location.search);
    // 當時的年月日時分秒
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 取得 inside 的值
    let insideValue = urlParams.get('inside');
    console.log(insideValue); 
    // 如果inside空值，則取當時的年月日時分秒 取代
    (insideValue.length <= 0 ) && ( insideValue = `${year}${month}${day}${hours}${minutes}${seconds}`,  console.log('insideValue 2',insideValue));
    dataURL = `https://ecman.global.mypchome.com.tw/eip/activity/campaign/v2/layout/${dataNum}.htm/data?time=${insideValue}`;
}

// 外網
function online() {
    const nowUrl = window.location.href;
    const serchWord = nowUrl.indexOf('pchome');
    // 檢查網址址是否有包含'pchome'，沒有=本機，有=雲端
    (serchWord < 0) 
        ? dataURL = 'js/IndexBlock-0321.json' //本機端
        // : dataURL = 'js/IndexBlock-0321.json' //雲端
        // ? dataURL = 'https://shopping.pchome.com.tw/cdn/activity/campaign/' + dataNum + '/data?v' + Date.now()
        : dataURL = 'https://shopping.pchome.com.tw/cdn/activity/campaign/' + dataNum + '/data?v' + Date.now(); 
}

// 創建script
const dataScript = document.createElement('script');
dataScript.type = 'text/javascript';
dataScript.src = dataURL;
document.getElementsByTagName('head')[0].appendChild(dataScript);


window.onload = function() {
    setTimeout(() => {
        let app = createApp(App);
        app.mount('#app');
    }, 100);
}

