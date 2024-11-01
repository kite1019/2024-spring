<template>
	<swiper
		:modules="modules"
		:loop="true"
		:effect="'coverflow'"
		:grabCursor="true"
		:pagination="{ clickable: true }"
        :speed="1000"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
        }"
		:coverflowEffect="{
			rotate: 35,
			stretch: 0,
			depth: 110,
			modifier: 1,
			slideShadows: false,
		}"
		:breakpoints="{
			'320': { slidesPerView: 1.7, spaceBetween: 10, loopedSlides: 2, centeredSlides: true, },
			'768': { slidesPerView: 2.4, spaceBetween: 20, loopedSlides: 3, centeredSlides: true,},
			'1024': { slidesPerView: 2.8, spaceBetween: 20, loopedSlides: 3, centeredSlides: true, },
			'1025': { slidesPerView: 4.2, spaceBetween: 10, loopedSlides: 4, centeredSlides: true, },
		}"
		:freeMode="false"
	>
		<swiper-slide v-for="item in data" :key="item.uniqueIdentifier">
            <a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
                <main>
                    <div class="pic"><img :src="item.Img.Src" class="d-block" :alt="item.Link.Text"></div>
                    <div class="hotline">{{ item.Link.Text2 }}</div>
                    <div class="pd_title">{{ item.Link.Text }}</div>
                    <div class="price">
                        <small>{{ item.Link.Text3 === '' ? '' : '$' + item.Link.Text3 }}</small>
                        <strong><i>$</i>{{ item.Link.Text1 }}</strong>
                    </div>
                </main>
                <img src="@/assets/new/new_list_card_bg.png" alt="bg" class="bg d-block">
			</a>
		</swiper-slide>
	</swiper>
</template>

<script>

import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/bundle'
import 'swiper/css/effect-coverflow';
import { linkMixin } from '../mixin.js';

export default {
    name: 'pdSlideTemplate',
	mixins: [linkMixin],
    components: {
        Swiper,
        SwiperSlide,
	},
	props: ['item', 'index', 'data'],
    setup() {
        return {
            modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
        }
    },
}
</script>

<style lang="scss" scoped>
$priceColor: #ff5b47;
$txtColor: #303321;
.swiper {
    padding-bottom: 3.5rem !important;
    a {
		position: relative;
        display: block;
        width: 100%;
        height: 100%;
		text-align: center;
        text-decoration: none;
        transition: .3s all;
        strong, small, b, em {
            font-family: Montserrat, Arial, Helvetica, sans-serif;
        }
    }
    main {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 5rem 1.2rem 0;
        z-index: 1;
        background: url('@/assets/new/new_list_card_bg.png') top center no-repeat;
        background-size: 100%;
        @media only screen and (max-width: 1024px) {
            padding: 8vw 1.2rem 0;
        }
        @media only screen and (max-width: 991px) {
            padding: 12vw 1.2rem 0;
        }
        @media only screen and (max-width: 767px) {
            padding: 16vw 1.2rem 0;
        }
    }
    .pic {
        width: 80%;
        margin: 0 auto;
        img {
            mix-blend-mode: multiply;
        }
    }
    .hotline {
        font-size: 1.15rem;
        font-weight: 400;
        color: #fff;
        background-color: #9069ff;
        border: 2px solid #303321;
		margin-bottom: 5px;
        padding: 3px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        transition: all .3s ease;
        @media only screen and (max-width: 1024px) {
            font-size: 1.8vw;
        }
        @media only screen and (max-width: 991px) {
            font-size: 2.2vw;
        }
        @media only screen and (max-width: 767px) {
            font-size: 15px;
        }
    }
    .pd_title {
		height: 3.1rem;
		font-size: 1.1rem;
        color: #454545;
        font-weight: 500;
		line-height: 1.4;
        margin-bottom: 5px;
        padding: 0 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        @media only screen and (max-width: 1024px) {
            font-size: 1.6vw;
            height: 5vw;
        }
        @media only screen and (max-width: 991px) {
            font-size: 2.2vw;
            height: 6.2vw;
        }
        @media only screen and (max-width: 767px) {
            font-size: 3.3vw;
            height: 9.6vw;
            padding: 0;
            margin: 0 0 1vw;
        }
    }
    .price {
        width: 100%;
        display: flex;
        align-items: baseline;
        justify-content: center;
        strong {
            font-size: 2rem;
            font-weight: bold;
            color: $priceColor;
            display: block;
            line-height: 1;
            @media only screen and (max-width: 1024px) {
                font-size: 3vw;
            }
            @media only screen and (max-width: 991px) {
                font-size: 4.5vw;
            }
            @media only screen and (max-width: 767px) {
                font-size: 7.5vw;
            }
            i {
                font-weight: 500;
                font-size: 60%;
            }
        }
        small {
            display: block;
            font-size: .9rem;
            text-decoration: line-through;
            color: #303321;
            margin-right: 5px;
            @media only screen and (max-width: 1024px) {
                font-size: 1.5vw;
            }
            @media only screen and (max-width: 767px) {
                font-size: 12px;
            }
        }
    }
    .swiper-slide {
        filter: brightness(0.6);
        &.swiper-slide-active {
            filter: brightness(1);
        }
        &.swiper-slide-next {
            transform: translate3d(0px, 0px, -130px) rotateY(-40deg) scale(1) !important;
        }
        &.swiper-slide-prev {
            transform: translate3d(0px, 0px, -130px) rotateX(0deg) rotateY(40deg) scale(1) !important;
        }
    }
    img.bg {
        filter: drop-shadow(6px 7px 18px rgba($color: #000000, $alpha: .25));
        @media only screen and (max-width: 991px) {
            filter: none;
        }
    }
}

</style>
