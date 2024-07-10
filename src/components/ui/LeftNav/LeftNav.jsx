import { useState } from 'react';
import { LeftNavContainer, AppNavContainer } from './style';


// ---------------------------------
// 讀取後台資料並重組資料格式
// ---------------------------------
let dataArr = {};
function toDataArr (arr){
    arr.forEach(function(item){
        dataArr[item.BlockId] = item;
    });
}
function dataObjNodeMenu(data, blockNumFirst, blockNumLast) {
	for(let i=blockNumFirst; i<=blockNumLast; i++){
		if(dataArr[i]){
			dataArr[i].Nodes.forEach(function(objNode){
				if(objNode.Link.Url){
					data.push(objNode)
				}
			})
		}
	}
}


const LeftNav = ({ handleShow }) => {
	const [isActive, setIsActive] = useState(false);
	const [isAppActive, setAppActive] = useState(false);
  
	const toggleMenu = () => {
		setIsActive(!isActive);
	};

	const toggleAppMenu = () => {
		setAppActive(!isAppActive);
	};

	function goTop(e) {
		e.preventDefault();
		document.querySelector('#top').scrollIntoView({ behavior: 'instant' });
	}

	// ---------------------------------
	// 接選單資料
	// ---------------------------------
    toDataArr(window.IndexBlock);
    
	const menuData1 = [];
	const menuData2 = [];
	dataObjNodeMenu(menuData1, 143, 144);
	dataObjNodeMenu(menuData2, 357, 360);
	const menuDataList = [...menuData1, ...menuData2];
	// console.log(menuDataList);
	// ---------------------------------


    return (
		<>
			<LeftNavContainer className={`left_menu d-flex align-items-start flex-column 
				${ isActive ? "go--act" : "" }`}
			>
				<div className="arrow_box" onClick={toggleMenu}>
					<span><img src="./img/ui/right-arrow.svg" alt="arrow" className="d-block" /></span>
				</div>

				{/*-- web選單 --*/}
				<div className="menu_box">
					{menuDataList.map((item, index) => 
						index === 0 ? (
							<div className="sticker" key={index}>
								<a href={item.Link.Url}>
									<img src={item.Img.Src} alt="" className="w-100 d-block" />
									</a>
							</div>
						) : null
					)}
					<div className="listWrap">
						<div className="topList">
							<a href="https://24h.pchome.app/pchome24h/goddess-1033">花舞紛飛</a>
							<a href="https://24h.pchome.com.tw/activity/coupon">必搶神券</a>
							<button onClick={handleShow}>
								活動攻略
							</button>
						</div>
						<ul className="row mainList">
							{menuDataList.map((item, index) => 
								index >= 2 && item.Img.Src === '' ? (
									<li className="col-6" key={index}>
										<a href={item.Link.Url}>{item.Link.Text}</a>
									</li>
								) : null
							)}
						</ul>
						<ul className="row subList">
							{menuDataList.map((item, index) => 
								index >= 1 && item.Img.Src !== '' ? (
									<li className="col-12" key={index}>
										<a href={item.Link.Url}>{item.Link.Text}</a>
									</li>
								) : null
							)}
						</ul>
					</div>
				</div>
			</LeftNavContainer>


			<AppNavContainer className="app_menu" id="app_menu" style={{ position: 'fixed', bottom: '0' }}>
				<ul className="main d-flex justify-content-center">
					<li>
						<a href="https://24h.pchome.app/pchome24h/goddess-1033">
							<img src="./img/ui/app_icon_02.png" className="icon" alt="event"/>
							<span>花舞紛飛</span>
						</a>
					</li>
					<li>
						<button onClick={handleShow}>
							<img src="./img/ui/app_icon_02.png" className="icon" alt="活動攻略"/>
							<span>活動攻略</span>
						</button>
					</li>
					<li>
						<a href="https://24h.pchome.com.tw/activity/coupon">
							<img src="./img/ui/app_icon_03.png" className="icon" alt="折價券"/>
							<span>折價券</span>
						</a>
					</li>
					
					<li>
						<button onClick={toggleAppMenu}>
							<img src="./img/ui/app_icon_04.png" className="icon" alt="精選會場"/>
							<span>精選會場</span>
							
						</button>
					</li>
					<li>
						{/* eslint-disable-next-line */}
						<a href="#top" onClick={goTop}>
							<img src="./img/ui/app_icon_05.png" className="icon" alt="GoTop"/>
							<span>GoTop</span>
						</a>
					</li>
				</ul>

				{/* 上滑其他會場選單 */}
				<div className={`subBox_app ${ isAppActive ? "go--act" : "" }`}>
					<div className="appMenu_title btn_sub" onClick={toggleAppMenu}>
						<img src="./img/ui/app_icon_close.svg" alt="CLOSE"/>
						<p>CLOSE</p>
					</div>
					<ul className="row justify-content-center subList" id="appSubList">
						{menuDataList.map((item, index) => 
							index >= 2 ? (
								<li className="col-4" key={index}>
									<a href={item.Link.Url}>{item.Link.Text}</a>
								</li>
							) : null
						)}
					</ul>
				</div>
				<div id="newMask" className={`${ isAppActive ? "go--act" : "" }`} onClick={toggleAppMenu}></div>
			</AppNavContainer>
		</>
    );
};

export default LeftNav;