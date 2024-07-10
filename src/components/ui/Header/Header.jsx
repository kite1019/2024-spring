import { HeaderWrapper } from './style'; 

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="container d-lg-flex d-none justify-content-between align-items-center">
                <ul className="d-flex left__box">
                    <li className="logo__pchome24h">
                        <a href="https://24h.pchome.com.tw/">
                            <img src="./img/ui/24Logo.svg" alt="PChome24h" />
                        </a>
                    </li>
                    <li>
                        <a href="https://ecvip.pchome.com.tw/web/pages/24hHelp.htm">
                            <img src="./img/ui/24Logo-text.svg" alt="全台灣24小時到貨 遲到給100 (例外及說明)" />
                        </a>
                    </li>
                </ul>
                <ul className="d-flex right__box">
                    <li className="appDonload">
                        <span className="me-2">APP下載</span>
                        <img src="./img/ui/24h-APP-Download.svg" className="icon" alt="app下載" />
                        <div className="appQRcode">
                            <img src="./img/ui/img_appQrcode.svg" className="QRCode" alt="QRCode" />
                            享受APP專屬優惠
                        </div>
                    </li>
                    <li className="socialMedia">
                        <span>追蹤我們 :</span>
                        <a href="https://www.facebook.com/pchome24h/" target="_blank" rel="noreferrer">
                            <img src="./img/ui/header-fb-w.svg" alt="fb" />
                        </a>
                        <a href="https://www.instagram.com/pchome24h/" target="_blank" rel="noreferrer">
                            <img src="./img/ui/header-ig-w.svg" alt="ig" /></a>
                        <a href="https://line.me/R/ti/p/@pchome24h" target="_blank" rel="noreferrer">
                            <img src="./img/ui/header-line-w.svg" alt="line" />
                        </a>
                        <a href="https://www.youtube.com/@PChome24h" target="_blank" rel="noreferrer">
                            <img src="./img/ui/header-yt-w.svg" alt="youtube" />
                        </a>
                    </li>
                </ul>
            </div>
        </HeaderWrapper>
    );
};

export default Header;