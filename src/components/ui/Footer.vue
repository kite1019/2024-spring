<template>
  <div class="footer">
      <div class="container">
			<ul class="socialMedia d-flex align-items-center justify-content-center">
				<li class="title">追蹤我們 <img src="@/assets/ui/socialMedia-arrow.svg" class="icon--arrow"></li>
				<li><a href="https://www.facebook.com/pchome24h/" target="_blank"><img src="@/assets/ui/icon-fb-mb.png" class="d-block" alt="facebook"></a></li>
				<li><a href="https://www.instagram.com/pchome24h/" target="_blank"><img src="@/assets/ui/icon-ig-mb.png" class="d-block" alt="instagram"></a></li>
				<li><a href="https://line.me/R/ti/p/@pchome24h" target="_blank"><img src="@/assets/ui/icon-line-mb.png" class="d-block" alt="Line"></a></li>
				<li><a href="https://www.youtube.com/@PChome24h" target="_blank"><img src="@/assets/ui/icon-yt-mb.png" class="d-block" alt="youtube"></a></li>
			</ul>
			<div class="text">
				適用商品請依商品頁顯示為主。本活動頁商品規格、顏色、價位、贈品如與銷售網頁不符，以銷售網頁標示為準！<br>
				網路家庭版權所有Copyright PChome Online版權所有，轉載必究<br>
				活動係由本公司主辦，蘋果公司(Apple Inc.)並非活動贊助商，亦未以任何形式參與本活動
			</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'FooterTemplate',
};
</script>

<style lang="scss" scoped>
.footer {
	width: 100%;
	padding: 5rem 0 2rem;
	line-height: 22px;
	font-size: 13px;
	color: #5b4e42;
	position: relative;
	z-index: 1;
    @media only screen and (max-width: 991px) {
		padding: 2.5rem 0;
	}
	.container {
		width: auto;
		max-width: 100%;
		display: grid;
		justify-content: center;
		grid-template-columns: 295px auto;
		gap: 1rem;
		@media only screen and (max-width: 1280px) {
			max-width: 100%;
		}
		@media only screen and (max-width: 991px) {
			display: block;
			text-align: center;
		}
	}
	.text {
		font-size: 13px;
		font-weight: 400;
	}
	.socialMedia {
		@media only screen and (max-width: 991px) {
			margin-bottom: 1rem;
		}
		li {
			width: 30px;
			margin-left: 10px;
			@media only screen and (max-width: 991px) {
				width: 40px;
			}
			a {
				display: block;
				transition: .3s all;
				&:hover {
					transform: scale(1.15);
					@media only screen and (max-width: 991px) {
						transform: none;
					}
				}
			}
			img {
				opacity: 0.9;
				// filter: invert(1);
			}
		}
		.title {
			width: auto;
			font-size: 14px;
			font-weight: 400;
			display: flex;
			margin: 0;
			@media only screen and (max-width: 767px) {
				padding: 0 5px 0 0;
			}
		}
		.icon--arrow {
			width: 50px;
			margin-left: 7px;
			@media only screen and (max-width: 767px) {
				width: 40px;
			}
		}
	}
}
</style>
