<template>
	<div class="subTitle" v-if="item.Link.Text2">
		{{ item.Link.Text2 }}
	</div>
	<a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
		<div class="note n1" v-if="item.Link.Text">{{ item.Link.Text }}</div>
		<div class="note n2" v-if="item.Link.Text3">{{ item.Link.Text3 }}</div>
		<img :src="item.Img.Src" class="heroImg absolute" :alt="item.Link.Text">
		<img src="@/assets/new/hero-new.png" class="d-block" alt="bg">
	</a>
</template>

<script>

import { linkMixin } from '../mixin.js';
export default {
    name: 'slideBnTemplate',
	mixins: [linkMixin],
	props: ['item', 'index'],
};
</script>

<style lang="scss" scoped>
a {
	position: relative;
	display: block;
	border-radius: 1.25rem;
	overflow: hidden;
	img {
		border-radius: 1rem;
		transition: .3s;
		border-radius: 1.25rem;
	}
	img.heroImg {
		transform: translate(-50%, 0) !important;
		width: auto;
		height: 100%;
		pointer-events: none;
	}
	&:hover img.heroImg {
		transform: translate(-50%, 0) !important;
		filter: brightness(1.1);
		@media only screen and (max-width: 991px) {
			filter: none;
		}
	}
	.note {
		display: block;
		position: absolute;
		top: .6rem;
		right: 0;
		color: #ce0238;
		font-weight: 500;
		background-color: #fff;
		padding: 0 .6rem;
		z-index: 1;
		border-radius: 10rem 0 0 10rem;
	}
}
</style>
