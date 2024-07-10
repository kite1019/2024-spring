// 讀取後台資料並重組資料格式
export function toDataArr(arr) {
    let dataArr = {};
    arr.forEach(function(item) {
        dataArr[item.BlockId] = item;
    });
    return dataArr;
}

//計算區塊實際資料 (因IndexBlock資料中有空白陣列)
// blockID從josn取得
export function dataNode(dataArr, data, blockID) {
    for (let i = blockID; i <= blockID + 9; i++) {
        if (dataArr[i]) {
            dataArr[i].Nodes.forEach(function (node) {
                if (node.Link.Url) {
                    data.push(node);
                }
            });
        }
    }
}

const processDataNodes = (blockID, IndexBlock) => {
    const dataArr = toDataArr(IndexBlock);
    const dataNodes = {};

    blockID.forEach(({ id, name }) => {
        dataNodes[name] = [];
        dataNode(dataArr, dataNodes[name], id);
    });

    return dataNodes;
};

export default processDataNodes;