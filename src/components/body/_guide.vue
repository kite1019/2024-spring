<template>
    <ul class="row justify-content-center">
        <template v-for="(item, index) in cate" :key="index">
            <li>
                <a :href="getLinkUrl(item)" :class="item.Link.Url === '#nolink' ? 'pe-none' : ''" :target="target(item)" @click="goTo($event, item)">
                    <img :src="item.Img.Src" alt="分會場" class="d-block">
                </a>
            </li>
        </template>
    </ul>
</template>

<script>
import { linkMixin } from '../mixin.js';

export default {
    name: 'guideTemplate',
	mixins: [linkMixin],
	props: ['cate'],
}
</script>


<style lang="scss" scoped>
    ul {
        margin-bottom: -1.2rem;
        @media only screen and (max-width: 991px) {
            margin: 0;
        }
        li {
            width: calc(100% / 7);
            margin-bottom: 1.2rem;
            @media only screen and (max-width: 991px) {
                width: calc(100% / 5);
                padding: 0 5px;
                margin-bottom: 1rem;
            }
            @media only screen and (max-width: 767px) {
                padding: 0;
            }
        }
        a {
            display: block;
            transition: .3s ease;
            &:hover {
                transform: scale(1.08);
                filter: brightness(1.1);
                @media only screen and (max-width: 991px) {
                    filter: none;
                    transform: none;
                }
            }
        }
    }
</style>
