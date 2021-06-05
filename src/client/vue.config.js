module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,
    devServer: {
        port: 3030
      },

    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
}