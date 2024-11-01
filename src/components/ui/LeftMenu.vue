<template>
    <!-- 左側選單 -->
    <div class="left_menu d-flex align-items-start flex-column" :class="{ 'go--act': isMenuActive }" v-if="menuDataList.length >0">
        <div class="arrow_box" @click="toggleMenu">
            <span><img src="@/assets/ui/right-arrow.svg" alt="arrow" class="d-block"></span>
        </div>
        <!-- web選單 -->
        <div class="menu_box">
			<template v-for="(item, index) in menuDataList" :key="index">
				<div v-if="index === 0" class="sticker">
					<a :href="item.Link.Url"><img :src="item.Img.Src" class="d-block"></a>
				</div> 
			</template>
			<div class="listWrap">
				<div class="topList">
					<a href="https://24h.pchome.com.tw/activity/coupon" target="_blank">必搶神券</a>
					<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#calendar" @click="gaPush">活動攻略</a>
				</div>
				<ul class="row mainList">
					<template v-for="(item, index) in menuDataList" :key="index">
						<li class="col-6" v-if="index >= 2 && item.Img.Src == '' ">
							<a :href="item.Link.Url">{{item.Link.Text}}</a>
						</li>
					</template>
				</ul>
				<ul class="row subList">
					<template v-for="(item, index) in menuDataList" :key="index">
						<li class="col-12" v-if="index >= 1 && item.Img.Src != '' ">
							<a :href="item.Link.Url">{{item.Link.Text}}</a>
						</li>
					</template>
				</ul>
			</div>
        </div>
    </div>
    <!-- END // 左側選單 -->

    <!-- app選單 -->
    <div class="app_menu" id="app_menu" v-if="menuDataList.length >0">
        <ul class="main d-flex justify-content-center">
			<li>
				<a href="https://24h.pchome.com.tw/activity/coupon">
					<img src="@/assets/ui/app_icon_03.png" class="icon">
					<span>折價券</span>
				</a>
			</li>
			<li>
				<a href="javascript:;" data-bs-toggle="modal" data-bs-target="#calendar" @click="gaPush">
					<img src="@/assets/ui/app_icon_02.png" class="icon">
					<span>活動攻略</span>
				</a>
			</li>
            <li>
                <a href="javascript:void(0);" @click="toggleAppMenu">
					<img src="@/assets/ui/app_icon_04.png" class="icon">
                    <span>精選會場</span>
                </a>
            </li>
			<li>
				<a href="#top" @click.prevent="goTop()">
					<img src="@/assets/ui/app_icon_05.png" class="icon">
					<span>GoTop</span>
				</a>
			</li>
        </ul>

		<!-- 上滑所有選單 -->
        <div class="subBox_app" :class="{ 'go--act': isAppMenuActive }">
            <div class="appMenu_title btn_sub" @click.prevent="toggleAppMenu">
				<img src="@/assets/ui/app_icon_close.svg">
                <p>CLOSE</p>
            </div>
            <ul class="row justify-content-center subList" id="appSubList">
                <template v-for="(item, index) in menuDataList" :key="index">
					<li class="col-4" v-if="index >= 2"><a :href="item.Link.Url">{{item.Link.Text}}</a></li>
                </template>
            </ul>
        </div>
		<!-- END // 上滑所有選單 -->

		<!-- 底色遮罩 -->
		<div id="newMask" :class="{ 'go--act': isAppMenuActive }" @click="toggleAppMenu"></div>
		<!-- END // 底色遮罩 -->
    </div>
    <!-- app選單 -->
</template>

<script>

// ---------------------------------
// (2) 讀取後台資料並重組資料格式
// ---------------------------------
let dataArr = {};
function toDataArr (arr){
    arr.forEach(function(item){
        dataArr[item.BlockId] = item;
    });
}

// 計算選單資料
function dataObjNodeMenu(data, blockNumFirst, blockNumLast) {
	for(let i=blockNumFirst; i<=blockNumLast; i++){
		if(dataArr[i]){
			dataArr[i].Nodes.forEach(function(objNode){
				if(objNode.Link.Url){
					data.push(objNode)
				}
			})
		}
	}
}


let menuData1 = [];
let menuData2 = [];
export default {
    name: 'LeftMenu',
	data() {
		return {
			menuDataList: [],
            isMenuActive: false,
			isAppMenuActive: false,
		}
	},
    created() {
		// 讀取後台資料並重組資料格式
		toDataArr(IndexBlock);
        setTimeout(() => {
			dataObjNodeMenu(menuData1, 143, 144);
			dataObjNodeMenu(menuData2, 357, 360);
			this.menuDataList = [...menuData1, ...menuData2];
			// console.log('menuData1: ',menuData1);
        }, 100);
    },
	mounted() {
		if (typeof dataLayer !== 'undefined') {
		// dataLayer is defined, you can safely use it here
		}
	},
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        },
        toggleAppMenu() {
            this.isAppMenuActive = !this.isAppMenuActive;
			console.log('toggleAppMenu');
        },
		goTop() {
            const myElement = document.querySelector('#top');
            myElement.scrollIntoView({ behavior: 'instant', });
        },
		gaPush(){
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
		}
    },
}
</script>

<style lang="scss" scoped>
$toplist-textcolor: #fff;
$toplist-textcolor-hover: #fffb6e;
$toplist-bordercolor: #fdff00;

$mainlist-bgcolor: #fdff00;
$mainlist-textcolor: #303321;
$mainlist-textcolor-hover: #fff;
$mainlist-bgcolor-hover: #9069ff;

$sublist-bgcolor: #fdff00;
$sublist-textcolor: #303321;
$sublist-textcolor-hover: #fff;
$sublist-bgcolor-hover: #9069ff;

.listWrap {
	background: url('@/assets/new/menu_bg.svg') top center no-repeat;
	background-size: 100%;
	padding-bottom: 5px;
	border-radius: 0 0 10px 10px;
}
.arrow_box {
	background: rgba(0, 0, 0, .8);
	width: 40px;
	margin: 0 0 3px 0;
	cursor: pointer;
	border-radius: 5px 0 0 5px;
	transition: 0.2s;
	@media only screen and (max-width: 992px) {
		display: none;
	}
	span {
		display: block;
		filter: invert(1);
		padding: 6px;
		opacity: 0.8;
		transition: .3s all;
        @media only screen and (max-width: 1366px) {
			transform: rotate(180deg);
		}
	}
}

.left_menu {
    width: 120px;
    position: fixed;
    z-index: 99;
    left: 0;
    top: 40px;
	@media only screen and (max-width: 992px) {
		display: none !important;
	}
	&.hide {
		display: none !important;
	}
	.arrow_box {
		border-radius: 0 5px 5px 0;
		span img {
			transform: scaleX(-1);
		}
	}
    .menu_box {
        text-align: center;
        width: 100%;
		margin-left: 8px;
        transition: 0.3s;
        @media only screen and (max-width: 1366px) {
			transform: translateX(-115%) scale(0.9);
		}
		@media only screen and (max-width: 1024px) {
			margin-left: 3px;
			transform-origin: 0 0;
			// transform: scale(0.9);
		}
		@media only screen and (max-width: 992px) {
			transform: none;
			border-radius: 0;
		}
		.sticker {
			width: 100%;
			margin: 0 auto -2.2rem;
			border-radius: 0 0 1rem 1rem;
		}
		.topList {
			padding-top: 2.5rem;
			a {
				display: block;
				color: $toplist-textcolor;
				font-size: 18px;
				font-weight: 500;
				padding: 5px 0;
				position: relative;
				&::after {
					content: "";
					position: absolute;
					bottom: 0px;
					left: 50%;
					transform: translateX(-50%);
					border-top: 1px solid $toplist-bordercolor;
					width: 98px;
					height: 1px;
					z-index: 1;
				}
				&:last-child::after {
					display: none;
				}
				&:hover {
					color: $toplist-textcolor-hover;
				}
			}
		}
		.mainList {
			border-radius: 8px;
			overflow: hidden;
			background-color: $mainlist-bgcolor;
			border: 1px solid $mainlist-bgcolor;
			margin: 0 5px 5px;
			position: relative;
			li {
				padding: 0;
			}
			a {
				font-size: 14px;
				font-weight: 500;
				color: $mainlist-textcolor;
				padding: 5px 0;
				display: block;
				&:hover {
					color: $mainlist-textcolor-hover;
					background: $mainlist-bgcolor-hover;
				}
			}
		}
		.subList {
			border-radius: 8px;
			overflow: hidden;
			background-color: $sublist-bgcolor;
			border: 1px solid $sublist-bgcolor;
			width: calc(100% - 10px);
			margin: auto;
			// margin: 5px;
			li {
				padding: 0;
			}
			a {
				font-size: 14px;
				font-weight: 500;
				color: $sublist-textcolor;
				padding: 5px 0;
				display: block;
				&:hover {
					color: $sublist-textcolor-hover;
					background: $sublist-bgcolor-hover;
				}
			}

		}
	}

	&.go--act { 
		.arrow_box span {
			transform:  rotate(180deg);
			@media only screen and (max-width: 1366px) {
				transform: rotate(0);
			}
		}
		.menu_box {
			transform: translateX(-105%) scale(0.9);
			pointer-events: none;
			@media only screen and (max-width: 1366px) {
				pointer-events: auto;
				transform: translateX(0);
			}
		}
	}
}

.app_menu {
	display: none;
	width: 100%;
	color: #fff;
	margin: 0;
	background: linear-gradient(180deg, rgba($color: #000000, $alpha: 0) 0%, rgba($color: #000000, $alpha: .75) 50%);
	position: fixed;
    bottom: 0px;
    top: inherit;
    z-index: 99;
	@media only screen and (max-width: 992px) {
		display: block;
	}
	.main {
		margin: 0;
		padding: 0 1rem;
		position: relative;
		z-index: 55;
		li {
			width: 22%;
			a {
				color: #fff !important;
				text-decoration: none;
				line-height: 1;
				display: block;
				margin-bottom: 5px;
				span {
					display: block;
					text-align: center;
					font-size: 1rem;
					font-weight: 500;
					@media only screen and (max-width: 767px) {
						font-size: 13px;
					}
				}
			}
			.icon {
				display: block;
				width: 80px;
				margin: 0 auto;
				@media only screen and (max-width: 767px) {
					width: 50px;
				}
			}
		}
	}
	.appMenu_title {
		width: 200px;
		height: 100px;
		border-radius: 240px 240px 0 0;
		position: absolute;
		left: 50%;
		top: -1rem;
		transform: translate(-50%, 0);
		cursor: pointer;
		opacity: 0;
		transition: 0.3s;
		transition-delay: 0.3s;
		img {
			width: 40px;
			display: block;
			margin: 0 auto;
		}
		p {
			text-align: center;
			font-weight: 500;
		}
	}
	.subBox_app {
		display: block;
		position: fixed;
		z-index: 999;
		width: 100%;
		bottom: -70vh;
		left: 0;
		transition: 0.6s cubic-bezier(0.5, 0.64, 0.15, 1.12);
		z-index: 8;
		.subList {
			margin: 0;
			padding: 15px 5px 110px;
			background: linear-gradient(180deg, rgba(68, 0, 21, 0.0) 0%, rgba(68, 0, 21, 0.80) 50%);
			position: relative;
			z-index: 3;
			li {
				padding: 5px 3px;
			}
			a {
				color: #fff;
				border: 1px solid #fff;
				border-radius: 100px;
				padding: 5px 0;
				display: block;
				font-size: 14px;
				font-weight: 500;
				text-align: center;
				transition: .3s all;
			}
		}
		&.go--act {
			bottom: -20px;
			.appMenu_title {
				top: -4.5rem;
				opacity: 1;
			}
		}
	}
	.followBox_app{
		position: fixed;
		z-index: 999;
		width: 100%;
		bottom: -55vh;
		left: 0;
		background: #000;
		transition: .6s cubic-bezier(.5,.64,.15,1.12);
		ul {
			width: 50%;
			padding: 1rem 0;
			margin: auto;
			background: #000;
			position: relative;
			z-index: 3;
			@media only screen and (max-width:767px) {
				padding: 15px 0;
				width: 280px;
			}
		}
		li {
			padding: 5px;
		}
		&.go--act {
			bottom: 0;
			.appMenu_title {
				top: -4.5rem;
				opacity: 1;
			}
		}
	}
}

// app 上選單展開
.nav_btn {
	display: none !important;
	cursor: pointer;
	background: #fff;
	position: fixed;
	z-index: 88;
	top: 40px;
	right: 0;
	width: 30px;
	height: 41px;
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width:767px) {
		display: flex !important;
	}
	span {
		transform: rotate(45deg);
		width: 12px;
		height: 12px;
		border: solid rgba($color: #000000, $alpha: 0.8);
		border-width: 0 2px 2px 0;
		margin: 0;
		transition: .3s;
	}
	&.go--act {
		z-index: 9999;
		span {
			transform: rotate(-135deg);
		}
	}
}

.subfixed {
	position: fixed;
	top: 10px;
}
.menuMask, #newMask {
	display: none;
    background-color: rgba(34, 34, 34, 0.75);
    width: 100vw;
	height: 0;
    position: fixed;
	left: 0px;
	bottom: 0;
	pointer-events: none;
	&.go--act {
		pointer-events: auto;
		height: 100vh;
		display: block;
		z-index: 5;
	}
}
#newMask {
	display: block;
}
.gotopMB {
	display: none;
	width: 40px;
	height: 40px;
	text-align: center;
	text-decoration: none;
	font-size: 11px;
	color: #fff;
	background-color: rgba(0,0,0,.3);
	position: fixed;
	right: 10px;
	bottom: 70px;
	z-index: 11;
	border-radius :100%;
	span {
		width: 15px;
		height: 15px;
		display: block;
		margin: 10px auto -6px;
	}
	@media only screen and (max-width: 992px) {
		display: block;
	}
}
.gotopMB:hover, .gotopMB a {
	color: #fff;
	text-decoration: none;
}

</style>
