<template>
	<a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
		<img :src="item.Img.Src" class="d-block" :alt="item.Link.Text">
	</a>
</template>

<script>
import { linkMixin } from '../mixin.js';

export default {
    name: 'linkImgTemplate',
	mixins: [linkMixin],
	props: ['item', 'index'],
};
</script>

<style lang="scss" scoped>
a {
	img {
		transition: .3s;
	}
	&:hover img {
		filter: brightness(1.2);
		transform: scale(1.05);
		@media only screen and (max-width: 991px) {
			filter: none;
			transform: none;
		}
	}
}
</style>
