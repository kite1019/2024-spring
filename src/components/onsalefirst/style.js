import styled from 'styled-components';

export const OnSaleNoWrapper = styled.div`
    button {
        width: 100%;
        background: transparent;
        border: 0;
        position: relative;
        &:hover .pic {
            filter: brightness(1.1);
            @media only screen and (max-width: 991px) {
                filter: none;
                transform: none;
            }
        }
    }
    img.bg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 0;
    }
	>div {
		text-align: center;
		position: relative;
		z-index: 1;
	}
	.title {
		width: 80%;
		height: 3.8rem;
		margin: 0 auto;
		font-size: 2.1rem;
		font-weight: 600;
		font-style: italic;
		color: #fff;
		line-height: 1.8;
        position: relative;
        z-index: 1;
		@media only screen and (max-width: 991px) {
			font-size: 4vw;
			padding-left: 2vw;
			height: 7vw;
		}
		.icon {
			width: 4.6rem;
			position: absolute;
			bottom: -0.5rem;
			left: 1.5rem;
			@media only screen and (max-width: 991px) {
				width: 8vw;
				bottom: -1vw;
				left: 2vw;
			}
		}
	}
	.main {
		padding: 1.2rem 0 7px;
        position: relative;
        z-index: 1;
	}
	.pic {
		width: 82%;
		margin: auto;
		transition: .3s all;
	}
	.slogag {
		width: 90%;
		height: 4rem;
    	font-size: 1.7rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem auto 3px;
		line-height: 1.1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		@media only screen and (max-width: 991px) {
			font-size: 3.5vw;
			line-height: 1.3;
			height: 11vw;
			margin: 1vw auto 0;
		}
		@media only screen and (max-width: 767px) {
			font-size: 3.5vw;
			height: 10vw;
		}
	}
	.price {
		text-align: center;
		font-family: Montserrat, "Noto Sans TC";
		line-height: 1;
        color: #f01b34;
		margin-bottom: 5px;
		strong {
			font-size: 3rem;
			font-weight: 700;
			font-family: inherit;
			@media only screen and (max-width: 640px) {
				font-size: 7vw;
			}
			i {
				font-weight: 600;
				font-size: 60%;
				font-family: inherit;
			}
		}
		small {
			color: #8e8e8e;
			font-size: 1.1rem;
			font-weight: 400;
			text-decoration-line: line-through;
			@media only screen and (max-width: 640px) {
				font-size: 11px;
			}
		}
	}
`;

