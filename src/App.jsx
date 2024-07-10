import { useEffect, useState } from 'react';

//共用Contex
import { DataNodesProvider } from './context/DataNodesProvider';
import { LoginProvider } from './context/LoginProvider';
import { OnSaleProvider } from './context/OnSaleProvider';

// UI components
import Header from './components/ui/Header/Header';
import LeftNav from './components/ui/LeftNav/LeftNav';
import RightNav from './components/ui/RightNav/RightNav';

// layout components
import TopBn from "./components/guidebox/TopBn";        //攻略區-3bn
import TopBnBig from "./components/guidebox/TopBnBig";  //攻略區-銀行回饋
import MyModal from './components/guidebox/MyModal';    //攻略區-燈箱
import OnsaleTabs from './components/onsale/OnSaleTabs'; //限時瘋搶
import OnSaleFirst from './components/onsalefirst/OnSaleFirst'; //限時瘋搶 版頭
import BnRight from './components/guidebox/BnRight';    //攻略區-5小福上
import BnHeroSlide from './components/guidebox/Slide';  //攻略區-heroBN
import BnBtm from './components/guidebox/BnBtm';        //攻略區-5小福下
import BnCoupon from './components/guidebox/BnCoupon';  //攻略區-折價券AD
import BankSlide from './components/bank/BankSlide';    //銀行
import DiscountBn from './components/discount/DiscountBn'; //加碼必看
import SlideMoreCard from './components/slide-morecard/SlideMoreCard';  //強檔預告
import SlideOneCard from './components/slide-onecard/SlideOneCard';     //2個單卡輪播
import SbdPd from './components/sbd/SbdPd';             //嚴選特搜

import SlideCoverFlow from './components/slide-coverflow/SlideCoverFlow'; //輪播coverflow
import Coupon from './components/coupon/Coupon';


const App = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // ------------------------------
    // 網頁排版開始
    return (
        <OnSaleProvider> <DataNodesProvider>
            <h1>
                2024美力最強檔 約會女神節：PChome24h 14 大分會場感恩回饋！天天搶早鳥券！滿額優惠回饋活動促銷好禮大放送！
            </h1>
            <div className="wrap" style={{ padding: '0 0 5rem', textAlign: 'center' }} >
                <Header />
                <LeftNav handleShow={handleShow}/>
                <RightNav />
                <div className="" style={{height:'30rem'}} id='KV'>
                    <p style={{margin: '3rem 0'}}>KV</p>
                    <button className='btn btn-primary' variant="primary" onClick={handleShow}>
                        購物攻略
                    </button>
                </div>

                {/*----- 3攻略bn -----*/}
                <div className="topBnBox">
                    <TopBn />
                </div>

                {/*----- 攻略區 -----*/}
                <div className="guideBox w-1080 mx-auto">
                    <div className="container w-960">
                        <TopBnBig />
                        <div className="guideBox--top" id="event_1">
                            <OnSaleFirst />
                            <BnRight />
                        </div>
                        <div className="guideBox--btm">
                            <BnHeroSlide />
                            <BnBtm />
                        </div>
                    </div>
                    <BnCoupon />
                </div>
                
                {/*----- 銀行 -----*/}
                <section id="bank">
                    <BankSlide />
                </section>

                {/*----- 加碼必看 -----*/}
                <section id="discount">
                    <DiscountBn />
                </section>
                
                {/*----- 強檔預告 -----*/}
                <section className="pt-4 mt-5" id="sbdpreview">
                    <SlideMoreCard />
                </section>
                
                {/*----- 限時瘋搶 -----*/}
                <section className="pt-4 mt-5" id="onsale">
                    <OnsaleTabs />
                </section>

                {/*----- 2個單卡輪播 -----*/}
                <section className="pt-4 mt-5" id="">
                    <SlideOneCard />
                </section>

                {/*----- 精選特搜 -----*/}
                <section className="pt-4 mt-5" id="">
                    <SbdPd />
                </section>

                {/*----- 立體輪播 -----*/}
                <div className="pt-4 mt-5 container w-1180" id="slideCover">
                    <SlideCoverFlow />
                </div>

                {/*----- 折價券 -----*/}
                <section className="container pt-3 pb-5" id="coupon">
                    <LoginProvider>
                        <Coupon />
                    </LoginProvider>
                </section>

            </div>

            <div className="container pt-3" id="section01" style={{height:'30rem', background:'#9bebd2', marginTop: '4rem'}}>section01</div>
            <div className="container pt-3" id="section02" style={{height:'35rem', background:'#9bebd2', marginTop: '4rem'}}>section02</div>
            <div className="container pt-3" id="section03" style={{height:'50rem', background:'#9bebd2', marginTop: '4rem'}}>section03</div>
            <div className="container pt-3" id="section04" style={{height:'40rem', background:'#9bebd2', marginTop: '4rem'}}>section04</div>
            <div className="container pt-3" id="section05" style={{height:'30rem', background:'#9bebd2', marginTop: '4rem', marginBottom: '15rem'}}>section05</div>

            {/*----- 攻略 Modal -----*/}
            <MyModal show={show} handleClose={handleClose}/>

        </DataNodesProvider> </OnSaleProvider>
    )
}

export default App
