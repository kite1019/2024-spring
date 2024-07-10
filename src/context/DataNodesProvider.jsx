//處理載入lalabear 的block ID
import { createContext, useContext, useEffect, useState } from 'react';
import processDataNodes from '../utils/DataProcessor';
import blockID from '../utils/useBlockID';

const DataNodesContext = createContext();

export const DataNodesProvider = ({ children }) => {
    const [dataNodes, setDataNodes] = useState({});

    useEffect(() => {
        const nodes = processDataNodes(blockID, window.IndexBlock);
        setDataNodes(nodes);
    }, []);

    return (
        <DataNodesContext.Provider value={dataNodes}>
            {children}
        </DataNodesContext.Provider>
    );
};

export const useDataNodes = () => useContext(DataNodesContext);
