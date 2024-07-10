import styled from 'styled-components';
import { sbdpreviewBg } from '../../assets/layout';

export const SlideCard = styled.div`
	a {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		text-decoration: none;
		transition: .3s all;
        background: url(${sbdpreviewBg}) top center / 100% 100%;
		strong, small, b, em {
			font-family: Montserrat, Arial, Helvetica, sans-serif;
		}
        &:hover {
            filter: brightness(1.15);
            .pic img {
                transform: scale(1.05) !important;
            }
        }
	}
    .pic {
        overflow: hidden;
        img {
            transition: .3s all;
        }
    }
    main {
        position: relative;
        z-index: 1;
    }
    .date {
        width: 66%;
        height: 2.8rem;
        margin-left: 5%;
        text-align: center;
        color: #fff;
        font-size: 2rem;
        font-weight: 800;
        line-height: 1.5;
    }
    .more {
        width: 5.6rem;
        position: absolute;
        right: 1rem;
        top: 0.5rem;
    }
    .pic {
        width: 88%;
        margin: 0.8rem auto 0;
    }
    .pd_title {
		font-size: 1.5rem;
        color: #000;
        font-weight: 600;
        line-height: 1.8;
        padding: 0 .5rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        height: 3.8rem;
    }
    .hotline {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.8;
        color: #fff;
        padding: .3rem .5rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
`;


