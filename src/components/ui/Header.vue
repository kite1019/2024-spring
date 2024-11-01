<template>
    <div id="top"></div>
    <header class="">
        <div class="container d-lg-flex d-none justify-content-between align-items-center">
            <ul class="d-flex left__box">
                <li class="logo__pchome24h">
                    <a href="https://24h.pchome.com.tw/"><img src="@/assets/ui/24Logo.svg" alt="PChome24h"></a>
                </li>
                <li>
                    <a href="https://ecvip.pchome.com.tw/web/pages/24hHelp.htm">
                        <img src="@/assets/ui/24Logo-text.svg" alt="全台灣24小時到貨 遲到給100 (例外及說明)">
                    </a>
                </li>
            </ul>
            <ul class="d-flex right__box">
                <li class="appDonload">
                    <span class="me-2">APP下載</span>
                    <img src="@/assets/ui/24h-APP-Download.svg" alt="app下載" class="icon">
                    <div class="appQRcode">
                        <img src="@/assets/ui/img_appQrcode.svg" class="QRCode">
                        享受APP專屬優惠
                    </div>
                </li>
                <li class="socialMedia">
                    <span>追蹤我們 :</span>
                    <a href="https://www.facebook.com/pchome24h/" target="_blank"><img src="@/assets/ui/header-fb-w.svg" alt="fb"></a>
                    <a href="https://www.instagram.com/pchome24h/" target="_blank"><img src="@/assets/ui/header-ig-w.svg" alt="ig"></a>
                    <a href="https://line.me/R/ti/p/@pchome24h" target="_blank"><img src="@/assets/ui/header-line-w.svg" alt="line"></a>
                    <a href="https://www.youtube.com/@PChome24h" target="_blank"><img src="@/assets/ui/header-yt-w.svg" alt="youtube"></a>
                </li>
            </ul>
        </div>
        <!-- <div class="app w-100 d-lg-none d-flex align-items-center justify-content-center">
            <a href="https://24h.pchome.com.tw/"><img src="@/assets/ui/24Logo.svg" alt="PChome24h"></a>
        </div> -->
    </header>
</template>

<script>
export default {
  name: 'HeaderTop',
};
</script>

<style lang="scss" scoped>
header {
	width: 100%;
	background-color: #ea1717;
	padding: 0;
	position: relative;
	z-index: 99;  
	@media only screen and (max-width: 991px) {
		position: fixed;
		top: 0;
		left: 0;
		background-color: var(--pchomeRed);
	}
	.container, .app {
		height: 40px;
	}
	.container{
		@media only screen and (max-width: 1600px) {
			max-width: 85vw;
		}
		@media only screen and (max-width: 1024px) {
			margin: 0 0 0 3rem;
			width: 100%;
		}
	}
	li {
		position: relative;
	}
	span {
		display: inline-block;
		color: #fff;
		font-size: 13px;
		font-weight: 400;
		text-decoration: none;
	}
	img.icon {
		width: 28px;
	}
	.left__box {
		li.logo__pchome24h {
			margin-right: 60px;
			img {
				width: 160px;
			}
		}
	}
	.right__box {
		height: 100%;
		li {
			display: flex;
			align-items: center;
		}
	}
	li.appDonload {
		padding: 0 0.75rem;
		cursor: pointer;
		transition: .3s all;
		img.QRCode {
			display: block;
			width: 100%;
			height: auto;
		}
		.appQRcode {
			width: 160px;
			position: absolute;
			z-index: 999;
			top: 100%;
			right: 0;
			padding: 1rem 1rem .5rem;
			background: #fff;
			border-radius: 0 0 8px 8px;
			box-shadow: 0 4px 0 rgba(43,43,43,.1);
			border: 1px solid rgba(43,43,43,.1);
			font-size: 14px;
			text-align: center;
			display: none;
		}
		&::before, &::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 40%;
			background-color: #9C9C9C;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
		}
		&::after {
			left: auto;
			right: 0;
		}
		&:hover {
			.appQRcode {
				display: block;
			}
		}
	}
	li.socialMedia {
		padding-left: .75rem;
		a {
			margin-left: .75rem;
		}
	}

	svg {
		width: 100%;
		path {
			fill: #fff;
		}
	}
}
header.white {
	background-color: #fff;
	svg {
		width: 100%;
		path {
			fill:var(--pchomeRed);
		}
	}
}

</style>
