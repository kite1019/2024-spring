<template>
	<swiper
		:modules="modules"
		:pagination="{ clickable: true }"
		:breakpoints="{
			'320': { slidesPerView: 2.2, spaceBetween: 0, },
			'768': { slidesPerView: 3.2, spaceBetween: 0, },
			'1024': { slidesPerView: 3.5, spaceBetween: 15, },
			'1025': { slidesPerView: 4.3, spaceBetween: 17, },
		}"
	>
		<swiper-slide v-for="(item, index) in data" :key="item.uniqueIdentifier" :index="index">
            <a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
                <main :class="index === 0 ? 'first' : 'other'">
                    <div class="tag">{{ item.Link.Text1 }}</div>
                    <div class="pd_title">{{ item.Link.Text }}</div>
                    <div class="hotline">{{ item.Link.Text2 }}</div>
                    <div class="pic"><img :src="item.Img.Src" class="d-block" :alt="item.Link.Text"></div>
                    <div class="go" :class="item.Link.Url === '#nolink' ? 'd-none' : ''">GO</div>
                </main>
                <img src="@/assets/new/sbdpreview_bg_1.png" alt="bg" class="bg d-block" v-if="index === 0">
                <img src="@/assets/new/sbdpreview_bg_2.png" alt="bg" class="bg d-block" v-else>
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
	props: ['data'],
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
    padding-bottom: 2rem !important;
    a {
		position: relative;
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        transition: .3s all;
        strong, small, b, em, .tag, .go {
            font-family: Montserrat, Arial, Helvetica, sans-serif;
        }
        &:hover {
            filter: brightness(1.1);
            transform: scale(1.03);
            @media only screen and (max-width: 991px) {
                transform: none;
            }
        }
    }
    main {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 19%;
        z-index: 1;
    }
    .tag {
        width: 50%;
        height: 3.5rem;
        margin-left: 2%;
        text-align: center;
        color: #fff;
        font-size: 2rem;
        font-weight: 800;
        line-height: 1.8;
        @media only screen and (max-width: 991px) {
            height: 6vw;
            font-size: 3.5vw;
            line-height: 2;
        }
        @media only screen and (max-width: 767px) {
            height: 9vw;
            font-size: 5vw;
        }
    }
    .pd_title {
        text-align: center;
        font-style: italic;
		font-size: 1.7rem;
        color: #454545;
        font-weight: 500;
        line-height: 1.5;
        letter-spacing: -1px;
        padding: 0 0.8rem 0 0.7rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        font-weight: 900;
        @media only screen and (max-width: 1024px) {
            font-size: 2vw;
        }
        @media only screen and (max-width: 991px) {
            font-size: 3vw;
        }
        @media only screen and (max-width: 767px) {
            font-size: 4.5vw;
        }
    }
    .pic {
        width: 74%;
        margin: 0 auto;
        border-radius: 10px;
        overflow: hidden;
        -webkit-mask: -webkit-radial-gradient(circle, white 100%, black 100%);
        img {
            mix-blend-mode: multiply;
        }
    }
    .hotline {
        text-align: center;
        font-size: 1.2rem;
        font-weight: 600;
        color: #303421;
        background-color: #ffa65e;
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
            font-size: 2.5vw;
        }
        @media only screen and (max-width: 767px) {
            font-size: 3.8vw;
            padding: 2px;
        }
    }
    .go {
        position: absolute;
        right: 1rem;
        bottom: 0.8rem;
        background-color: #9c00ff;
        font-weight: 900;
        font-size: 1.3rem;
        line-height: 1;
        color: #fff;
        padding: 3px .8rem;
        border-radius: 20px;
        @media only screen and (max-width: 991px) {
            font-size: 2.5vw;
            right: 1.5vw;
            bottom: 1.5vw;
        }
        @media only screen and (max-width: 767px) {
            font-size: 3vw;
            right: 2.5vw;
            bottom: 2vw;
        }
    }
    .swiper-slide {
        padding: 5px;
    }
    img.bg {
        @media only screen and (max-width: 480px) {
            height: 65vw;
        }
    }
}


</style>
