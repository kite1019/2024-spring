import styled from 'styled-components';

export const SlideWrapper = styled.div`
	/* [class*=col] {
		padding: 0 .5rem;
	} */
	.swiper-slide {
        a {
            position: relative;
            display: block;
            border-radius: 1rem;
            overflow: hidden;
        }
        .heroImg {
            transform: translate(-50%) !important;
            width: auto;
            height: 100%;
            pointer-events: none;
        }
        .bg {
            border-radius: 1.25rem;
        }
        .note {
            display: block;
            position: absolute;
            top: .6rem;
            right: 0;
            padding: 0 .6rem;
            z-index: 1;
            font-size: 1.7rem;
            font-weight: 500;
            background-color: #fe6c84;
            color: #fff;
            border-radius: 0;
            @media only screen and (max-width: 991px) {
                font-size: 1.2rem;
            }
        }
    }
`;
