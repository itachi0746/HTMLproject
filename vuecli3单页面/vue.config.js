module.exports = {
    lintOnSave: false,
    outputDir: './dist',
    publicPath: './', // 相当于baseUrl
    productionSourceMap: !(process.env.NODE_ENV === 'production'),
    // devServer: {
    //     port: 83,
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:16789/ActivityHotelService',
    //             ws: true,
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     } // 配置开发环境 URL 便于本地开发调试
    // },
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Provide path to the file with resources
                    resources: './src/style/mixin.scss',

                    // Or array of paths
                    // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
                })
                .end()
        })
    }
};
