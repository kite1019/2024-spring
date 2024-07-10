//載入資料區塊設定
import { useEffect, useState } from 'react';
import processDataNodes from '../../../utils/DataProcessor';
import blockID from '../../../utils/useBlockID'
import { Nav } from 'react-bootstrap';
import { RightNavContainer } from './style'; 

const bookmarkClick = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const sectionId = href.replace('#', '');
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};

const hashMenu = [
    {
        "name": "銀行優惠",
        "data": "bankWebData",
        "hash": "bank"
    },
    {
        "name": "超級攻略",
        "data": "topbnData",
        "hash": "topbn"
    },
];

const RightNav = () => {
    const dataNodes = processDataNodes(blockID, window.IndexBlock);
    const topbnData = dataNodes["topbnData"];


    // { id: 'KV', name: 'KV text' },
    // { id: 'topbn', name: '超級攻略' },
    // { id: 'coupon', name: '折價券' },
    // { id: 'onsale', name: '限時瘋搶' },
    // { id: 'section01', name: 'Section 1' },
    // { id: 'section02', name: 'Section 2' },
    // { id: 'section03', name: 'Section 3' },
    
    return (
        <RightNavContainer className="rightNav d-flex align-items-center navbar">
            <div className="nav_btn d-lg-none">
                <span className="arrow"></span>
            </div>
            <div className="menu_mb_head d-lg-none">快速導覽：</div>
            {/* <Nav className="flex-column" id="scrollspy">
                <Nav.Link href="#KV" className='d-none--' >KV</Nav.Link>
                {topbnData && topbnData.length > 0 && (
                    <Nav.Link href="#topbn" onClick={bookmarkClick}>超級攻略</Nav.Link>
                )}
                <Nav.Link href="#coupon" onClick={bookmarkClick}>coupon</Nav.Link>
                <Nav.Link href="#onsale" onClick={bookmarkClick}>限時瘋搶</Nav.Link>
                <Nav.Link href="#slideCover" onClick={bookmarkClick}>slideCover</Nav.Link>
                <Nav.Link href="#section01" onClick={bookmarkClick}>section01</Nav.Link>
                <Nav.Link href="#section02" onClick={bookmarkClick}>section02</Nav.Link>
                <Nav.Link href="#section03" onClick={bookmarkClick}>section03</Nav.Link>
                <Nav.Link href="#section04" onClick={bookmarkClick}>section04</Nav.Link>
                <Nav.Link href="#section05" onClick={bookmarkClick}>section05</Nav.Link>
                
            </Nav> */}
                <ul className='row w-100 m-0'>
                    <li className='w-100' >
                        <a href="#KV" >KV</a>
                    </li>
                    <li className='w-100' >
                        <a href="#topbn" >超級攻略</a>
                    </li>
                    <li className='w-100' >
                        <a href="#coupon" >折價券</a>
                    </li>
                    <li className='w-100' >
                        <a href="#onsale" >限時瘋搶</a>
                    </li>
                    <li className='w-100' >
                        {/* <a href="#section01">section01</a> */}
                        <a href="#section01" > Section 1 </a>
                    </li>
                    <li className='w-100' >
                        <a href="#section02">section02</a>
                    </li>
                    <li className='w-100' >
                        <a href="#section03">section03</a>
                    </li>
                </ul>
            <div className="gotop" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                <span>goTop</span>
            </div>
        </RightNavContainer>
    );
};

export default RightNav;