<template>
    <!-- 春日換新 -->
    <div class="promoMainBox">
        <div class="topBox">
            <div class="tabsBox">
                <!-- 選單 -->
                <ul class="nav nav-tabs" id="tabsPDTab" role="tablist">
                    <li class="col-6 nav-item">
                        <button class="nav-link now active" data-bs-toggle="tab" data-bs-target="#tabsPD_01" role="tab" aria-selected="true">
                            <img src="@/assets/new/tabs_button_02.png" alt="春彩大勢" class="d-block">
                        </button>
                    </li>
                    <li class="col-6 nav-item">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tabsPD_02" role="tab" aria-selected="false">
                            <img src="@/assets/new/tabs_button_01.png" alt="居家換季" class="d-block">
                        </button>
                    </li>
                </ul>
                <!-- END // 選單 -->
            </div>
            <div class="title">
                <img class="d-block" src="@/assets/new/sect_title_9.png" alt="春日換新">
            </div>
        </div>


        <div class="tab-content">
            <div class="tab-pane fade show active" id="tabsPD_01" role="tabpanel">
                <OverlayScrollbarsComponent defer>
                    <ul class="row promo">
                        <template v-for="(item, index) in tabs_1" :key="index">
                            <li class="col-2">
                                <a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
                                    <div class="pic"><img :src="item.Img.Src" class="d-block" :alt="item.Link.Text"></div>
                                    <div class="hotline">
                                        {{ item.Link.Text2 }}
                                    </div>
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
            <div class="tab-pane fade" id="tabsPD_02" role="tabpanel">
                <OverlayScrollbarsComponent defer>
                    <ul class="row promo">
                        <template v-for="(item, index) in tabs_2" :key="index">
                            <li class="col-2">
                                <a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
                                    <div class="pic"><img :src="item.Img.Src" class="d-block" :alt="item.Link.Text"></div>
                                    <div class="hotline">
                                        {{ item.Link.Text2 }}
                                    </div>
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
            
        </div>
    </div>
</template>

<script>
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import { linkMixin } from '../mixin.js';

export default {
    name: 'tabsPDTemplate',
	mixins: [linkMixin],
	props: ['tabs_1','tabs_2'],
    components: {
        OverlayScrollbarsComponent,
    },
};
</script>
<style lang="scss" scoped>
$priceColor: #ea0651;
$txtColor: #440015;
.nav-tabs {
    border: 0;
    justify-content: center;
    padding: 0 0.5rem 0 .3rem;
    // margin-top: -3rem;
	@media only screen and (max-width: 991px) {
        width: 80%;
        margin: 0 auto;
    }
	@media only screen and (max-width: 767px) {
        width: 80%;
        // margin: -8vw auto 0;
    }
    li {
        padding: 0 .3rem;
    }
    .nav-link {
        // border: 0;
        width: 100%;
        border: 0;
        padding: 0;
        background: transparent !important;
        filter: saturate(0);
        &.active {
            filter: saturate(1);
        }
    }
}
.topBox {
    display: grid;
    grid-template-columns: 39% auto;
    align-items: start;
    margin: -7rem 0 1rem;

    @media only screen and (max-width: 991px) {
        margin: -11rem 0 1rem;
        display: flex;
        flex-wrap: wrap;
        .tabsBox {
            width: 100%;
            order: 1;
        }
    }
    @media only screen and (max-width: 767px) {
        margin: -30vw 0 1rem;
    }
    >div {
        position: relative;
    }
    .title {
        padding-left: 3rem;
        @media only screen and (max-width: 991px) {
            order: 0;
            padding: 0;
            margin-bottom: 1rem;
        }
        @media only screen and (max-width: 767px) {
            margin-bottom: 3vw;
        }
    }
    
}

.promoMainBox {
    width: 100%;
    position: relative;

    strong, small, b, em {
        font-family: Montserrat, Arial, Helvetica, sans-serif;
    }
    ul.row {
        margin: 0;
        padding: 8px;
        // padding: 1.5rem 1.6rem 1rem;
        @media only screen and (max-width: 1024px) {
            width: 100rem;
            padding-bottom: 20px;
        }
        @media only screen and (max-width: 991px) {
            width: 130vw;
            padding: 0 0 1rem;
        }
        @media only screen and (max-width: 767px) {
            width: 225vw;
        }
        li {
            margin-bottom: 1rem;
            padding: 0 7px;
            @media only screen and (max-width: 991px) {
                padding: 0 5px;
                margin-bottom: .5rem;
            }
            @media only screen and (max-width: 767px) {
                padding: 0 3px;
            }
        }
        a {
            display: block;
            width: 100%;
            height: 100%;
            padding: 5px;
            border-radius: .5rem;
            position: relative;
            text-align: center;
            text-decoration: none;
            background: #fff;
            transition: .3s all;
            @media only screen and (max-width: 991px) {
                font-size: 1rem;   
                line-height: 1.45rem;  
                // padding: 5px 5px 1.8rem;
                background-color: #fff;
            }
            @media only screen and (max-width: 767px) {
                font-weight: 500;
                // padding: 5px 5px 8vw; 
            }
            &:hover {
                filter: brightness(1.1);
                transform: scale(1.03);
                @media only screen and (max-width: 991px) {
                    transform: none;
                }
            }
        }
        .hotline {
            width: 100%;
            position: relative;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.8;
            color: #fff;
            background-color: #303321;
            @media only screen and (max-width: 991px) {
                font-size: 14px;
            }
            @media only screen and (max-width: 480px) {
                font-size: 13px;
            }
        }
        .pd_title {
            color: $txtColor;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.4;
            // height: 3.5rem;
            margin: 0.3rem 0;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            @media only screen and (max-width: 991px) {
                font-size: 14px;
            }
            @media only screen and (max-width: 480px) {
                font-size: 13px;
            }
        }
        .price {
            width: 100%;
            display: flex;
            align-items: baseline;
            justify-content: center;
            strong {
                font-size: 1.75rem;
                font-weight: bold;
                color: $priceColor;
                display: block;
                line-height: 1;
                @media only screen and (max-width: 991px) {
                    font-size: 24px;
                }
                @media only screen and (max-width: 480px) {
                    font-size: 20px;
                }
                i {
                    font-weight: 500;
                    font-size: 60%;
                }
            }
            small {
                display: block;
                font-size: 13px;
                text-decoration: line-through;
                color: #8e8e8e;
                margin-right: 5px;
                @media only screen and (max-width: 991px) {
                    font-size: 11px;
                }
                @media only screen and (max-width: 767px) {
                    display: none;
                }
            }
        }
    }
}
.tab-content {
    position: relative;
    z-index: 6;
    margin: 0 -15px;
	// @media only screen and (max-width: 991px) {
    //     padding: 1rem;
    // }
}
</style>