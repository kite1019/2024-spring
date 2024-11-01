<template>
    <!-- 選單 -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" v-if="onSale_0">
            <button class="nav-link now active" data-bs-toggle="tab" data-bs-target="#data_0" role="tab" aria-selected="true">
                <div class="icon"></div>
                {{onSale_0.time}} <span v-if="onSale_0.status === 'now'">現正瘋搶</span>
            </button>
        </li>
        <li class="nav-item" v-if="onSale_1">
            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#data_1" role="tab" aria-selected="false">
                <div class="icon"></div>
                {{onSale_1.time}} 
                <span v-if="onSale_1.status === 'ready'">準時開搶</span>
                <span v-if="onSale_1.status === 'tomorrow'">明天開搶</span>
            </button>
        </li>
        <li class="nav-item" v-if="onSale_2">
            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#data_2" role="tab" aria-selected="false">
                <div class="icon"></div>
                {{onSale_2.time}}
                <span v-if="onSale_2.status === 'ready'">準時開搶</span>
                <span v-if="onSale_2.status === 'tomorrow'">明天開搶</span>
            </button>
        </li>
        <li class="nav-item" v-if="onSale_3">
            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#data_3" role="tab" aria-selected="false">
                <div class="icon"></div>
                {{onSale_3.time}}
                <span v-if="onSale_3.status === 'ready'">準時開搶</span>
                <span v-if="onSale_3.status === 'tomorrow'">明天開搶</span>
            </button>
        </li>
        <li class="nav-item" v-if="onSale_4">
            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#data_4" role="tab" aria-selected="false">
                <div class="icon"></div>
                {{onSale_4.time}}
                <span v-if="onSale_4.status === 'ready'">準時開搶</span>
                <span v-if="onSale_4.status === 'tomorrow'">明天開搶</span>
            </button>
        </li>
    </ul>



    <!-- 內容 -->
    <div class="tab-content">
        <div class="tab-pane fade show active" id="data_0" role="tabpanel" v-if="onSale_0">
            <ul class="row onsale__box" v-if="onSale">
                <ProductItem v-for="(item, index) in onSaleNowAll" :key="index" :item="item" />
                <!-- <template v-for="item in onSaleNowAll" :key="item.uniqueIdentifier">
                    <li class="col-lg-4 col-md-6 col-12">
                        <a :href="'https://24h.pchome.com.tw/prod/'+item.id" target="_blank">
                            <div class="slogag">
                                <span>{{item.slogan}}</span>
                            </div>
                            <div class="main">
                                <div class="pic"><img :src="item.image+'?width=320'" :alt="item.name" class="d-block"></div>
                                <div class="content">
                                    <div class="name">{{ item.name }}</div>
                                    <div class="price">
                                        <strong><i>$</i>{{item.price.onsale}}<i class="unit" v-if="item.price.unit">/{{item.price.unit}}</i></strong>
                                        <small>${{item.price.origin}}</small>
                                        <div class="btn"><img src="@/assets/new/onsale_btn.png" alt="馬上搶" class="d-block"></div>
                                    </div>
                                </div>
                            </div>
                            <img src="@/assets/new/onsale_bg.png" alt="bg" class="bg d-block">
                        </a>
                    </li>
                </template> -->
            </ul>
        </div>
        <div class="tab-pane fade" id="data_1" role="tabpanel" v-if="onSale_1">
            <ul class="row onsale__box">
                <ProductItem v-for="(item, index) in getRandomProducts(onSale_1.products, 6)" :key="index" :item="item" />
            </ul>
        </div>
        <div class="tab-pane fade" id="data_2" role="tabpanel" v-if="onSale_2">
            <ul class="row onsale__box">
                <ProductItem v-for="(item, index) in getRandomProducts(onSale_2.products, 6)" :key="index" :item="item" />
            </ul>
        </div>
        <div class="tab-pane fade" id="data_3" role="tabpanel" v-if="onSale_3">
            <ul class="row onsale__box">
                <ProductItem v-for="(item, index) in getRandomProducts(onSale_3.products, 6)" :key="index" :item="item" />
            </ul>
        </div>
        <div class="tab-pane fade" id="data_4" role="tabpanel" v-if="onSale_4">
            <ul class="row onsale__box">
                <ProductItem v-for="(item, index) in getRandomProducts(onSale_4.products, 6)" :key="index" :item="item" />
            </ul>
        </div>
    </div>

</template>

<script>
import ProductItem from './_onSale_item.vue'
export default {
    name: 'onSaleAllTemplate',
	props: ['onSale', 'onSaleNowAll', 'onSale_0', 'onSale_1', 'onSale_2', 'onSale_3', 'onSale_4'],
    components: {
        ProductItem
    },
    methods: {
        getRandomProducts(products, count) {
            const productsRandom = JSON.parse(JSON.stringify(products));
            for (let i = productsRandom.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [productsRandom[i], productsRandom[j]] = [productsRandom[j], productsRandom[i]];
            }
            // 從洗牌後的數組中取出指定數量的元素
            return productsRandom.slice(0, count);
        },
    },
}
</script>

<style lang="scss" scoped>

.nav-tabs {
    justify-content: center;
    border: 0;
    margin-bottom: 3rem;
    @media only screen and (max-width: 767px) {
        margin: 0 -8px -1rem;
    }
    li {
        margin: 0 .5rem;
        @media only screen and (max-width: 991px) {
            margin: 0 .5rem 1rem;
        }
        @media only screen and (max-width: 991px) {
            margin: 0 5px 10px;
        }
    }
    .nav-link {
        width: 12.5rem;
        font-family: Montserrat, "Noto Sans TC";
        font-size: 2rem;
        font-weight: 600;
        color: #5b4e42;
        line-height: 1;
        background-color: #ffffff;
        border-radius: 100px;
        border: 2px solid #60009d;
        padding: 0.3rem 0;
        @media only screen and (max-width: 991px) {
            width: 26vw;
            font-size: 5vw;
        }
        &:hover {
            border: 2px solid #60009d;
        }
        span {
            display: block;
            font-size: 65%;
            font-weight: 500;
            margin-top: 3px;
        }
        &.active {
            position: relative;
            background: #f01b34;
            color: #fff;
            text-shadow: 1px 1px 0 rgba($color: #fff, $alpha: .5);
            padding-left: 2.5rem;
            margin-left: 1rem;
            border: 2px solid #60009d;
            @media only screen and (max-width: 991px) {
                padding-left: 1.5rem;
                margin-left: 1rem;
            }
            .icon {
                width: 6rem;
                height: 6rem;
                position: absolute;
                top: -30%;
                left: -14%;
                background: url('@/assets/new/onsale_icon.png') top center no-repeat;
                background-size: cover;
                @media only screen and (max-width: 991px) {
                    width: 13vw;
                    height: 14vw;
                    background-size: cover;
                    top: -22%;
                    left: -22%;
                }
            }
        }
    }

}

.tab-content {
    margin-top: 2rem;
    @media only screen and (max-width: 767px) {
        padding: 10px;
    }
}

</style>
