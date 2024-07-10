import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// 壓縮品質設定
const qualitySettings = {
    jpgQuality: 81,
    pngQuality: 7,
    webpQuality: 81,
};

// 使用 src/assets/layout 資料夾
const layoutDir = './src/assets/layout';

// 每次執行時清空 src/assets/layout 資料夾，然後重新建立
if (fs.existsSync(layoutDir)) {
    fs.rmdirSync(layoutDir, { recursive: true });
}
fs.mkdirSync(layoutDir, { recursive: true });

// 用於收集 import 和 export 語句的陣列
let imports = [];
let exportList = [];

// 支援的圖片類型
const supportedImageTypes = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];

// 遞迴處理資料夾中的所有圖片
function processDirectory(directory) {
    fs.readdirSync(directory, { withFileTypes: true }).forEach((entry) => {
        const absolutePath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            processDirectory(absolutePath);
        } else if (
            entry.isFile() &&
            supportedImageTypes.includes(path.extname(entry.name).toLowerCase())
        ) {
            processImage(absolutePath, directory, entry.name);
        }
    });
}

// 處理單個圖片文件
function processImage(filePath, directory, fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const filenameWithoutExt = path.basename(fileName, ext);
  const relativePath = path.relative('./input-source', directory);
  const outputFilePath = path.join(layoutDir, relativePath, fileName);

  // 確保輸出資料夾存在
  fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });

  // 處理圖片文件
  if (ext === '.jpg' || ext === '.png') {
    // jpg 或 png 圖片處理
    handleJpgPngImage(
        filePath,
        fileName,
        ext,
        relativePath,
        filenameWithoutExt,
    );
  } else {
        // 其他類型圖片處理
        handleOtherImage(filePath, fileName, relativePath, filenameWithoutExt);
  }
}

// 處理 jpg 和 png 圖片
function handleJpgPngImage(
    filePath,
    fileName,
    ext,
    relativePath,
    filenameWithoutExt,
) {
    const outputFilePath = path.join(layoutDir, relativePath, fileName);
    const qualityOptions = ext === '.png' ? 'compressionLevel' : 'quality';
    sharp(filePath)
        .toFormat(ext.substring(1), {
            [qualityOptions]: qualitySettings[`${ext.substring(1)}Quality`],
            palette: true,
        })
        .toFile(outputFilePath)
        .then(() => console.log(`壓縮並輸出完成: ${outputFilePath}`))
        .catch((err) => console.error(err));

    // 蒐集 import 和 export 語句
    collectImportExportStatements(relativePath, fileName, filenameWithoutExt);

    // 處理 webp 格式
    const outputWebpFilePath = path.join(
        layoutDir,
        relativePath,
        `${filenameWithoutExt}Webp.webp`,
    );
    sharp(filePath)
        .toFormat('webp', { quality: qualitySettings.webpQuality })
        .toFile(outputWebpFilePath)
        .then(() => console.log(`壓縮並輸出 WebP 完成: ${outputWebpFilePath}`))
        .catch((err) => console.error(err));

    // 蒐集 webp 的 import 和 export 語句
    const webpVarName = formatVarName(filenameWithoutExt + 'Webp', relativePath);
    const webpImportPath = `./${path
        .join(relativePath, `${filenameWithoutExt}Webp.webp`)
        .replace(/\\/g, '/')}`;
    imports.push(`import ${webpVarName} from '${webpImportPath}';`);
    exportList.push(webpVarName);
}

// 處理其他類型的圖片文件
function handleOtherImage(
    filePath,
    fileName,
    relativePath,
    filenameWithoutExt,
) {
  const outputFilePath = path.join(layoutDir, relativePath, fileName);
    fs.copyFile(filePath, outputFilePath, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`複製並輸出完成: ${outputFilePath}`);
        }
    });

    // 蒐集 import 和 export 語句
    collectImportExportStatements(relativePath, fileName, filenameWithoutExt);
}

// 蒐集 import 和 export 語句的函數
function collectImportExportStatements(
    relativePath,
    fileName,
    filenameWithoutExt = '',
) {
    const varName = formatVarName(filenameWithoutExt, relativePath);
    const importPath = `./${path
        .join(relativePath, fileName)
        .replace(/\\/g, '/')}`;
    imports.push(`import ${varName} from '${importPath}';`);
    exportList.push(varName);
}

// 格式化變數名稱
function formatVarName(filenameWithoutExt, relativePath) {
    const pathParts = relativePath.split(path.sep).filter((p) => p);
    const formattedFilename = formatFileName(filenameWithoutExt);
    return (
        pathParts.length > 0
        ? formatPathPart(pathParts) + capitalizeFirstLetter(formattedFilename)
        : formattedFilename
    )
        .replace(/\W/g, '')
        .replace(/^-/, '');
}

// 格式化文件名稱，將破折號轉換為駝峰命名法
function formatFileName(filename) {
    return filename
        .replace(/\W/g, '_')
        .replace(/^-/, '')
        .split('_')
        .map((part, index) =>
            index === 0 ? part.toLowerCase() : capitalizeFirstLetter(part),
        )
        .join('');
}

// 格式化資料夾路徑部分
function formatPathPart(parts) {
    return parts.map((part) => formatFileName(part)).join('');
}

// 首字母大寫
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// 生成 index.js 檔案
function generateIndexFile() {
    const indexContent = `${imports.join('\n')}\n\nexport { ${exportList.join(
        ', ',
    )} };\n`;
    fs.writeFileSync(path.join(layoutDir, 'index.js'), indexContent);
}

// 開始處理 input-source 資料夾
processDirectory('./input-source');

// 處理完畢後生成 index.js
generateIndexFile();
