process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackConfigProp = require('react-scripts/webpack.config')('production');

webpackConfigProp.plugins.push(new BundleAnalyzerPlugin())

webpack(webpackConfigProp, (err,stats) =>{
    if (err || stats.hasErrors()){
        console.error(err)
    }
})