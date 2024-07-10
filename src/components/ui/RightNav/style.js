import styled from 'styled-components';

export const RightNavContainer = styled.div`
	width: 120px;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 99;
	background: rgba(255, 242, 220, 0.7);
	.nav {
		width: 100%;
	}
		a {
			color: #653a37;
			font-size: 15px;
			font-weight: 500;
			padding: 6px 0;
			text-align: center;
			display: block;
			@media only screen and (max-width: 1024px) {
				padding: 4px 0;
			}
			@media only screen and (max-width: 991px) {
				position: relative;
				color: #3f3f3f !important;
				font-size: 16px;
				font-weight: 500;
				padding: 8px;
				&::before {
					content: "";
					position: absolute;
					bottom: 18%;
					right: 0;
					width: 1px;
					height: 60%;
					background-color: #ccc;
				}
				br {
					display: none;
				}
			}
			&.active, &.active-scroll-spy {
				font-weight: 600;
				color: red;
				&::before {
					content: '--';
				}
			}
		}
	.gotop {
		display: block;
		width: 40px;
		margin: auto;
		@media only screen and (max-width: 991px) {
			display: none !important;
		}
	}
`;

