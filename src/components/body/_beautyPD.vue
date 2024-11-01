<template>
    <ul class="row justify-content-center beautyPD">
        <template v-for="(item, index) in data" :key="index">
            <li class="big" v-if="index <= 1">
                <a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
                    <div class="pic">
                        <img :src="item.Img.Src" class="d-block" :alt="item.Link.Text">
                    </div>
                    <div class="pd_title">{{ item.Link.Text }}</div>
                    <div class="price">
                        <small>{{ item.Link.Text3 === '' ? '' : '$' + item.Link.Text3 }}</small>
                        <strong>{{ item.Link.Text1 }}</strong>
                    </div>
                </a>
            </li>
            <li class="col-lg-3 col-6 small" v-else>
                <a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
                    <div class="pic">
                        <img :src="item.Img.Src" class="d-block" :alt="item.Link.Text">
                    </div>
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
</template>

<script>
import { linkMixin } from '../mixin.js';

export default {
    name: 'beautyPDTemplate',
	mixins: [linkMixin],
	props: ['data'],
};
</script>

<style lang="scss" scoped>
$priceColor: #ea0651;
.beautyPD {
    a {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: .3s ease;
        &:hover {
            filter: brightness(1.1);
            @media only screen and (max-width: 991px) {
                transform: none !important;
            }
        }
    }
    .pic {
        margin: 0 auto;
    }
    .pd_title {
        color: #481c0f;
        font-weight: 500;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
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
            color: #481c0f;
        }
        strong {
            color: $priceColor;
            font-weight: bold;
            display: block;
            line-height: 1;
            i {
                font-weight: 500;
                font-size: 60%;
            }
        }
    }
    li.big {
        width: 43%;
        margin-bottom: 1.8rem;
        @media only screen and (max-width: 991px) {
            width: 85%;
        }
        a {
            background: url('@/assets/new/beauty_stage_big.png') top center no-repeat;
            background-size: 100%;
            padding-top: 2rem;
            @media only screen and (max-width: 991px) {
                padding-top: 6vw;
            }
            &:hover {
                transform: scale(1.03);
            }
        }
        .pic {
            width: 80%;
        }
        .pd_title {
            font-size: 1.75rem;
            margin: 2rem 0 0;
            @media only screen and (max-width: 991px) {
                margin: 3vw 0 0;
                font-size: 4.6vw;
            }
        }
        .price {
            margin-top: 1rem;
            @media only screen and (max-width: 991px) {
                margin-top: 5vw;
            }
            small {
                font-size: 1.3rem;
                margin-right: 5px;
                @media only screen and (max-width: 991px) {
                    font-size: 4.5vw;
                }
            }
            strong {
                font-size: 3.3rem;
                @media only screen and (max-width: 991px) {
                    font-size: 10vw;
                }
            }
        }
    }
    li.small {
        @media only screen and (max-width: 991px) {
            margin-bottom: 10px;
        }
        a {
            background: url('@/assets/new/beauty_stage_small.png') top center no-repeat;
            background-size: 100%;
            padding-top: 0.8rem;
            @media only screen and (max-width: 991px) {
                padding-top: 1vw;
            }
            &:hover {
                transform: scale(1.05);
            }
        }
        .pic {
            width: 82%;
        }
        .hotline {
            width: 90%;
            margin: 2.5rem auto 0;
            background: linear-gradient(to bottom,  #9aa7eb 0%,#c266d9 100%);
            color: #fff;
            font-size: 1.3rem;
            font-weight: 500;
            line-height: 2;
            border-radius: 50px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            @media only screen and (max-width: 991px) {
                margin-top: 7vw;
                width: 95%;
            }
            @media only screen and (max-width: 767px) {
                font-size: 16px;
            }
        }
        .pd_title {
            font-size: 1.2rem;
            margin: .3rem 0 0;
            @media only screen and (max-width: 991px) {
                font-size: 15px;
            }
        }
        .price {
            margin-top: 0.5rem;
            small {
                font-size: 1rem;
                margin-right: 5px;
                @media only screen and (max-width: 991px) {
                    font-size: 12px;
                }
            }
            strong {
                font-size: 2.35rem;
                @media only screen and (max-width: 991px) {
                    font-size: 6.5vw;
                }
                i {
                    font-weight: 500;
                    font-size: 60%;
                }
            }
        }

    }
}

</style>
