import styled from 'styled-components';

export const BigCouponWrapper = styled.div`
	.main {
		display: block;
		width: 100%;
		border: 1px solid #000;
		border-radius: 8px;
		background-color: #fff;
		color: #000;
		&:disabled {
			background-color: rgba(0,0,0,.1);
		}
	}
	#btnText {
		font-size: 1.2rem;
		font-weight: 500;
	}
	.getAllCoupon {
		font-size: 1.5rem;
		border-radius: 8px;
		padding: 0 1rem;
	}
`;
export const ModalContent = styled.div`
	object {
		width: 10rem;
		display: block;
		margin: 2rem auto 0;
	}
	p {
		font-size: 1.2rem;
		text-align: center;
	}
	a.warning {
		color: red;
		text-decoration: none;
	}
`;
