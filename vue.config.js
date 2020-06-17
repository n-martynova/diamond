module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        config.module
        .rule('vue')
            .use('vue-loader')
            .tap(args => {
                args.compilerOptions.whitespace = 'preserve'
            })
    },
    // publicPath: '.',
}
