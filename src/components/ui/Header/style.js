import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    width: 100%;
    background-color: #ea1717;
    padding: 0;
    position: relative;
    z-index: 99;  

    @media only screen and (max-width: 991px) {
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--pchomeRed);
    }
	.container, .app {
		height: 40px;
	}
	.container{
        padding: 0;
		@media only screen and (max-width: 1600px) {
			max-width: 85vw;
		}
		@media only screen and (max-width: 1024px) {
			margin: 0 0 0 3rem;
			width: 100%;
		}
	}
	li {
		position: relative;
	}
	span {
		display: inline-block;
		color: #fff;
		font-size: 13px;
		font-weight: 400;
		text-decoration: none;
	}
	img.icon {
		width: 28px;
	}
	.left__box {
		li.logo__pchome24h {
			margin-right: 60px;
			img {
				width: 160px;
			}
		}
	}
	.right__box {
		height: 100%;
		li {
			display: flex;
			align-items: center;
		}
	}
	li.appDonload {
		padding: 0 0.75rem;
		cursor: pointer;
		transition: .3s all;
		img.QRCode {
			display: block;
			width: 100%;
			height: auto;
		}
		.appQRcode {
			width: 160px;
			position: absolute;
			z-index: 999;
			top: 100%;
			right: 0;
			padding: 1rem 1rem .5rem;
			background: #fff;
			border-radius: 0 0 8px 8px;
			box-shadow: 0 4px 0 rgba(43,43,43,.1);
			border: 1px solid rgba(43,43,43,.1);
			font-size: 14px;
			text-align: center;
			display: none;
		}
		&::before, &::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 40%;
			background-color: #9C9C9C;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
		}
		&::after {
			left: auto;
			right: 0;
		}
		&:hover {
			.appQRcode {
				display: block;
			}
		}
	}
	li.socialMedia {
		padding-left: .75rem;
		a {
			margin-left: .75rem;
		}
	}

	svg {
		width: 100%;
		path {
			fill: #fff;
		}
	}
`;
