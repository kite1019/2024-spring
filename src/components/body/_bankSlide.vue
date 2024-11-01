<template>
	<swiper
		:modules="modules"
		:loopedSlides="2"
		:loop="true"
		:space-between="15"
		:speed="600"
		:pagination="{ clickable: true }"
		:breakpoints="{
			'320': { slidesPerView: 1.3, spaceBetween: 10, centeredSlides: true, },
			'768': { slidesPerView: 1.3, spaceBetween: 10, centeredSlides: true,},
			'1024': { slidesPerView: 3, spaceBetween: 20, centeredSlides: true, },
		}"
		:freeMode="false"
		:autoplay="{
			delay: 3000,
			disableOnInteraction: false,
		}"
	>
		<swiper-slide v-for="item in data" :key="item.uniqueIdentifier">
			<a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
				<div class="pic"><img :src="item.Img.Src" class="d-block" :alt="item.Link.Text"></div>
			</a>
		</swiper-slide>
	</swiper>
</template>

<script>

import { linkMixin } from '../mixin.js';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/bundle'

export default {
    name: 'bankSlideTemplate',
	mixins: [linkMixin],
    components: {
        Swiper,
        SwiperSlide,
	},
	props: ['item', 'index', 'data'],
    setup() {
        return {
            modules: [Navigation, Pagination, Autoplay],
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
