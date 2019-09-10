const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
require('dotenv').config();
module.exports = {
    configureWebpack: {
        plugins: [new BundleAnalyzerPlugin()]
    }
};
