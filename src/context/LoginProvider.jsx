import React, { createContext, useContext, useState, useEffect } from 'react';
import fetchJsonp from 'fetch-jsonp';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [loginID, setLoginID] = useState(null);

    useEffect(() => {
        const fetchLoginID = async () => {
            const nowUrl = window.location.href;
            const serchWord = nowUrl.indexOf('pchome');
            const timeNum = Date.now();
            const loginURL = serchWord < 0 
                ? `./js/id.json?_callback=callback_id&${timeNum}`
                : `https://ecapi.pchome.com.tw/marketing/coupon/v2/member/id?_callback=callback_id&${timeNum}`;

            try {
                const response = await fetchJsonp(loginURL, { jsonpCallbackFunction: 'callback_id' });
                const data = await response.json();
                setLoginID(data);
            } catch (error) {
                console.log(`活动信息解析失败: ${error}`);
            }
        };

        fetchLoginID();
    }, []);

    return (
        <LoginContext.Provider value={loginID}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLoginID = () => useContext(LoginContext);