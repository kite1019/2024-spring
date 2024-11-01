<template>
    <!-- 超強破盤 -->
    <div class="container p-0">
        <div class="topBox">
            <div class="title"><img src="@/assets/work/H6-9-big.png" alt="超強破盤"></div>
            <div class="deco"><img src="@/assets/work/deco_hotsale.png" alt="超強破盤" class="d-block"></div>
        </div>
    </div>

    <div class="container promoMainBox">
        <OverlayScrollbarsComponent defer>
            <ul class="row promo">    
                <template v-for="item in data" :key="item.uniqueIdentifier">
                    <li class="col-2">
                        <a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
                            <div class="pic"><img :src="item.Img.Src" class="d-block" :alt="item.Link.Text"></div>
                            <div class="hotline">{{ item.Link.Text2 }}</div>
                            <div class="pd_title">{{ item.Link.Text }}</div>
                            <div class="price">
                                <small>{{ item.Link.Text3 === '' ? '' : '$' + item.Link.Text3 }}</small>
                                <strong><i>$</i>{{ item.Link.Text1 }}</strong>
                            </div>
                        </a>
                    </li> 
                </template>
            </ul>
        </OverlayScrollbarsComponent>
    </div>
</template>

<script>
import { linkMixin } from '../mixin.js';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

export default {
    name: 'bodyPDTemplate',
	props: ['item', 'index', 'data'],
	mixins: [linkMixin],
    components: {
        OverlayScrollbarsComponent
    },
    mounted() {
    }
};
</script>
<style lang="scss" scoped>
</style>