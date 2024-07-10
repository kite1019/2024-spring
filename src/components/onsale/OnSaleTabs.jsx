import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useOnSaleData } from '../../context/OnSaleProvider';
import OnSaleItem from './OnSaleItem';
import { TabNavWrapper, TabContentWrapper } from './style';
import { OnSaleWrapper } from './layout';

const OnSaleTabs = () => {
    const { onSaleNowAll, onSale_0, onSale_1, onSale_2, onSale_3, onSale_4, randomPD_1, randomPD_2, randomPD_3, randomPD_4 } = useOnSaleData();
    // 確認是否有資料
    if (!onSale_0) {
        return null;
    }

    return (
        <>
            {onSaleNowAll.length > 0 && (
                <OnSaleWrapper className="outBox">
                <div className="container w-1180">
                    <div className="h6 text-center">
                        <span style={{fontSize:'3rem'}}>限時瘋搶</span>
                    </div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="tab_0">
                        <TabNavWrapper>
                            <Nav variant="pills" className="flex justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="tab_0">
                                        <div className="icon"></div>
                                        { onSale_0.time }
                                        { onSale_0.status === 'now' && <span>現正瘋搶</span> }
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab_1">
                                        <div className="icon"></div>
                                        { onSale_1.time }
                                        { onSale_1.status === 'ready' && <span>準時開搶</span> }
                                        { onSale_1.status === 'tomorrow' && <span>明天開搶</span> }
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab_2">
                                        <div className="icon"></div>
                                        { onSale_2.time }
                                        { onSale_2.status === 'ready' && <span>準時開搶</span> }
                                        { onSale_2.status === 'tomorrow' && <span>明天開搶</span> }
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab_3">
                                        <div className="icon"></div>
                                        { onSale_3.time }
                                        { onSale_3.status === 'ready' && <span>準時開搶</span> }
                                        { onSale_3.status === 'tomorrow' && <span>明天開搶</span> }
                                    </Nav.Link> 
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab_4">
                                        <div className="icon"></div>
                                        { onSale_4.time }
                                        { onSale_4.status === 'ready' && <span>準時開搶</span> }
                                        { onSale_4.status === 'tomorrow' && <span>明天開搶</span> }
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </TabNavWrapper>
                        <TabContentWrapper>
                            <Tab.Content>
                                <Tab.Pane eventKey="tab_0">
                                    <OnSaleItem data={onSaleNowAll} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab_1">
                                    <OnSaleItem data={randomPD_1} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab_2">
                                    <OnSaleItem data={randomPD_2} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab_3">
                                    <OnSaleItem data={randomPD_3} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="tab_4">
                                    <OnSaleItem data={randomPD_4} />
                                </Tab.Pane>
                            </Tab.Content>
                        </TabContentWrapper>
                    </Tab.Container>
                </div>
                </OnSaleWrapper>
            )}
        </>
    );
};

export default OnSaleTabs;
