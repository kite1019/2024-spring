<template>
	<a class="onSaleNowFirst" href="#dailysale" @click.prevent="scrollto()">
		<div class="title">整點瘋殺賞</div>
		<div class="main">
			<div class="pic"><img :src="item.image" :alt="item.name" class="d-block"></div>
			<div class="slogag">{{item.slogan}}</div>
			<div class="price">
				<small>${{item.price.origin}}</small> <strong><i>$</i>{{item.price.onsale}}</strong>
			</div>
		</div>
	</a>
</template>

<script>

export default {
    name: 'onSaleNowFirstTemplate',
	props: ['item'],
	methods: {
		scrollto() {
			//#dailysale
			const viewOnSaleAll = document.getElementById("dailysale");
			viewOnSaleAll.scrollIntoView({ behavior: 'smooth' });
		}
	}
};
</script>

<style lang="scss" scoped>
.onSaleNowFirst {
	width: 100%;
	height: 100%;
	color: #f01b34;
	position: relative;
	padding: 0 10px 0;
	// padding: 0 10px 7px;
	// @media only screen and (max-width: 640px) {
	// 	padding: 0 5px 7px;
	// }
	&::before {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 96%;	
		border-radius: 20px;
		background: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='black' stroke-width='6' stroke-dasharray='10%2c 13' stroke-dashoffset='6' stroke-linecap='square'/%3e%3c/svg%3e") top center no-repeat;
		background-size: 99.8% 100%;
		pointer-events: none;
		@media only screen and (max-width: 640px) {
			border-radius: 10px;
			background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23333' stroke-width='5' stroke-dasharray='5%2c 10' stroke-dashoffset='27' stroke-linecap='square'/%3e%3c/svg%3e");
		}
	}
	.title, .slogag {
		text-align: center;
		position: relative;
		z-index: 1;
	}
	.title {
		font-size: 1.3rem;
		font-weight: 500;
		color: #fff;
		background-color: #f01b34;
		border-radius: 1.25rem 1.25rem 0 0;
		width: 85%;
		margin: 0 auto;
		@media only screen and (max-width: 640px) {
			font-size: 1rem;
			width: 80%;
		}
	}
	.main {
		background-color: #fff;
		border-radius: 0 0 18px 18px;
		padding: .3rem 0 7px;
	}
	.pic {
		width: 92%;
		margin: auto;
		transition: .3s all;
		@media only screen and (max-width: 991px) {
			width: 86%;
		}
		@media only screen and (max-width: 640px) {
			width: 85%;
		}
	}
	.slogag {
		width: 100%;
		color: #000;
		margin: 3px 0 5px;
		font-size: 1.05rem;
		font-weight: 500;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		@media only screen and (max-width: 640px) {
			font-size: 15px;
		}
	}
	.price {
		text-align: center;
		font-family: Montserrat, "Noto Sans TC";
		line-height: 1;
		strong {
			font-size: 2.25rem;
			font-weight: 800;
			@media only screen and (max-width: 640px) {
				font-size: 26px;
			}
			i {
				font-weight: 600;
				font-size: 60%;
				font-family: "Noto Sans TC", sans-serif;
			}
		}
		small {
			color: #8e8e8e;
			font-size: 1.1rem;
			font-weight: 400;
			text-decoration-line: line-through;
			@media only screen and (max-width: 640px) {
				font-size: 13px;
			}
			@media only screen and (max-width: 360px) {
				font-size: 11px;
			}
		}
	}
	&:hover .pic {
		filter: brightness(1.2);
		@media only screen and (max-width: 991px) {
			filter: none;
			transform: none;
		}
	}
}

</style>
