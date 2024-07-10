import styled from 'styled-components';
import { onsaleOnsaleAct } from '../../assets/layout';

export const TabNavWrapper = styled.div`
	.nav-item {
		margin: 0 .5rem;
	}
	.nav-link {
		width: 12.5rem;
		font-family: Montserrat, "Noto Sans TC";
		font-size: 2rem;
		font-weight: 600;
		color: #ff6565;
		line-height: 1;
		background-color: #fff;
		border: 0;
		border-radius: 100px;
		padding: 0.5rem 0;
		border: 1px solid #fe660f;
		@media only screen and (max-width: 991px) {
			width: 26vw;
			font-size: 5vw;
		}
		/* &:hover {
			border: 1px solid #fe660f;
		} */
		span {
			display: block;
			font-size: 65%;
			margin-top: 3px;
		}
		&.active {
			position: relative;
			background: #fad27a;
			color: #440015;
			background: linear-gradient(to bottom, #ff730c 0%, #fe1d2d 100%);
			color: #fff;
			padding-left: 2.5rem;
			margin-left: 1rem;

			@media only screen and (max-width: 991px) {
				padding-left: 1.5rem;
				margin-left: 1rem;
			}

			.icon {
				width: 6rem;
				height: 6rem;
				position: absolute;
				top: -15%;
				left: -14%;
				background: url(${onsaleOnsaleAct}) top center no-repeat;
				background-size: cover;

				@media only screen and (max-width: 991px) {
					width: 13vw;
					height: 14vw;
					background-size: cover;
					left: -22%;
				}
				@media only screen and (max-width: 767px) {
					top: -10%;
				}
			}
		}
	}
`;

export const TabContentWrapper = styled.div`
	.tab-content {
		margin-top: 2rem;
	}
	ul {
		width: 100%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 1.25rem;
		@media only screen and (max-width: 991px) {
			width: 150rem;
		}
		@media only screen and (max-width: 767px) {
			width: 100%;
			display: block;
		}
	}
	li {
		padding: 0;
	}
	a {
		position: relative;
		display: block;
		height: 100%;
		text-align: center;
		color: #3c3c3c;
		overflow: hidden;
		background-color: #fff;
		border-radius: 8px;
		transition: .3s all;
		@media only screen and (max-width: 767px) {
			display: flex;
			text-align: left;
		}
		&:hover {
			filter: brightness(1.1);
			.pic img {
				transform: scale(1.05);
			}
		}
	}
	.pic {
		width: calc(100% - 16px);
		margin: 8px auto;
		/* padding: 8px; */
		overflow: hidden;
		border-radius: 6px;
		@media only screen and (max-width: 767px) {
			min-width: 120px;
			width: 50%;
		}
		img {
			border-radius: 6px;
			transition: .3s all;
		}
	}
	main {
		@media only screen and (max-width: 767px) {
			width: 100%;
			padding: 8px 0 8px;
			position: relative;
		}
	}
	.slogag {
		width: 100%;
		background-color: #E7C77D;
		padding: 2px 0;
		@media only screen and (max-width: 767px) {
			padding-left: 5px;
		}
		.slogag__label {
			height: 20px;
			width: 45px;
			font-size: 12px;
			font-weight: 500;
			color: #fff;
			background-color: #FD7777;
			border-radius: 12px;
			padding: 0 3px 0 8px;
			position: relative;
			overflow: hidden;
			text-align: center;
			&.best {
				background-color: #2e769e;
			}
		}
		i {
			border-color: currentcolor;
			border-color: hsla(0,0%,100%,.9) hsla(0,0%,100%,.1) transparent transparent;
			border-style: solid;
			border-width: 7px;
			left: -7px;
			position: absolute;
			top: 4px;
			transform: rotate(135deg);
			z-index: 1;
			&::before {
				content: "";
				height: 12px;
				position: absolute;
				right: 0;
				top: 0;
				transform: rotate(-45deg) translate(2px,1px);
				width: 16px;
				z-index: 1;
				background: linear-gradient(90deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,.9));
			}
		}
		.slogag__text {
			margin-left: 3px;
			font-size: 0.94rem;
			font-weight: 600;
			color:#fff;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
			@media only screen and (max-width: 991px) {
				font-size: 14px;
			}
		}
	}
	.name {
		height: 2.9rem;
		color: #000;
		font-size: 1.125rem;
		line-height: 1.25;
		font-weight: 500;
		padding: 0 5px;
		margin: 3px 0;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.price {
		width: 90%;
		margin: auto;
		line-height: 1.2;

		@media only screen and (max-width: 991px) {
			flex-wrap: wrap;
			line-height: 1.3;
		}
		* {
			font-family: Montserrat, "Noto Sans TC";
		}
		.price__origin {
			font-size: 13px;
			text-decoration: line-through;
			@media only screen and (max-width: 991px) {
				width: 100%;
				order: 2;
			} 
		}
		.price__onsale {
			color: #F9014B;
			font-weight: bold;
			@media only screen and (max-width: 991px) {
				width: 100%;
				order: 1;
			} 
			small {
				font-size: 0.875rem;
				@media only screen and (max-width: 991px) {
					font-size: 12px;
				}
			}
			strong {
				font-size: 1.5rem;
				@media only screen and (max-width: 991px) {
					font-size: 3vw;
				}
				@media only screen and (max-width: 767px) {
					font-size: 5vw;
				}
			}
		}
	}
	.goToBuy {
		width: 6rem;
		margin: 4px auto;
		@media only screen and (max-width: 767px) {
			margin: 0;
			position: absolute;
			right: 2vw;
			bottom: 2vw;
		}
	}
`;

