<template>
    <h1 className="p-no text-transparent">
        春季狂購節：PChome 24h 14大分會場感恩回饋！購物指定支付享高額回饋！春日換新、冬季折扣全面下殺！全場折扣限時開跑！「天天驚爆券」、「天天狂降爆品」，與「天天簽到送P幣」通通送給您！
    </h1>
    <HeaderTop />
    <RightMenu :otherData="otherData" :bankWeb="bankWeb" :bankApp="bankApp" :discount="discount"
        :saleAuction="saleAuction" :supersale="supersale" :sbdpreview="sbdpreview" :sbdbody="sbdbody" :tabs_1="tabs_1"
        :tabs_2="tabs_2" :newList="newList" :focus_1="focus_1" :focus_2="focus_2" :coupon="coupon" :travel="travel"
        :cate="cate" />
    <LeftMenu />
    <div class="wrap">
        <div class="kvBg absolute pe-none">
            <img src="@/assets/new/kv_bg-web.png" alt="kv bg" class="d-lg-block d-none w-100">
            <img src="@/assets/new/kv_bg-app.png" alt="kv bg" class="d-lg-none d-block">
            <div class="deco__01 pe-none absolute">
                <img src="@/assets/new/kv_deco-01.png" alt="kv deco" class="d-block">
            </div>
            <div class="deco__02 pe-none absolute">
                <img src="@/assets/new/kv_deco-02.png" alt="kv deco" class="d-block">
            </div>
        </div>
        <div class="eventGuide absolute" data-bs-toggle="modal" data-bs-target="#calendar" @click="gaPush">
            <img src="@/assets/new/event_guide.png" alt="攻略" class="w-100 d-lg-block d-none">
            <img src="@/assets/new/event_guide-app.png" alt="攻略" class="w-100 d-lg-none d-block">
        </div>
        <div class="kvTitle">
            <img src="@/assets/new/kvTitle_01-web.png" alt="春季狂購節" class="kt--1 d-lg-block d-none w-100">
            <img src="@/assets/new/kvTitle_01-app.png" alt="春季狂購節" class="kt--1 d-lg-none d-block w-100">
            <span class="kvImg kt--2">
                <img src="@/assets/new/kvTitle_02-web.png" alt="春季狂購節" class="d-lg-block d-none w-100">
                <img src="@/assets/new/kvTitle_02-app.png" alt="春季狂購節" class="d-lg-none d-block w-100">
            </span>
            <template v-for="(item, index) in otherData" :key="item.uniqueIdentifier">
                <img v-if="index === 1" :src="item.Img.Src" alt="春季狂購節" class="kvImg kt--3 d-lg-block d-none w-100">
                <img v-if="index === 2" :src="item.Img.Src" alt="春季狂購節" class="kvImg kt--3 d-lg-none d-block w-100">
            </template>
        </div>

        <!-- 2大塊bn -->
        <ul class="row justify-content-center align-items-end" id="topbn" v-if="topBn != ''">
            <template v-for="(item, index) in topBn" :key="index">
                <li class="bn" v-if="index <= 1" :key="index">
                    <linkImg :item="item" />
                </li>
            </template>
            <li class="bank">
                <template v-for="(item, index) in topBn" :key="index">
                    <a v-if="index >= 2" :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''"
                        :target="target(item)" @click="goTo($event, item)"></a>
                </template>
                <template v-for="(item, index) in topBn" :key="index">
                    <img v-if="index === 2" :src="item.Img.Src" :alt="item.Link.Text" class="d-block">
                </template>
            </li>
        </ul>
        <!-- END // 2大塊bn -->

        <!-- 活動BN們 -->
        <section id="allBnBox">
            <div class="container">
                <div class="gridBox">
                    <div class="gridBox--left">
                        <onSaleNowFirst v-if="onSaleNowFirst" :item="onSaleNowFirst" id="dailysale_ad" />
                        <ul class="bnEventBig" v-if="bnEvent_1">
                            <template v-for="(item, index) in bnEvent_1">
                                <li class="col-12" v-if="index < 3" :key="index" :id="'event_ad_' + (index + 1)">
                                    <linkImg :item="item" />
                                </li>
                            </template>
                        </ul>
                    </div>
                    <div class="gridBox--right">
                        <div class="d-flex heroBn" id="sbd_today" v-if="bnHero != ''">
                            <swiper :modules="modules" :loop="true" :slides-per-view="1" :space-between="15"
                                :speed="1000" :pagination="{ clickable: true }" :autoplay="{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }" style="overflow: hidden;">
                                <swiper-slide v-for="item in bnHero" :key="item.uniqueIdentifier">
                                    <slideBn :item="item" />
                                </swiper-slide>
                            </swiper>
                        </div>
                        <ul class="row m-lg-0 bnEvent_2" v-if="bnEvent_2">
                            <template v-for="(item, index) in bnEvent_2" :key="index">
                                <li class="col-6" :id="'event_ad_' + (index + 4)">
                                    <linkImg :item="item" />
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>
                <ul class="row" id="couponreview">
                    <template v-for="(item, index) in rebate" :key="index">
                        <li class="col-lg-6 col-12">
                            <linkImg :item="item" />
                        </li>
                    </template>
                </ul>
            </div>
        </section>
        <!-- END // 活動BN們 -->

        <!-- 銀行 -->
        <section id="bank" v-if="bankWeb != '' && bankApp != ''">
            <div class="bankBox d-lg-block d-none" v-if="bankWeb">
                <div class="deco pe-none absolute">
                    <img src="@/assets/new/bank_deco.png" alt="bank deco" class="d-block">
                </div>
                <bankSlide :data="bankWeb" :item="bankWeb" />
            </div>
            <div class="bankBox d-lg-none d-block" v-if="bankApp">
                <bankSlide :data="bankApp" :item="bankApp" />
            </div>
        </section>
        <!-- END // 銀行 -->

        <!-- 加碼必看 -->
        <section id="discount" v-if="discount != ''">
            <div class="h6">
                <img src="@/assets/new/sect_title_1.png" alt="加碼必看" class="d-block">
            </div>
            <div class="container">
                <ul class="row">
                    <template v-for="(item, index) in discount" :key="index">
                        <discountAD :item="item" />
                    </template>
                </ul>
            </div>
            <hr class="btm black absolute">
        </section>
        <!-- END // 加碼必看 -->

        <!-- 爆品 -->
        <section id="sale_auction" v-if="saleAuction != ''">
            <div class="h6">
                <img src="@/assets/new/sect_title_2.png" alt="爆品競標" class="d-block">
            </div>
            <div class="container">
                <ul class="row">
                    <superPD v-for="(item, index) in saleAuction" :item="item" :key="index" :index="index" />
                </ul>
                <div class="bg__deco absolute pe-none d-lg-block d-none">
                    <img src="@/assets/new/sale_auction_bg_deco.png" alt="deco" class="d-block">
                </div>
            </div>
            <hr class="btm white absolute">
        </section>
        <!-- END // 爆品 -->

        <!-- 黃底主題 -->
        <div class="yellowTheme">

            <!-- 挑戰新低價 -->
            <section id="supersale" class="yellowBg" v-if="supersale != ''">
                <div class="container ">
                    <div class="h6"><img src="@/assets/new/sect_title_3.png" alt="挑戰新低價" class="d-block"></div>
                    <ul class="row promo">
                        <template v-for="(item, index) in supersale" :key="index">
                            <bodyPD :item="item" />
                        </template>
                    </ul>
                </div>
            </section>
            <!-- END // 挑戰新低價 -->

            <!-- 大牌新品 -->
            <section id="new_list" v-if="newList != ''">
                <div class="h6"><img src="@/assets/new/sect_title_4.png" alt="大牌新品" class="d-block"></div>
                <div class="container">
                    <pdSlide :data="newList" :item="newList" />
                </div>
            </section>
            <!-- END // 大牌新品 -->

            <!-- 本日主打星 -->
            <section id="focus" class="yellowBg" v-if="focus_1 != '' && focus_2 != ''">
                <div class="h6"><img src="@/assets/new/sect_title_5.png" alt="本日主打星" class="d-block"></div>
                <div class="hand pe-none absolute"><img src="@/assets/new/focus_hand.png" alt="hand" class="d-block">
                </div>
                <div class="container large">
                    <div class="main radius">
                        <ul class="row brandPD mb-4 mb-lg-0">
                            <template v-for="(item, index) in focus_1">
                                <brandPD v-if="index < 5" :item="item" :index="index" :key="item.uniqueIdentifier" />
                            </template>
                        </ul>
                        <ul class="row brandPD mb-4 mb-lg-0">
                            <template v-for="(item, index) in focus_1">
                                <brandPD v-if="index > 4 && index < 10" :item="item" :index="index"
                                    :key="item.uniqueIdentifier" />
                            </template>
                        </ul>
                    </div>
                    <div class="w-100">
                        <ul class="row brandPDPower" id="powerbrand_02" v-if="focus_2">
                            <brandPDPower v-for="(item, index) in focus_2" :item="item" :key="index" />
                        </ul>
                    </div>
                </div>
            </section>
            <!-- END // 本日主打星 -->

            <!-- 強檔預告 -->
            <section id="sbdpreview" v-if="sbdpreview != ''">
                <div class="h6"><img src="@/assets/new/sect_title_6.png" alt="強檔預告" class="d-block"></div>
                <div class="container large">
                    <cardSlide :data="sbdpreview" />
                </div>
            </section>
            <!-- END // 強檔預告 -->

            <!-- 精選特搜 -->
            <section id="sbdbody" class="yellowBg" v-if="sbdbody != ''">
                <div class="h6">
                    <img src="@/assets/new/sect_title_7.png" alt="精選特搜" class="d-block">
                </div>
                <div class="container large">
                    <ul class="row align-items-end sbdbody">
                        <template v-for="(item, index) in sbdbody">
                            <sbdbodyPD v-if="index <= 5" :item="item" :index="index" :key="item.uniqueIdentifier" />
                        </template>
                    </ul>
                </div>
                <hr class="btm black absolute">
            </section>
            <!-- END // 精選特搜 -->

            <!-- 折價券 -->
            <section id="coupon" class="yellowBg" v-if="coupon != ''">
                <div class="h6"><img src="@/assets/new/sect_title_8.png" alt="折價券" class="d-block"></div>
                <div class="container large" v-if="coupon">
                    <couponNew />
                </div>
            </section>
            <!-- END // 折價券 -->

            <!-- 春日換新 -->
            <section id="spring" v-if="tabs_1 != '' && tabs_2 != ''">
                <div class="container">
                    <tabsPD :tabs_1="tabs_1" :tabs_2="tabs_2" />
                </div>
            </section>
            <!-- END // 春日換新 -->

            <!-- 出遊規劃 -->
            <section id="travel" class="yellowBg" v-if="travel != ''">
                <div class="container ">
                    <div class="h6"><img src="@/assets/new/sect_title_10.png" alt="出遊規劃" class="d-block"></div>
                    <ul class="row promo">
                        <template v-for="(item, index) in travel" :key="index">
                            <bodyPD :item="item" />
                        </template>
                    </ul>
                </div>
            </section>
            <!-- END // 出遊規劃 -->

            <!-- 冬季折扣 -->
            <section id="winter" class="yellowBg" v-if="winter != ''">
                <div class="container ">
                    <div class="h6"><img src="@/assets/new/sect_title_11.png" alt="冬季折扣" class="d-block"></div>
                    <ul class="row promo">
                        <template v-for="(item, index) in winter" :key="index">
                            <bodyPD :item="item" />
                        </template>
                    </ul>
                </div>
            </section>
            <!-- END // 冬季折扣 -->
        </div>
        <!-- END // 黃底主題 -->


        <!-- 必敗分會場 -->
        <section id="cate" v-if="cate != ''">
            <hr class="top white absolute">
            <div class="h6"><img src="@/assets/new/sect_title_12.png" alt="必敗分會場" class="d-block"></div>
            <div class="container cate">
                <guide :cate="cate" />
                <div class="bg__deco absolute pe-none d-lg-block d-none">
                    <img src="@/assets/new/sale_auction_bg_deco.png" alt="deco" class="d-block">
                </div>
            </div>
            <hr class="btm black absolute">
        </section>
        <!-- END // 必敗分會場 -->

        <!-- 限時瘋搶 -->
        <section id="dailysale" v-if="onSale != ''">
            <div class="container large">
                <div class="h6">
                    <img src="@/assets/new/sect_title_13.png" class="d-block" alt="限時瘋搶看更多">
                    <a href="https://24h.pchome.com.tw/onsale/" target="_blank" class="title absolute">
                        <img src="@/assets/new/dailysale_btn.png" class="d-block">
                    </a>
                </div>
                <onSaleAll v-if="onSale" :onSale="onSale" :onSaleNowAll="onSaleNowAll" :onSale_0="onSale_0"
                    :onSale_1="onSale_1" :onSale_2="onSale_2" :onSale_3="onSale_3" :onSale_4="onSale_4" />
            </div>
            <div class="deco pe-none absolute">
                <img src="@/assets/new/bank_deco.png" alt="bank deco" class="d-block">
            </div>
        </section>
        <!-- 限時瘋搶 -->

    </div>

    <Footer />
    <seoTxt />

    <!-- Modal -->
    <div class="modal fade" id="calendar" tabindex="-1" aria-labelledby="calendarLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">購物攻略</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <img src="@/assets/ui/cancel.svg" alt="" class="d-block">
                    </button>
                </div>
                <div class="modal-body">
                    <template v-for="(item, index) in otherData" :key="item.uniqueIdentifier">
                        <img v-if="index === 3" :src="item.Img.Src" alt="攻略" class="d-block">
                    </template>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue';
import ScrollActive from 'scroll-active';
import axios from "axios";
import { linkMixin } from './components/mixin.js';
import HeaderTop from './components/ui/Header.vue'
import Footer from './components/ui/Footer.vue'
import seoTxt from './components/body/_seoTxt.vue'
import RightMenu from './components/ui/RightMenu.vue'
import LeftMenu from './components/ui/LeftMenu.vue'
import onSaleNowFirst from './components/body/_onSaleNowFirst.vue'
import onSaleAll from './components/body/_onSaleAll.vue'
import linkImg from './components/body/_linkImg.vue'
import bankSlide from './components/body/_bankSlide.vue'
import guide from './components/body/_guide.vue'
import brandPD from './components/body/_brandPD.vue'
import brandPDPower from './components/body/_brandPDPower.vue'
import tabsPD from './components/body/_tabsPD.vue'
import slideBn from './components/body/_slideBn.vue'

import discountAD from './components/body/_discountAD.vue'
import bodyPD from './components/body/_bodyPD.vue'
import superPD from './components/body/_superPD.vue'
import sbdbodyPD from './components/body/_sbdbodyPD.vue'
import pdSlide from './components/body/_pdSlide.vue'
import cardSlide from './components/body/_cardSlide.vue'
import couponNew from './components/body/_couponNew.vue'
import 'swiper/css/bundle'
import '@/dist/css/layout.css';

// ---------------------------------
// (2) 讀取後台資料並重組資料格式
// ---------------------------------
let dataArr = {};
function toDataArr(arr) {
    arr.forEach(function (item) {
        dataArr[item.BlockId] = item;
    });
}

//計算區塊實際資料 (因IndexBlock資料中有空白陣列)
function dataNode(data, blockNumFirst) {
    for (let i = blockNumFirst; i <= (blockNumFirst + 9); i++) {
        if (dataArr[i]) {
            dataArr[i].Nodes.forEach(function (node) {
                // 檢查node.Link.Ur，如有資料再堆疊至新陣列{}
                if (node.Link.Url) {
                    data.push(node);
                }
            });
        }
    }
}
let topBn = [];
let bnEvent_1 = [];
let bnEvent_2 = [];
let bnHero = [];
let rebate = [];
let bankWeb = [];
let bankApp = [];
let discount = [];
let saleAuction = [];
let supersale = [];
let sbdpreview = [];
let sbdbody = [];
let tabs_1 = [];
let tabs_2 = [];
// let beauty_1 = [];
// let beauty_2 = [];
let newList = [];
let focus_1 = [];
let focus_2 = [];
let cate = [];
let coupon = [];
let otherData = [];
let travel = [];
let winter = [];

export default {
    name: 'App',
    mixins: [linkMixin],
    data: () => {
        return {
            // 瘋殺 from api 
            onSale: null,
            onSaleNowAll: null,
            onSaleNowFirst: null,
            onSale_0: null,
            onSale_1: null,
            onSale_2: null,
            onSale_3: null,
            onSale_4: null,
            // ---------------
            topBn: topBn,
            bnEvent_1: bnEvent_1,
            bnEvent_2: bnEvent_2,
            bnHero: bnHero,
            rebate: rebate,
            bankWeb: bankWeb,
            bankApp: bankApp,
            discount: discount,
            saleAuction: saleAuction,
            supersale: supersale,
            sbdpreview: sbdpreview,
            sbdbody: sbdbody,
            tabs_1: tabs_1,
            tabs_2: tabs_2,
            newList: newList,
            focus_1: focus_1,
            focus_2: focus_2,
            coupon: coupon,
            cate: cate,
            otherData: otherData,
            travel: travel,
            winter: winter,
        }
    },
    components: {
        HeaderTop,
        Footer,
        seoTxt,
        RightMenu,
        LeftMenu,
        Swiper,
        SwiperSlide,
        onSaleNowFirst,
        onSaleAll,
        linkImg,
        bankSlide,
        guide,
        brandPD,
        brandPDPower,
        pdSlide,
        tabsPD,
        slideBn,
        // beautyPD,
        bodyPD,
        discountAD,
        superPD,
        sbdbodyPD,
        couponNew,
        cardSlide,
    },
    setup() {
        return {
            modules: [Navigation, Pagination, Autoplay],
        };
    },
    created() {
        // 讀取後台資料並重組資料格式
        toDataArr(IndexBlock);
        setTimeout(() => {
            // console.log('OK');
            dataNode(this.topBn, 31); //2大bn
            dataNode(this.bnEvent_1, 42); //一堆bn
            dataNode(this.bnEvent_2, 53); //一堆bn
            dataNode(this.bnHero, 64); //hero bn slide
            dataNode(this.rebate, 220); //折價券bn
            dataNode(this.bankWeb, 231); //銀行
            dataNode(this.bankApp, 242); //銀行
            dataNode(this.discount, 88); // 加碼必看
            dataNode(this.saleAuction, 99); //爆品
            dataNode(this.supersale, 110); //挑戰新低價
            dataNode(this.newList, 121); //大牌新品
            dataNode(this.focus_1, 289); // 本日主打星1
            dataNode(this.focus_2, 300); // 本日主打星2
            dataNode(this.sbdpreview, 311); // 強檔預告
            dataNode(this.sbdbody, 673); //精選特搜
            dataNode(this.coupon, 684); //折價券 684，695
            dataNode(this.tabs_1, 706); //春日換新1
            dataNode(this.tabs_2, 717); //春日換新2
            dataNode(this.travel, 728); //出遊規劃
            dataNode(this.winter, 739); //冬季折扣
            dataNode(this.cate, 750); //分會場
            // ------------------
            dataNode(this.otherData, 761); //其他資料 右貼，小標換檔


            // ------------------------------------
            // 取得瘋殺資料, 本機端&雲端
            // 因瘋殺api綁網址，必須雲端才可取得
            // 所以本機端可先用舊資料預覽排版
            // 本地端判斷設定 localset.js
            // ------------------------------------
            const nowUrl = window.location.href;
            const serchWord = nowUrl.indexOf('pchome');
            let dataURL = '';
            // 檢查網址址是否有包含'pchome'，沒有=本機，有=雲端
            (serchWord < 0)
                ? dataURL = 'js/onsale.json' //本機端
                // : dataURL = 'js/onsale.json'; //雲端
                : dataURL = `https://ecapi-cdn.pchome.com.tw/fsapi/cms/onsale`;  //雲端

            axios.get(dataURL)
                .then(response => {
                    // 成功取得資料
                    // console.log('response: ', response.data.data);
                    this.onSale = response.data.data;
                    this.onSaleNowAll = this.getRandomProducts(this.onSale[0].products, 6);
                    this.onSaleNowFirst = this.onSaleNowAll[0];
                    this.onSale_0 = response.data.data[0];
                    this.onSale_1 = response.data.data[1];
                    this.onSale_2 = response.data.data[2];
                    this.onSale_3 = response.data.data[3];
                    this.onSale_4 = response.data.data[4];

                    // ------------
                    // console.log('onSale: ', this.onSale);
                    // console.log('onSaleNowAll: ', this.onSaleNowAll );
                    // console.log('onSaleNowFirst: ', this.onSaleNowFirst);
                    // console.log('otherData: ', this.otherData);
                })
                .catch(error => {
                    // 處理錯誤
                    console.error('API 請求失敗:', error);
                });

        }, 110);
    },
    methods: {
        getRandomProducts(products, count) {
            const productsRandom = JSON.parse(JSON.stringify(products));
            for (let i = productsRandom.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [productsRandom[i], productsRandom[j]] = [productsRandom[j], productsRandom[i]];
            }
            // 從洗牌後的數組中取出指定數量的元素
            return productsRandom.slice(0, count);
        },
        indexRenderEven(index) {
            // even偶數，index % 2 === 0
            return index % 2 === 0; // Change to index % 2 === 1 for odd numbers
        },
        indexRenderOdd(index) {
            // odd奇数，index % 2 === 1
            return index % 2 === 1; // Change to index % 2 === 1 for odd numbers
        },
        gaPush() {
            // 處理 click 事件
            let device;
            (window.innerWidth > 992) ? device = 'ga-web' : device = 'ga-app';
            console.log(device);

            let dataLayer = window.dataLayer || [];
            const nowUrl = window.location.href;
            const serchWord = nowUrl.indexOf('pchome');
            // 檢查網址址是否有包含'pchome'，沒有=本機，有=雲端
            if (serchWord > 0) {
                if (typeof dataLayer !== 'undefined') {
                    console.log('pchome ga OK ');
                    window.dataLayer.push({
                        'event': 'popup-ga',
                        'eventCategory': '活動攻略',
                        'eventAction': '活動攻略-' + device,
                        'eventLabel': '活動攻略-' + device,
                    });
                    console.table({
                        'event': 'popup-ga',
                        'eventCategory': '活動攻略',
                        'eventAction': '活動攻略-' + device,
                        'eventLabel': '活動攻略-' + device,
                    });
                }
            } else {
                console.log('pchome ga no ');
            }
        },
        initScrollActive() {
            const windowWidth = window.innerWidth;
            let scrollOffset = 0;
            (windowWidth <= 991) && (scrollOffset = 40);
            this.sa.dispose();
            this.sa = new ScrollActive({
                activeClass: 'active',
                offset: scrollOffset,
                inViewport: true,
                hash: false, //網址列不顯示hash
                update() {
                    this.navbar = document.getElementById('navbar');
                    setTimeout(() => {
                        const activeLi = this.navbar.querySelector('li.active');
                        if (activeLi) {
                            const menuMove = document.querySelector(".right__menu");
                            menuMove.scrollLeft = activeLi.offsetLeft - windowWidth / 2;
                        }
                    }, 100);
                }
            });
        }
    },
    mounted() {
        // 在元素渲染完成後執行
        this.$nextTick(() => {
            initSetting();
            // KV ani
            const kvAni = document.querySelector('.kvTitle');
            const arrow_1 = document.querySelector('.kvBg .deco__01')
            const arrow_2 = document.querySelector('.kvBg .deco__02')
            const guide = document.querySelector('.eventGuide');
            const windowWidth = window.innerWidth;
            if (windowWidth >= 991) {
                setTimeout(() => {
                    kvAni.classList.add('ani');
                }, 600);
                setTimeout(() => {
                    arrow_1.classList.add('ani');
                }, 900);
                setTimeout(() => {
                    arrow_2.classList.add('ani');
                }, 1150);
                setTimeout(() => {
                    guide.classList.add('ani');
                }, 1350);
            } else {
                setTimeout(() => {
                    kvAni.classList.add('ani');
                }, 600);
                setTimeout(() => {
                    guide.classList.add('ani');
                }, 1100);
            }
            this.sa = new ScrollActive();
        });
    },
    updated() {
        this.initScrollActive();
    },
    beforeUnmount() {
        this.initScrollActive();
    }

}
function initSetting() {
    // hashtag Smooth scrolling
    // 搭配css (scroll-padding-top)
    setTimeout(() => {
        document.querySelectorAll('.scrollto[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                console.log('scrollto');
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth', alignToTop: true, alignToBottom: true
                });
                e.preventDefault();
            });
        });


    }, 350);

    // 網址有hashtag錨點，網頁載入後下滑
    let hashTag = location.hash;
    if (hashTag != '') {
        console.log(hashTag);
        setTimeout(() => {
            const myElement = document.querySelector(hashTag);
            myElement.scrollIntoView({ behavior: 'instant', });
        }, 1000);
    }

}
</script>

<style>
/* @import "~bootstrap/dist/css/bootstrap.css"; */
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
