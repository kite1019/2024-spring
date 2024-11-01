const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './', // 設定打包後的基本路徑為相對路徑
    devServer: {
        hot: true // 启用热重载功能
    }
})