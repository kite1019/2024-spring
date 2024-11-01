<template>
	<li :class="item.Link.Text">
		<a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
			<div class="pic"><img :src="item.Img.Src" class="d-block" :alt="item.Link.Text"></div>
		</a>
	</li> 
</template>

<script>

import { linkMixin } from '../mixin.js';
export default {
    name: 'onlyBn',
	mixins: [linkMixin],
	props: ['item', 'index'],
};
</script>

<style lang="scss" scoped>
    li {
        margin-bottom: 1rem;
    }
</style>
