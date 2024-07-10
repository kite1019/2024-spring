import styled from 'styled-components';

export const LeftNavContainer = styled.div`
	width: 120px;
	position: fixed;
	z-index: 99;
	left: 0;
	top: 40px;
	@media only screen and (max-width: 992px) {
		display: none !important;
	}
	&.hide {
		display: none !important;
	}
	.arrow_box {
		background: rgba(0, 0, 0, .8);
		width: 40px;
		margin: 0 0 3px 0;
		cursor: pointer;
		border-radius: 0 5px 5px 0;
		transition: 0.2s;
		@media only screen and (max-width: 992px) {
			display: none;
		}
		span {
			display: block;
			filter: invert(1);
			padding: 6px;
			opacity: 0.8;
			transition: .3s all;
			@media only screen and (max-width: 1366px) {
				transform: rotate(180deg);
			}
			img {
				transform: scaleX(-1);
			}	
		}
	}
	.listWrap {
		background: url('./img/ui/menu_bg.svg') top center no-repeat;
		background-size: 100%;
		padding-bottom: 5px;
		border-radius: 0 0 10px 10px;
	}
	.menu_box {
		text-align: center;
		width: 100%;
		margin-left: 8px;
		transition: 0.3s;
		@media only screen and (max-width: 1366px) {
			transform: translateX(-115%) scale(0.9);
		}
		@media only screen and (max-width: 1024px) {
			margin-left: 3px;
			transform-origin: 0 0;
			// transform: scale(0.9);
		}
		@media only screen and (max-width: 992px) {
			transform: none;
			border-radius: 0;
		}
		.sticker {
			width: 110px;
			margin: 0 auto -2.2rem;
			border-radius: 0 0 1rem 1rem;
		}
		.topList {
			padding-top: 2.5rem;
			button {
				width: 100%;
				background: transparent;
				border: 0;
			}
			a, button {
				display: block;
				color: #fff;
				font-size: 18px;
				font-weight: 500;
				padding: 5px 0;
				position: relative;
				&::after {
					content: "";
					position: absolute;
					bottom: 0px;
					left: 50%;
					transform: translateX(-50%);
					border-top: 1px solid #fff;
					width: 98px;
					height: 1px;
					z-index: 1;
				}
				&:last-child::after {
					display: none;
				}
				&:hover {
					color: #fffb6e;
				}
			}
		}
		.mainList {
			border-radius: 8px;
			overflow: hidden;
			background-color: #f9ede0;
			border: 1px solid #f9ede0;
			margin: 0 5px 5px;
			position: relative;
			li {
				padding: 0;
			}
			a {
				font-size: 14px;
				font-weight: 500;
				color: #440015;
				padding: 5px 0;
				display: block;
				&:hover {
					/* color: #fff; */
					background: #e18f47;
				}
			}
		}
		.subList {
			border-radius: 8px;
			overflow: hidden;
			background-color: #f9ede0;
			border: 1px solid #f9ede0;
			width: calc(100% - 10px);
			margin: auto;
			// margin: 5px;
			li {
				padding: 0;
			}
			a {
				font-size: 14px;
				font-weight: 500;
				color: #440015;
				padding: 5px 0;
				display: block;
				&:hover {
					/* color: #440015; */
					background: #e18f47;
				}
			}

		}
	}

	&.go--act { 
		.arrow_box span {
			transform:  rotate(180deg);
			@media only screen and (max-width: 1366px) {
				transform: rotate(0);
			}
		}
		.menu_box {
			transform: translateX(-105%) scale(0.9);
			pointer-events: none;
			@media only screen and (max-width: 1366px) {
				pointer-events: auto;
				transform: translateX(0);
			}
		}
	}
`;


export const AppNavContainer = styled.div`
	display: none;
	width: 100%;
	color: #fff;
	margin: 0;
	background: linear-gradient(180deg, rgba(68, 0, 21, 0.0) 0%, rgba(68, 0, 21, 0.80) 50%);
	position: fixed;
    bottom: 0px;
    top: inherit;
    z-index: 99;
	@media only screen and (max-width: 992px) {
		display: block;
	}
	.main {
		margin: 0;
		padding: 0 1rem;
		position: relative;
		z-index: 55;
		li {
			width: 20%;
			a, button {
				color: #fff !important;
				text-decoration: none;
				line-height: 1;
				display: block;
				margin-bottom: 5px;
				span {
					display: block;
					text-align: center;
					font-size: 1rem;
					font-weight: 500;
					margin-top: 2px;
					@media only screen and (max-width: 767px) {
						font-size: 13px;
					}
				}
			}
			button {
				margin-left: auto;
				margin-right: auto;
				padding: 0;
				border: 0;
				background: transparent;
			}
			.icon {
				display: block;
				width: 80px;
				margin: 0 auto;
				@media only screen and (max-width: 767px) {
					width: 50px;
				}
			}
		}
	}
	.appMenu_title {
		width: 200px;
		height: 100px;
		border-radius: 240px 240px 0 0;
		position: absolute;
		left: 50%;
		top: -1rem;
		transform: translate(-50%, 0);
		cursor: pointer;
		opacity: 0;
		transition: 0.3s;
		transition-delay: 0.3s;
		img {
			width: 40px;
			display: block;
			margin: 0 auto;
		}
		p {
			text-align: center;
			font-weight: 500;
		}
	}
	.subBox_app {
		display: block;
		position: fixed;
		z-index: 999;
		width: 100%;
		bottom: -70vh;
		left: 0;
		transition: 0.6s cubic-bezier(0.5, 0.64, 0.15, 1.12);
		z-index: 8;
		.subList {
			margin: 0;
			padding: 15px 5px 110px;
			background: linear-gradient(180deg, rgba(68, 0, 21, 0.0) 0%, rgba(68, 0, 21, 0.80) 50%);
			position: relative;
			z-index: 3;
			li {
				padding: 5px 3px;
			}
			a {
				color: #fff;
				border: 1px solid #fff;
				border-radius: 100px;
				padding: 5px 0;
				display: block;
				font-size: 14px;
				font-weight: 500;
				text-align: center;
				transition: .3s all;
			}
		}
		&.go--act {
			bottom: -20px;
			.appMenu_title {
				top: -4.5rem;
				opacity: 1;
			}
		}
	}
	.followBox_app{
		position: fixed;
		z-index: 999;
		width: 100%;
		bottom: -55vh;
		left: 0;
		background: #000;
		transition: .6s cubic-bezier(.5,.64,.15,1.12);
		ul {
			width: 50%;
			padding: 1rem 0;
			margin: auto;
			background: #000;
			position: relative;
			z-index: 3;
			@media only screen and (max-width:767px) {
				padding: 15px 0;
				width: 280px;
			}
		}
		li {
			padding: 5px;
		}
		&.go--act {
			bottom: 0;
			.appMenu_title {
				top: -4.5rem;
				opacity: 1;
			}
		}
	}
	.menuMask, #newMask {
		display: none;
		background-color: rgba(34, 34, 34, 0.75);
		width: 100vw;
		height: 0;
		position: fixed;
		left: 0px;
		bottom: 0;
		pointer-events: none;
		&.go--act {
			pointer-events: auto;
			height: 100vh;
			display: block;
			z-index: 5;
		}
	}
`;
