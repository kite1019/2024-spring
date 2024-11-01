<template>
    <!-- 右側選單 (手機置頂) -->
    <div class="right__menu d-flex align-items-center navbar" :class="{ 'go--act': isMenuActive }">
        <div class="menu_mb_head">快速導覽：</div>
        <ul class="menu_box nav navbar-nav" id="navbar">
			<li data-scroll-active="kv" class="noline"></li>
			<li data-scroll-active="bank" v-if="bankWeb !='' && bankApp !=''">
				<a href="#bank" @click.prevent><i></i>銀行優惠</a>
			</li>
			<li data-scroll-active="discount" v-if="discount !=''">
				<a href="#discount" @click.prevent><i></i>加碼必看</a>
			</li>
			<li data-scroll-active="sale_auction" v-if="saleAuction !=''">
				<a href="#sale_auction" @click.prevent><i></i>人氣夯品</a>
			</li>
			<li data-scroll-active="supersale" v-if="supersale !=''">
				<a href="#supersale" @click.prevent><i></i>挑戰新低價</a>
			</li>
			<li data-scroll-active="new_list" v-if="newList !=''">
				<a href="#new_list" @click.prevent><i></i>大牌新品</a>
			</li>
			<li data-scroll-active="focus" v-if="focus_1 != '' && focus_2 !=''">
				<a href="#focus" @click.prevent><i></i>本日主打星</a>
			</li>
			<li data-scroll-active="sbdpreview" v-if="sbdpreview != ''">
				<a href="#sbdpreview" @click.prevent><i></i>強檔預告</a>
			</li>
			<li data-scroll-active="sbdbody" v-if="sbdbody !=''">
				<a href="#sbdbody" @click.prevent><i></i>嚴選特搜</a>
			</li>
			<li data-scroll-active="coupon" v-if="coupon !=''">
				<a href="#coupon" @click.prevent><i></i>必搶神券</a>
			</li>
			<li data-scroll-active="spring" v-if="spring_1 !='' && spring_2 !=''">
				<a href="#spring" @click.prevent><i></i>春日換新</a>
			</li>
			<li data-scroll-active="travel" v-if="travel !=''">
				<a href="#travel" @click.prevent><i></i>出遊規劃</a>
			</li>
			<li data-scroll-active="winter" v-if="winter !=''">
				<a href="#winter" @click.prevent><i></i>冬季折扣</a>
			</li>
			<li data-scroll-active="cate" v-if="cate !=''">
				<a href="#cate" @click.prevent ><i></i>精選會場</a>
			</li>
			<li data-scroll-active="curve" class="noline"></li>
			<li data-scroll-active="dailysale" class="noline d-lg-none d-block">
				<a href="#dailysale" @click.prevent><i></i>限時瘋搶</a>
			</li>
			
			<template v-for="(item, index) in otherData"  :key="item.uniqueIdentifier">
				<li class="mt-3 px-2 pt-3 d-lg-block d-none noline" v-if="index === 0">
					<a :href="item.Link.Url" target="_blank">
						<img :src="item.Img.Src" class="d-block" :alt="item.Link.Text">
					</a>
				</li>
			</template>
			<li data-scroll-active="seoBox" class="noline"></li>
        </ul>
        <div class="gotop">
            <a href="#top" @click.prevent="goTop()">
                <img src="@/assets/ui/goTop.svg" class="d-block">
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'RightMenu',
    data() {
        return {
            isMenuActive: false
        };
    },
	props: ['otherData', 'bankWeb', 'bankApp', 'discount', 'supersale', 'saleAuction', 'sbdpreview', 'sbdbody', 'spring_1', 'spring_2', 'newList', 'focus_1', 'focus_2', 'coupon', 'travel', 'winter', 'cate', 'date'],
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        },
		goTop() {
			const goTop = document.getElementById("top");
			goTop.scrollIntoView({ behavior: 'instant' });
		},
    },
};
</script>

<style lang="scss" scoped>
.right__menu {
    width: 100px;
	height: 100vh;
    position: fixed;
	right: 0;
	top: 0;
    z-index: 99;
	background-color: rgba($color: #7d5aff, $alpha: .9);
	@media only screen and (max-width: 991px) {
		width: 100%;
		height: auto;
		background-color: #fff;
		z-index: 22;
		padding: 0;
		position: fixed;
		top: 0;
		overflow-x: auto;
		overflow-y: hidden;
		pointer-events: auto;
	}
    .menu_box {
		// margin-right: 5px;
		width: 100%;
		justify-content: center;
		@media only screen and (max-width: 991px) {
			left: 0;
			width: auto;
			min-height: 43px;
			background-color: #fff;
			-webkit-overflow-scrolling: touch;
			white-space: nowrap;
			display: flex;
			flex-wrap: nowrap;
			flex-direction: row;
			padding: 0;
			pointer-events: auto;
			position: relative;
            top: 0;
			justify-content: left;
		}
		a {
			display: flex;
			justify-content: center;
			color: #fff;
			font-size: 15px;
			font-weight: 500;
			padding: 6px 0;
			text-align: center;
			@media only screen and (max-width: 1024px) {
				padding: 4px 0;
			}
			@media only screen and (max-width: 991px) {
				position: relative;
				color: #3f3f3f !important;
				font-size: 16px;
				font-weight: 500;
				padding: 8px;
				&::before {
					content: "";
					position: absolute;
					bottom: 18%;
					right: 0;
					width: 1px;
					height: 60%;
					background-color: #ccc;
				}
				br {
					display: none;
				}
			}
		}
		li {
			margin: 3px 0;
			width: 100%;
			position: relative;
			@media only screen and (max-width: 991px) {
				width: auto;
				margin: 0;
				&:nth-last-child(2) {
					padding-right: 3rem;
				}
			}
			&::before {
				content: '';
				display: block;
				position: absolute;
				bottom: -4px;
				width: 50%;
				height: 1px;
				background-color: #5900ba;
				left: 50%;
				transform: translateX(-50%);
				@media only screen and (max-width: 767px) {
					display: none;
				}
			}
			&.noline::before {
				display: none;
			}
			&.active a {
				color: #fdff00;
				font-weight: 600;
				i {
					width: 15px;
					height: 15px;
					display: block;
					background: url('@/assets/new/menu_icon.png') top center no-repeat;
					background-size: 100%;
					margin: 5px 3px 0 0;
				}
			}
			&.beauty.active a {
				text-align: justify;
			}
		}
		#smallBn {
			width: 100%;
			@media only screen and (max-width: 991px) {
				display: none !important;
			}
		}
	}
	.gotop {
		display: block;
		width: 40px;
		margin: auto;
		@media only screen and (max-width: 991px) {
			display: none !important;
		}
	}
	.menu_mb_head {
		color: #e54040;
		text-align: left;
		width: 100%;
		height: 41px;
		line-height: 41px;
		font-size: 1.2rem;
		font-weight: 500;
		padding: 0 0 0 10px;
		display: none;
	}
	&.go--act {
		box-shadow: 0 0 13px rgba($color: #000000, $alpha: .5);
		.nav_btn span {
			transform: rotate(-135deg);
		}
		.menu_box {
			@media only screen and (max-width: 767px) {
				display: flex;
				flex-wrap: wrap;
				align-content: center;
				justify-content: center;
				padding-bottom: 10px;
				padding-right: 25px;
				li a:before {
					display: none;
				}
			}
			li:nth-last-child(2) {
				padding-right: 0;
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
	top: 0px;
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
</style>
