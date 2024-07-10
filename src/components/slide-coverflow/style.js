import styled from 'styled-components';
import { onsaleOnsaleAct } from '../../assets/layout';

export const SlideCard = styled.div`
	a {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		text-decoration: none;
		transition: .3s all;
		strong, small, b, em {
			font-family: Montserrat, Arial, Helvetica, sans-serif;
		}
	}
    main {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 3rem 1.6rem 0 1.2rem;
    }
    .pic {
        width: 80%;
        margin: 0 auto;
        img {
            mix-blend-mode: multiply;
        }
    }
    .hotline {
        font-size: 1.15rem;
        font-weight: 400;
        color: #fff;
        background-color: #a680cc;
		margin-bottom: 5px;
        padding: 3px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        transition: all .3s ease;
        @media only screen and (max-width: 767px) {
            font-size: 15px;
        }
    }
    .pd_title {
		height: 3.1rem;
		font-size: 1.1rem;
        color: #454545;
        font-weight: 500;
		line-height: 1.4;
        margin-bottom: 5px;
        padding: 0 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        @media only screen and (max-width: 767px) {
            height: 44px;
			font-size: 15px;
            margin-bottom: 2vw;
        }
    }
    .price {
        width: 100%;
        display: flex;
        align-items: baseline;
        justify-content: center;
        strong {
            font-size: 2rem;
            font-weight: bold;
            color: $priceColor;
            display: block;
            line-height: 1;
            i {
                font-weight: 500;
                font-size: 60%;
            }
        }
        small {
            display: block;
            font-size: .9rem;
            text-decoration: line-through;
            color: #aaaaaa;
            margin-right: 5px;
        }
    }
    .swiper-slide {
        filter: brightness(0.6);
        &.swiper-slide-active {
            filter: brightness(1);
        }
        &.swiper-slide-next {
            transform: translate3d(0px, 0px, -130px) rotateY(-40deg) scale(1) !important;
        }
        &.swiper-slide-prev {
            transform: translate3d(0px, 0px, -130px) rotateX(0deg) rotateY(40deg) scale(1) !important;
        }
    }
	
`;


