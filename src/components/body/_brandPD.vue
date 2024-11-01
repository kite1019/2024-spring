<template>
    <template v-if="index === 0 || index === 5">
        <li class="col-12 big">
            <a :href="getLinkUrl(item)" class="p-0" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
                <!-- <div class="">
                    <img :src="item.Img.Src" class="d-block" :alt="item.Link.Text">
                </div> -->

                <img :src="item.Img.Src" class="heroImg absolute" :alt="item.Link.Text">
                <img src="@/assets/new/hero-new.png" class="d-block" alt="bg">
            </a>
        </li>
    </template>
    <template v-else>
        <li class="col-6">
            <a :href="getLinkUrl(item)" class="" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
                <div class="hotline">{{ item.Link.Text2 }}</div>
                <div class="box">
                    <div class="pic">
                        <img :src="item.Img.Src" class="d-block" :alt="item.Link.Text">
                    </div>
                    <div class="content">
                        <div class="pd_title">{{ item.Link.Text }}</div>
                        <div class="price">
                            <small>{{ item.Link.Text3 === '' ? '' : '$' + item.Link.Text3 }}</small>
                            <strong><i>$</i>{{ item.Link.Text1 }}</strong>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    </template>

</template>

<script>
import { linkMixin } from '../mixin.js';

export default {
    name: 'brandPDTemplate',
	mixins: [linkMixin],
	props: ['item', 'index'],
};
</script>

<style lang="scss" scoped>
$brandColor:#008bec;
.brandPD {
    li {
        padding: 0 .4rem;
        margin-bottom: 1.5rem;
        @media only screen and (max-width: 640px) {
            padding: 0 5px;
            margin-bottom: .8rem;
        }
        &.big {
            // img {
            //     border: 2px solid #303321;
            //     border-radius: 1rem;
            //     overflow: hidden;
            //     transition: .3s all;
            // }
            // a {
            //     background: transparent;
            //     border: 0;
            // }
            // a:hover img {
            //     filter: brightness(1.15);
            //     transform: scale(1.03);
            //     @media only screen and (max-width: 991px) {
            //         filter: none;
            //         transform: none;
            //     }
            // }
            a {
                border: 2px solid #303321;
                position: relative;
                display: block;
                border-radius: 1rem;
                overflow: hidden;
                img {
                    border-radius: 1rem;
                    transition: .3s;
                    border-radius: 1rem;
                    z-index: 1;
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
        }
    }
    a {
        display: block;
        height: 100%;
        position: relative;
        top: 0;
        padding: 4px;
        margin: 0;
        text-decoration: none;
        background-color: #9069ff;
        border: 2px solid #60009d;
        transition: .3s all;
        @media only screen and (max-width: 767px) {
            padding: 4px; 
            border-radius: 5px;
        }
    }
    .box {
        display: flex;
        background-color: #fff;
        padding: 8px 7px;
        background: linear-gradient(to right,  #efe4ff 0%,#ffffff 41%,#ffffff 64%,#efe4ff 100%);
        position: relative;
        @media only screen and (max-width: 1024px) {
            padding: 5px 4px;
        }
        @media only screen and (max-width: 640px) {
            flex-wrap: wrap;
        }
        &::before {
            content: '';
            width: 30px;
            height: 25px;
            background-color: #9069ff;
            border-radius: 150%;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -18px);
            z-index: 2;
            // pointer-events: none;
            @media only screen and (max-width: 640px) {
                width: 25px;
                height: 20px;
                transform: translate(-50%, -15px);
            }
        }
    }
    .pic {
        width: 48%;
        padding: 0;
        overflow: hidden;
        @media only screen and (max-width: 640px) {
            width: 100%;
            order: 1;
        }
    }
    .content {
        width: 52%;
        padding: 8px 0 0 8px;
        position: relative;
        @media only screen and (max-width: 640px) {
            width: 100%;
            padding: 0;
            margin-top: 5px;
            order: 3;
        }
    }
    .hotline {
        position: relative;
        z-index: 3;
        margin: 0 auto .3rem;
        color: #fff;
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 1.5;
        text-align: center;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        @media only screen and (max-width: 991px) {
            width: 100%;
        }
        @media only screen and (max-width: 640px) {
            // margin: 5px auto 0;
            font-size: 16px;
            order: 2;
        }
    }
    .pd_title {
        line-height: 1.3;
        font-size: 1rem;
        font-weight: 500;
        color: #440015;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        @media only screen and (max-width: 640px) {
            font-size: 14px;
            height: 43px;
            line-height: 1.4;
            margin-bottom: 5px;
        }
        @media only screen and (max-width: 350px) {
            font-size: 13px;
            height: 38px;
        }
    }
    .price {
        width: 100%;
        font-family: Montserrat, "Noto Sans TC";
        position: absolute;
        bottom: 5px;
        @media only screen and (max-width: 640px) {
            position: static;
            display: flex;
            justify-content: center;
            align-items: baseline;
            line-height: 1;
        }
        strong {
            font-size: 1.6rem;
            font-weight: 700;
            color: #f01b34;
            display: block;
            line-height: 1;
            @media only screen and (max-width: 991px) {
                font-size: 1.4rem;
            }
            @media only screen and (max-width: 767px) {
                // font-size: 6vw;
            }
            i {
                font-weight: 500;
                font-size: 60%;
            }
        }
        small {
            display: block;
            line-height: 1;
            font-size: 80%;
            text-decoration: line-through;
            color: #8e8e8e;
            @media only screen and (max-width: 991px) {
                line-height: inherit;
                margin-right: 3px;
                font-size: 12px;
            }
            @media only screen and (max-width: 350px) {
                font-size: 11px;
            }
        }
    }
    a, img, .hotline {
        transition: .3s all;
    }
    a:hover {
        transform: scale(1.03);
        @media only screen and (max-width: 991px) {
            filter: none;
            transform: none;
        }
        img {
            filter: brightness(1.15);
            @media only screen and (max-width: 991px) {
                filter: none;
                transform: none;
            }
        }
        // .hotline {
        //     color: #fff;
        //     background-color: #aeacfe;
        // }
    }
}
</style>
