<template>
	<li class="col-lg-3 col-6">
        <a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
			<div class="box__t">
                <div class="pic"><img :src="item.Img.Src" class="d-block" :alt="item.Link.Text"></div>
            </div>
            <div class="hotline">{{ item.Link.Text2 }}</div>
            <div class="box__b">
                <div class="pd_title">{{ item.Link.Text }}</div>
                <div class="price">
                    <small>{{ item.Link.Text3 === '' ? '' : '$' + item.Link.Text3 }}</small>
                    <strong><i>$</i>{{ item.Link.Text1 }}</strong>
                </div>
            </div>
		</a>
	</li> 
</template>

<script>

import { linkMixin } from '../mixin.js';
export default {
    name: 'bodyPDTemplate',
	mixins: [linkMixin],
	props: ['item', 'index'],
};
</script>

<style lang="scss" scoped>
$priceColor: #ffcd1e;
.brandPDPower {
    li {
        padding: 0 8px;
        margin-bottom: 20px;
        @media only screen and (max-width: 991px) {
            padding: 0 5px;
        }
        @media only screen and (max-width: 767px) {
            // padding: 0 3px;
        }
    }
    a {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        text-align: center;
        transition: .3s all;
        &:hover {
            filter: brightness(1.1);
            transform: scale(1.03);
            @media only screen and (max-width: 991px) {
                transform: none !important;
            }
        }
    }
    .box__t {
        background: url('@/assets/new/focus_pdbg_1.png') top center no-repeat;
        background-size: 100% 100%;
        padding: 1.2rem 1.2rem 0.7rem;
        @media only screen and (max-width: 640px) {
            padding: 8px 8px 5px;
        }
    }
    .box__b {
        background: url('@/assets/new/focus_pdbg_3.png') top center no-repeat;
        background-size: 100% 100%;
        padding: 0.5rem 1rem;
        @media only screen and (max-width: 640px) {
            padding: 5px 8px 8px;
        }
    }
    .pic {
        margin: 0 auto;
        border-radius: 10px;
        overflow: hidden;
        -webkit-mask: -webkit-radial-gradient(circle, white 100%, black 100%);
    }
    .hotline {
        font-size: 1.25rem;
        font-weight: 500;
        color: #fdff00;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        padding: 0.3rem 0 0.25rem;
        transition: all .3s ease;
        background: url('@/assets/new/focus_pdbg_2.png') top center no-repeat;
        background-size: 100% 100%;
        @media only screen and (max-width: 640px) {
            font-size: 15px;
            padding: 3px 10px;
        }
    }
    .pd_title {
        // height: 2.9rem;
        color: #fff;
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        margin: 0 0 0.5rem;
        @media only screen and (max-width: 640px) {
            font-size: 16px;
            // height: 44px;
            // padding: 0 5px;
            margin-bottom: 5px;
        }
    }
    strong, small, b, em {
        font-family: Montserrat, Arial, Helvetica, sans-serif;
        font-size: 125%;
        line-height: 1.3;
    }
    .price {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        small {
            display: block;
            text-decoration: line-through;
            color: #fff;
            font-size: 1rem;
            margin-right: 5px;
            @media only screen and (max-width: 640px) {
                font-size: 11px;
            }
        }
        strong {
            color: $priceColor;
            font-size: 2rem;
            font-weight: bold;
            display: block;
            line-height: 1;
            @media only screen and (max-width: 640px) {
                font-size: 26px;
            }
            i {
                font-weight: 500;
                font-size: 60%;
            }
        }
    }
}


</style>
