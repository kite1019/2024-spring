<template>
	<!-- ID: {{ loginID }} -->
	<ul class="row couponBox mt-1" v-if="actCoupon">
        <template v-for="(item, index) in actCouponData" :key="item.uniqueIdentifier" >
			<li class="col-lg-6 col-12" :id="item.Id">
				<a :href="getLinkUrl(item)" class="main" :data-couponId="getCouponId(item)" :class="getLinkClass(item)" @click="getMyCouponClick(item, index, 'actCoupon')" ref="couponLink">
					<div class="box d-flex flex-wrap align-items-center align-self-center">
                        <div class="label">
							<strong v-html="actCoupon[index].Link.Text3"></strong>
                        </div>
						<div class="col content">
                            <div class="h3" v-html="actCoupon[index].Link.Text"></div>
							<div class="amt" v-html="getAmt(item)"></div>
						</div>
						<div class="col-12 date">
							<span>{{ item.UseStartDate }} ~ {{ item.UseEndDate }}</span>
						</div>
					</div>
					<div :class="getButtonClass(item)" ref="btnText">
						<span v-html="getButtonText(item)"></span><i></i>
					</div>

				</a>
			</li>
		</template>
	</ul>
	<div class="collection" v-if="collection">
        <swiper
            :modules="modules"
            :space-between="15"
            :speed="600"
            :pagination="{ clickable: true }"
            :breakpoints="{
                '320': { slidesPerView: 1.2, spaceBetween: 10, },
                '350': { slidesPerView: 1.3, spaceBetween: 10, },
                '768': { slidesPerView: 1.3, spaceBetween: 15, },
                '1024': { slidesPerView: 3, spaceBetween: 10, },
                '1601': { slidesPerView: 3, spaceBetween: 15, },
            }"
        >
			<template v-for="(item, index) in collectionData" :key="item.uniqueIdentifier" >
				<swiper-slide class="couponBox">
					<a :href="getLinkUrl(item)" :id="item.Id" class="main" :data-couponId="getCouponId(item)" :class="getLinkClass(item)" @click="getMyCouponClick(item, index, 'collection')" ref="collectionLink">
						<div class="box">
							<div class="label">
								<strong v-html="collection[index].Link.Text3"></strong>
							</div>
							<div class="col content">
								<div class="h3" v-html="collection[index].Link.Text"></div>
								<div class="amt" v-html="getAmt(item)"></div>
							</div>
							<div class="col-12 date">
								{{ item.UseStartDate }} ~ {{ item.UseEndDate }}
							</div>
						</div>
						<div :class="getButtonClass(item)" ref="collectionBtnText">
							<span v-html="getButtonText(item)"></span><i></i>
						</div>
					</a>
				</swiper-slide>
			</template>
		</swiper>
        
	</div>
    <div class="getAll d-flex justify-content-center">
		<a id="getAllcoupon" class="btn" :href="getAllLinkUrl()" @click="getAllCouponClick()">
			<span>一鍵領取 <i></i> <small>限量用完為止</small> </span>
		</a>

        <a href="https://24h.pchome.com.tw/activity/coupon" class="btn moreCoupon" target="_blank">更多折價券</a>    
    </div>

    <!-- 領取訊息 -->
    <div class="modal fade" id="takeCoupon" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div id="info__pic">
                        <img src="" alt="">
                    </div>
                    <h4 id="info__text">領取資訊</h4>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>
    <!-- END // 領取訊息 -->
</template>

<script>
import fetchJsonp from 'fetch-jsonp';
import { Modal } from 'bootstrap';

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/bundle'

// ---------------------------------
// 讀取後台資料並重組資料格式
// ---------------------------------
let dataArr = {};
export function toDataArr (arr){
    arr.forEach(function(item){
        dataArr[item.BlockId] = item;
    });
}

//計算區塊實際資料 (因IndexBlock資料中有空白陣列)
export function dataNode(data, blockNumFirst) {
    for(let i=blockNumFirst; i<=(blockNumFirst + 9); i++){
        if(dataArr[i]){
            dataArr[i].Nodes.forEach(function(node){
                // 檢查node.Link.Ur，如有資料再堆疊至新陣列{}
                if(node.Link.Url){
                    data.push(node);
                }
            });
        }
    }
}
let loginID;
export default {
    name: 'couponNewTemplate',
	data() {
		return {
			loginID: loginID,
            actCoupon: this.actCoupon,
			actCouponData: this.actCouponData,
            collection: this.collection,
			collectionData: this.collectionData,
			vipNotCollected: null, //會員沒領過的折價券 
		}
	},
    components: {
        Swiper,
        SwiperSlide,
	},
    setup() {
        return {
            modules: [Navigation, Pagination, Autoplay],
        }
    },
    created() {
		// ---------------------------------
		// (1) 取上稿系統 折價券編號
		// ---------------------------------		
        let actCoupon = [];
        let collection = [];
        toDataArr(IndexBlock);
        dataNode(actCoupon, 684);
        dataNode(collection, 695);


        // ----------------------------------------------
        // (2) 全站折價券內容
        // 1. 取會場佈置後台輸入的ActId，並且合併
        // 2. api get coupon activity 取折價券內容
        // 3. 折價券名稱：item.Link.Text ＝ 品名欄(必填)
        // 3. 折價券編號：item.Link.Text1 ＝ 價格欄(必填)
        // ----------------------------------------------
        let actCouponData;
        async function getActCouponData() {
			if (actCoupon != '') {
				const couponList = actCoupon.map(item => item.Link.Text1).join(','); // 把item.Link.Text1合併為couponList
				const jsonpURL = `https://ecapi.pchome.com.tw/marketing/coupon/v2/activity?id=${couponList}&_callback=jsonpcb_Coupon`;
				try {
					const response = await fetchJsonp(jsonpURL, {
						jsonpCallbackFunction: 'jsonpcb_Coupon'
					});
					const jsonData = await response.json();
					actCouponData = jsonData; // 將資料儲存至全域變數
				} catch (error) {
					console.log(`活動資訊解析失敗: ${error}`);
					actCouponData = {}; // 若發生錯誤，設定為空陣列或其他預設值
				}
			}
        }

		
        // ----------------------------------------------
        // (3) 品類折價券內容
        // 取會場佈置後台輸入的ActId，並且合併
        // ----------------------------------------------
        let collectionData;
        async function getCollectioneData() {
			if (collection != '') {
				const collectionList = collection.map(item => item.Link.Text1).join(',');
				const jsonpURL = `https://ecapi.pchome.com.tw/marketing/coupon/v2/activity?id=${collectionList}&_callback=jsonpcb_CouponCollection`;
				try {
					const response = await fetchJsonp(jsonpURL, {
						jsonpCallbackFunction: 'jsonpcb_CouponCollection'
					});
					const jsonData = await response.json();
					collectionData = jsonData; // 將資料儲存至全域變數
				} catch (error) {
					console.log(`活動資訊解析失敗: ${error}`);
					collectionData = {}; // 若發生錯誤，設定為空陣列或其他預設值
				}
			}
        }

		
		// ---------------------------------
		// (4) 會員ID get
		// 回傳：本機端null, 雲端id
		// ---------------------------------			
		let loginID = '' ; // memberid全域變數
		let loginURL;
		const nowUrl = window.location.href;
		const serchWord = nowUrl.indexOf('pchome');
		let timeNum = Date.now();
		// 檢查網址址是否有包含'pchome'，沒有=本機，有=雲端
		(serchWord < 0) 
			? loginURL = `js/id.json?_callback=callback_id&${timeNum}` //本機端
			// ? loginURL = `https://ecapi.pchome.com.tw/marketing/coupon/v2/member/id?_callback=callback_id`
			: loginURL = `https://ecapi.pchome.com.tw/marketing/coupon/v2/member/id?_callback=callback_id&${timeNum}`;

        async function getLoginID() {
			try {
				const response = await fetchJsonp(loginURL, {
					jsonpCallbackFunction: 'callback_id',
					timeout: 1500
				});
				loginID = await response.json(); // 將資料儲存至全域變數
			} catch (error) {
				console.log(`活動資訊解析失敗: ${error}`);
			}
        }
		// ---------------------------------
		// (5) 用memberid get 查還未領過 點領型 的折價券
		// 每個會員顯示的數量不同
		// ---------------------------------				
		let checkMemCouponURL;
		let vipNotCollected = '';	//會員沒領過的折價券 

		async function getMemberUrlCoupon() {
			if (loginID != null) {
				(serchWord < 0) 
					? checkMemCouponURL = `js/CouponNotCollected.json?_callback=jsonpcb_CouponNotCollectedd&${timeNum}&memberid=`+ loginID//本機端
					// ? checkMemCouponURL = `https://ecapi.pchome.com.tw/marketing/coupon/v2/activity/coupon?q=notcollected&_callback=jsonpcb_CouponNotCollected&memberid=`+ loginID + Date.now()
					: checkMemCouponURL = `https://ecapi.pchome.com.tw/marketing/coupon/v2/activity/coupon?q=notcollected&_callback=jsonpcb_CouponNotCollected&${timeNum}&memberid=`+ loginID;

				try {
					const response = await fetchJsonp(checkMemCouponURL, {
						jsonpCallbackFunction: 'jsonpcb_CouponNotCollected',
						timeout: 1500 // 延遲 5 秒
					});
					vipNotCollected = await response.json(); // 將資料儲存至全域變數
					// console.log('here---- ', vipNotCollected);
				} catch (error) {
					console.log(`活動資訊解析失敗: ${error}`);
				}
			}
		}

        // ----------------------------------------------
        // (6) 執行所有步驟後，回傳資料
		// 全站折價券內容 > 品類折價券內容 > 取會員ID > 回傳
        // ----------------------------------------------
		// 全站折價券內容
		getActCouponData().then(() => {
			// 品類折價券內容
			getCollectioneData().then(() => {
				// 會員ID get
				setTimeout(() => {
					getLoginID().then(() => {
						// 未領過 點領型 的折價券(要ID)
						setTimeout(() => {
							getMemberUrlCoupon().then(() => {
								// console.log('ID get成功:', loginID);
								this.loginID = loginID;
								//回傳值到data
								this.vipNotCollected = vipNotCollected;
								this.actCoupon = actCoupon;
								this.collection = collection;
								this.actCouponData = actCouponData;
								this.collectionData = collectionData;
								
								// console.log('登入狀態 loginID: ',loginID);
								// console.log('沒領的vipNotCollected: ', vipNotCollected);
								// console.log('全站券actCouponData: ', actCouponData);
								// console.log('品類券collectionData: ', collectionData);
							});
							
						}, 300);
					});
					
				}, 350);
			});

		});
	},
	methods: {
        // 折扣計算
		getAmt(item) {
			const SendAmt =  item.SendAmt;
			const SendAmtMode = item.SendAmtMode;
			// 折扣金額或折數，折數顯示「1位數」或「2位數」的處理
            switch (SendAmtMode) {
                case 'Discount': {
                    const amtRes = (1 - SendAmt) * 100;
                    const amtText = amtRes % 10 === 0 ? (amtRes / 10).toString() : amtRes.toString();
                    return `<strong style="margin-right:4px">${amtText}</strong><small>折</small>`;
                }
                default:
                    return `<small>現抵 $</small><strong>${SendAmt}</strong>`;
            }
		},
        // 共用判斷 Status 折價券狀態
        // Progress：進行中，  UseStart：兌換開始，  UseFinish：兌換結束
        isStatusActive(item) {
            const Status =  item.Status;
			const statusSet = 
				Status === 'Progress' || Status === 'UseStart' 
					? 'open' : Status === 'UseFinish' 
					? 'close' : ''; //default

			return statusSet;
        },
		// 共用判斷 比較2邊資料欄位CouponId
		matchCouponId(item) {
			let couponIdSet = '';
			if (this.vipNotCollected.Code != 400) {
				if (this.loginID != null || this.vipNotCollected != '' && (this.vipNotCollected.Code != 400)) {
					// 檢查是否在 this.vipNotCollected 陣列中有至少一個物件的 CouponId 與 item.CouponId 相符
					const isMatched = this.vipNotCollected.some(coupon => coupon.CouponId === item.CouponId);
					// 檢查Status 折價券狀態
					isMatched === true ? couponIdSet = item.CouponId : couponIdSet = '';
				}
			}
			return couponIdSet;
		},
        // 根據狀態 設定url, 要判斷登入
		getLinkUrl(item) {
            const rurl = window.location.href;
            const encodedStr = encodeURIComponent(rurl); //將網址轉碼，避免GA出錯
            const loginUrl = `https://ecvip.pchome.com.tw/login/v3/login.htm?rurl=${encodedStr}`;
            const statusSet = this.isStatusActive(item);
			// console.log('loginID:', this.loginID);
            let urlMap = '';
			switch (statusSet) {
				case 'open':
					urlMap = this.loginID === null ? loginUrl : 'javascript: void(0)';
					break;
				case 'close':
					urlMap = 'javascript:;'; // 結束
					break;
				// 可以添加其他 case 分支，如果有其他可能的 statusSet 值
				default:
					// 預設情況下的操作
					break;
			}
            return urlMap; 
		},
		// 根據條件：有無couponID, statusSet=open時，才傳到data-couponId
		getCouponId(item) {
			// 檢查Status 折價券狀態
            const statusSet = this.isStatusActive(item);
			let couponIdSet = ''; // 預設
			switch (statusSet) {
				case 'open':
					couponIdSet = this.matchCouponId(item);
					break;
				default:
					// 預設情況下 
					break;
			}

			return couponIdSet;
		},
        // 根據狀態 設定link class
		getLinkClass(item) {
            const statusSet = this.isStatusActive(item);
            let addClass = '';
			addClass = (statusSet === 'open') 
				? (this.matchCouponId(item) !== '' ? (this.loginID === null ? '' : 'getmycoupon') : (this.loginID === null ? '' : 'got'))
				: (statusSet === 'close' ? 'pe-none' : '');
            return addClass; 
		},
        //根劇狀態 設定btn class, 不用判斷登入
		getButtonClass(item) {
            const statusSet = this.isStatusActive(item);
            let btnClass = 'btn theend';
			switch (statusSet) {
				case 'open':
					btnClass = 'btn goBtn'
					break;
				case 'close':
					btnClass = 'btn theend'
					break;
				default:
					break;
			}
            return btnClass; // Default class
		},
        //根劇登入狀態 設定對應文案
        getButtonText(item) {
            const statusSet = this.isStatusActive(item);
            let Text = '';
			switch (statusSet) {
				case 'open':
					this.loginID === null ? Text = '登入領' : Text = '立即領';
					break;
				case 'close':
					Text = '活動<br>結束';
					break;
				default:
					break;
			}
            return Text; 
		},
		// ---------------------------------------------------
		// 單張領取折價券：分2種處理
		// (1)未領過，監聽a class有 getmycoupon > post領取 > 成功修改狀態
		// (2)已領過或歸戶型，監聽a class有 got > 檢查登入狀態 > 成功修改狀態
		// ---------------------------------------------------
		getMyCouponClick(item, index, listType) {
			switch (listType) {
				case 'actCoupon':
					// 全站券
					switch (this.getLinkClass(item)) {
						// 當a.class有 getmycoupon 執行監聽，可領取
						case 'getmycoupon':
							console.log('yes',item.CouponId);
							this.postCoupon(item.CouponId, index, listType);
							break;

						// 當a.class有 got，已領過，直接修改狀態
						case 'got':
							// 先檢查是否登入，對應燈箱文案
							console.log('got');
							this.checkLogin(index, 'actCoupon');
							break;
						default:
							break;
					}
					break;

				case 'collection':
					// 品類券
					switch (this.getLinkClass(item)) {
						// 當a.class有 getmycoupon 執行監聽，可領取
						case 'getmycoupon':
							// console.log('yes',item.CouponId);
							this.postCoupon(item.CouponId, index, listType);
							break;
							
						// 當a.class有 got，已領過，直接修改狀態
						case 'got':
							// 先檢查是否登入，對應燈箱文案
							// console.log('got');
							this.checkLogin(index, 'collection');
							break;
						default:
							break;
					}
					break;
				default:
					// 預設情況
					break;
			}

		},
		// ---------------------------------------------------
		// 一鍵領取折價券：分2種處理
		// (1)allCouponid 有資料，post成功 > 修改全部coupon狀態和文字
		// (2)allCouponid 空值，直接修改全部coupon狀態和文字
		// ---------------------------------------------------
        // 檢查登入狀態
		getAllLinkUrl() {
            const rurl = window.location.href;
            const encodedStr = encodeURIComponent(rurl); //將網址轉碼，避免GA出錯
            const loginUrl = `https://ecvip.pchome.com.tw/login/v3/login.htm?rurl=${encodedStr}`;
            let urlMap ;
			this.loginID === null ? urlMap = loginUrl : urlMap = 'javascript: void(0)';
            return urlMap; 
		},
		getAllCouponClick() {
				let allCouponid = '';
				// 檢查所有的 data-couponid，如果有資料，則存到couponId，並用逗號分開
				document.querySelectorAll('[data-couponid]').forEach((element, index) => {
					const couponId = element.getAttribute('data-couponid');
					// 如果 data-couponid 存在，則添加到 allCouponid 中
					if (couponId) {
						allCouponid += (index === 0 ? '' : ',') + couponId;
					}
				});
				// allCouponid有資料，則post
				if (allCouponid != '') {
					// console.log('get it',allCouponid);
					// 領取折價券
					this.postCoupon(allCouponid, 0, 'getAllCoupon');
				} else {
					// console.log('all yes');
					this.checkLogin(0, 'getAllCoupon');
				}
		},

		// ---------------------------------------------------
		// 共用判斷 檢查登入狀態
		// ---------------------------------------------------
		checkLogin(index, listType) {
			let islogin;
			async function fetchLogin() {
				const loginURL = `https://ecapi.pchome.com.tw/member/v2/member/islogin?_callback=callback_coupon`;
				try {
					const response = await fetchJsonp(loginURL, {
						jsonpCallbackFunction: 'callback_coupon'
					});
					const jsonData = await response.json();
					islogin = jsonData; // 將資料儲存至全域變數
					return islogin;
				} catch (error) {
					console.log(`解析失敗: ${error}`);
				}
			}
			fetchLogin().then(() => {
				// islogin = 1;
				console.log(index, listType, 'islogin: ', islogin);

				const infoModal = new Modal('#takeCoupon')
				const infoTextDiv = document.querySelector('#info__text');
				const infoPicDiv = document.querySelector('#info__pic');
				const couponLink = this.$refs.couponLink[index];
				const collectionLink = this.$refs.collectionLink[index];
				const couponAllLink = document.querySelector('#getAllcoupon');
				const allGetLink = document.querySelectorAll('a.main');
				const allGetText = document.querySelectorAll('.btn.goBtn');
				const rurl = window.location.href;
				const encodedStr = encodeURIComponent(rurl); //將網址轉碼，避免GA出錯
	
				switch (islogin) {
					case 1:
						// console.log('已領取 islogin', islogin);
						switch (listType) {
							case 'actCoupon':
								// 全站券
								couponLink.classList.remove('getmycoupon');
								couponLink.classList.remove('got');
								couponLink.classList.add('pe-none');
								this.$refs.btnText[index].innerText = '已領取';
								break;

							case 'getAllCoupon':
								// 一鍵全領
								couponAllLink.classList.add('pe-none');
								couponAllLink.innerHTML = '已全部領取<i></i><small>限量用完為止</small>';
								// 領取成功，檢查全部的coupon的
								allGetLink.forEach(item => {
									item.classList.remove('getmycoupon');
									item.classList.remove('got');
									item.classList.add('pe-none');
									item.setAttribute('data-couponid', '');
								});
								allGetText.forEach(item => {
									item.innerText = '已領取';
								});
								break;
						
							default:
								// 預設 品類券 collection
								collectionLink.classList.remove('getmycoupon');
								collectionLink.classList.remove('got');
								collectionLink.classList.add('pe-none');
								this.$refs.collectionBtnText[index].innerText = '已領取';
								break;
						}
						infoPicDiv.innerHTML= `<object data="https://fs-a.ecimg.tw/img/sites/marketing/shareImg/coupon_accept.svg"></object>`;
						infoTextDiv.innerHTML='折價券已歸戶';
						infoModal.show();
						break;
				
					default:
						// console.log('先登入islogin', islogin);
						infoPicDiv.innerHTML= `<object data="https://fs-a.ecimg.tw/img/sites/marketing/shareImg/coupon_warning.svg"></object>`;
						infoTextDiv.innerHTML=`<a class="warning" href="https://ecvip.pchome.com.tw/login/v3/login.htm?rurl=${encodedStr}">« 請先登入會員 »</a>`;
						infoModal.show();
						break;
				}
			});
		},

		// ---------------------------------------------------
		// 共用判斷 領取折價券
		// ---------------------------------------------------
		postCoupon(couponId, index, listType) {
            const infoModal = new Modal('#takeCoupon')
			const infoTextDiv = document.querySelector('#info__text');
			const infoPicDiv = document.querySelector('#info__pic');
			const couponLink = this.$refs.couponLink[index];
			const collectionLink = this.$refs.collectionLink[index];

			const couponAllLink = document.querySelector('#getAllcoupon');
			const allGetLink = document.querySelectorAll('a.main');
			const allGetText = document.querySelectorAll('.btn.goBtn');
			const url = `https://shopping.pchome.com.tw/ecapi/marketing/coupon/v2/index.php/coupon?id=${couponId}`;
			console.log('post- ', url );

			fetch(url, {
				method: 'POST',
				credentials: 'include'
			})
			.then(response => {
				console.log('response: ',response);
				return response.json();
			})
			.then(data => {
				// POST 成功後的回應 data Success
				console.log('POST OK ', 'data: ',data[0].Msg);
				const msg = data[0].Msg;
				switch (msg) {
					case 'Success': {
						infoPicDiv.innerHTML= `<object data="https://fs-a.ecimg.tw/img/sites/marketing/shareImg/coupon_accept.svg"></object>`;
						infoTextDiv.innerHTML='折價券領取成功';
						break;
					}
					case 'Finished': {
						infoPicDiv.innerHTML= `<object data="https://fs-a.ecimg.tw/img/sites/marketing/shareImg/coupon_accept.svg"></object>`;
						infoTextDiv.innerHTML='折價券已索取完畢';
						break;
					}
					default:
						infoPicDiv.innerHTML= `<object data="https://fs-a.ecimg.tw/img/sites/marketing/shareImg/coupon_accept.svg"></object>`;
						infoTextDiv.innerHTML='折價券已歸戶';
				}
				infoModal.show();

				// 更新各折價券的狀態
				switch (listType) {
					case 'actCoupon':
						// 全站券的更新
						// console.log('領!! ');
						// 更新此券狀態
						couponLink.classList.remove('getmycoupon');
						couponLink.classList.remove('got');
						couponLink.classList.add('pe-none');
						this.$refs.btnText[index].innerText = '已領取';
						// 清除 data-couponid 的內容
						couponLink.setAttribute('data-couponid', '');
						break;

					case 'collection':
						// 品類券的更新
						// 更新此券狀態
						collectionLink.classList.remove('getmycoupon');
						collectionLink.classList.remove('got');
						collectionLink.classList.add('pe-none');
						this.$refs.collectionBtnText[index].innerText = '已領取';
						// 清除 data-couponid 的內容
						collectionLink.setAttribute('data-couponid', '');
						break;

					case 'getAllCoupon':
						// 一鍵領取
						// console.log('還有沒領的',listType);
						// 領取成功，不可再按
						couponAllLink.classList.add('pe-none');
						couponAllLink.innerHTML = '已全部領取<i></i><small>限量用完為止</small>';
						allGetLink.forEach(item => {
							item.classList.remove('getmycoupon');
							item.classList.remove('got');
							item.classList.add('pe-none');
							item.setAttribute('data-couponid', '');
						});
						allGetText.forEach(item => {
							item.innerText = '已領取';
						});

						break;
					default:
						break;
				}
				
			})
			.catch(error => {
				// 處理錯誤
				console.error('POST error: ', error);
				const rurl = window.location.href;
				const encodedStr = encodeURIComponent(rurl); //將網址轉碼，避免GA出錯
				infoPicDiv.innerHTML= `<object data="https://fs-a.ecimg.tw/img/sites/marketing/shareImg/coupon_warning.svg"></object>`;
				infoTextDiv.innerHTML=`<a class="warning" href="https://ecvip.pchome.com.tw/login/v3/login.htm?rurl=${encodedStr}">« 請先登入會員 »</a>`;
				infoModal.show();
			});

		},
    }
};
</script>

<style lang="scss" scoped>
// @import "@/scss/components/_coupon.scss";

</style>
