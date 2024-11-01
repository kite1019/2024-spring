<template>
    <li class="col-lg-4 col-md-6 col-12">
        <a :href="'https://24h.pchome.com.tw/prod/' + item.id" target="_blank">
            <div class="slogag">
                <span>{{ item.slogan }}</span>
            </div>
            <div class="main">
                <div class="pic">
                    <img :src="item.image + '?width=320'" :alt="item.name" class="d-block"></div>
                    <div class="content">
                        <div class="name">{{ item.name }}</div>
                        <div class="price">
                            <strong>
                                <i>$</i>{{ item.price.onsale }}
                                <i class="unit" v-if="item.price.unit">/{{ item.price.unit }}</i>
                            </strong>
                            <small>${{ item.price.origin }}</small>
                            <div class="btn">
                                <img src="@/assets/new/onsale_btn.png" alt="馬上搶" class="d-block"></div>
                            </div>
                        </div>
                    </div>
                    <img src="@/assets/new/onsale_bg.png" alt="bg" class="bg d-block"></a>
                </li>
            </template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style lang="scss" scoped>

.onsale__box {
    @media only screen and (max-width: 991px) {
        padding: 0 1rem;
    }
    li {
        margin-bottom: 2rem;
        @media only screen and (max-width: 991px) {
            padding: 0 8px;
        }
    }
    a {
        position: relative;
        display: block;
        height: 100%;
        color: #3c3c3c;
        padding: 0.5rem 1rem 1.5rem .8rem;
        transition: .3s all;
        &:hover {
            filter: brightness(1.2);
            transform: scale(1.04);
            @media only screen and (max-width: 991px) {
                filter: none;
                transform: none;
            }
        }
    }
    .slogag {
        width: 100%;
        height: 2.7rem;
        position: relative;
        z-index: 1;
        background: url('@/assets/new/onsale_slogag.png') top center no-repeat;
        background-size: 100% 100%;
        text-align: center;
        margin: -1.15rem 0 7px;
        span {
            padding-top: 0.7rem;
            font-size: 1.2rem;
            font-weight: 500;
            color: #000;
            line-height: 1;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            @media only screen and (max-width: 991px) {
                font-size: 15px;
            }
            @media only screen and (max-width: 767px) {
                font-size: 4.5vw;
            }
        }
        img {
            width: 16rem;
            position: absolute;
            top: 0;
        }
    }
    .main {
        display: grid;
        grid-template-columns: 45% auto;
        gap: 3%;
        position: relative;
        z-index: 1;
    }
    .pic {
        border-radius: 6px;
        overflow: hidden;
    }
    .content {
        position: relative;
        @media only screen and (max-width: 991px) {
            padding-bottom: 5.5rem;
        }
    }
    .name {
        height: 4.63rem;
        color: #440015;
        font-size: 1.05rem;
        line-height: 1.4;
        font-weight: 500;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        @media only screen and (max-width: 991px) {
            font-size: 2vw;
            height: auto;
            line-height: 1.35;
        }
        @media only screen and (max-width: 767px) {
            font-size: 4vw;
        }
    }
    .price {
        width: 100%;
        font-family: Montserrat, "Noto Sans TC";
        background: url('@/assets/new/onsale_price.png');
        background-size: 100%;
        background-position: top 19px left;
        position: absolute;
        bottom: 0;
        left: 0;
        @media only screen and (max-width: 767px) {
            background-position: top 4vw left;
        }
        strong {
            font-size: 1.9rem;
            font-weight: 700;
            color: #ea1717;
            display: block;
            text-align: right;
            line-height: 1;
            @media only screen and (max-width: 991px) {
                font-size: 3.5vw;
            }
            @media only screen and (max-width: 767px) {
                font-size: 7vw;
                padding-right: 1vw;
            }
            i {
                font-weight: 500;
                font-size: 60%;
            }
        }
        small {
            display: block;
            line-height: 1;
            font-size: 1rem;
            text-decoration: line-through;
            color: #8e8e8e;
            padding-left: 0.5rem;
            margin-top: -0.4rem;
            @media only screen and (max-width: 991px) {
                margin-top: 0;
                font-size: 11px;
            }
            @media only screen and (max-width: 767px) {
                font-size: 12px;
            }
        }
        .btn {
            float: right;
            padding: 5px 8px 0 0;
            width: 6.8rem;
            @media only screen and (max-width: 767px) {
                width: 25vw;
                padding-right: 1vw;
            }
        }
    }
    img.bg {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>