<template>
    <!-- web -->
    <template v-if="index === 0 || index === 6">
        <li class="d-lg-block d-none big" :id="index">
            <a :href="getLinkUrl(item)" class="p-0" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
                <img :src="item.Img.Src" class="d-block" :alt="item.Link.Text">
            </a>
        </li>
    </template>

    <!-- app -->
    <template v-if="index === 1 || index === 7">
        <li class="col-12 d-lg-none d-block big" :id="index">
            <a :href="getLinkUrl(item)" class="p-0" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
                <img :src="item.Img.Src" class="d-block" :alt="item.Link.Text">
            </a>
        </li>
    </template>

    <!-- body -->
    <template v-if="index >=2 && index <=5 || index >=8 && index <20 ">
        <li class="col-6 col-lg-auto" :id="index">
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
</template>

<script>
import { linkMixin } from '../mixin.js';
export default {
    name: 'sbdbodyPDTemplate',
	mixins: [linkMixin],
	props: ['item', 'index'],
};
</script>

<style lang="scss" scoped>
$priceColor: #ea0651;
$txtColor: #440015;

.sbdbody {
    .col-lg-auto {
        @media (min-width: 992px) {
            width: calc(74% / 4);
            padding: 0 0.5rem;
        }
    }
    li {
        transition: .3s ease;
        transform-origin: 50% 100%;
        @media only screen and (max-width: 991px) {
            margin-bottom: .5rem;
        }
        @media only screen and (max-width: 767px) {
            padding: 0 3px;
        }
        &:hover {
            filter: brightness(1.1);
            transform: scale(1.03);
            @media only screen and (max-width: 991px) {
                transform: none;
            }
        }
        &.big {
            flex: 0 0 auto;
            width: 26%;
            position: relative;
            padding: 0;
            @media only screen and (max-width: 991px) {
                width: 100%;
                padding: 0;
                margin-bottom: 1.5rem;
            }
            a {
                margin: 0;
            }
        }
    }
    a {
        margin-bottom: 2rem;
        display: block;
        width: 100%;
        position: relative;
        text-align: center;
        text-decoration: none;
        @media only screen and (max-width: 991px) {
            margin-top: 0;
        }
        strong, small, b, em {
            font-family: Montserrat, Arial, Helvetica, sans-serif;
        }
    }
    .pic {
        border: 1px solid #000;
        border-width: 2px 2px 0px 2px;
        position: relative;
        z-index: 1;
    }
    .hotline {
        font-size: 1.15rem;
        font-weight: 500;
        color: #fff;
        line-height: 1.8;
        padding: 0 5px;
        border: 2px solid #000;
        background-color: #9069ff;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        position: relative;
        z-index: 0;
        @media only screen and (max-width: 640px) {
            font-size: 18px;
        }
    }
    .pd_title {
        color: $txtColor;
        font-weight: 500;
        font-size: 1.05rem;
        line-height: 2;
        padding: 0 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        background-color: #dedede;
        border: 1px solid #fff;
        border-width: 0 2px;
        @media only screen and (max-width: 1024px) {
            -webkit-line-clamp: 2;
            line-height: 1.4;
            height: 3rem;
        }
        @media only screen and (max-width: 640px) {
            font-size: 16px;
        }
    }
    .price {
        width: 100%;
        display: flex;
        align-items: baseline;
        justify-content: center;
        padding: 10px 5px 5px;
        background-color: #dedede;
        border: 1px solid #fff;
        border-width: 0 2px 2px 2px;
        @media only screen and (max-width: 640px) {
            padding: 5px;
        }
        strong {
            font-size: 1.95rem;
            font-weight: bold;
            color: $priceColor;
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
        small {
            display: block;
            font-size: .9rem;
            text-decoration: line-through;
            color: #303321;
            margin-right: 5px;
            @media only screen and (max-width: 640px) {
                font-size: 10px;
            }
        }
    }
}
</style>
