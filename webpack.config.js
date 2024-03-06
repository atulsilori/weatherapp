const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const { DEV, DEBUG } = process.env;
process.env.BABEL_ENV = DEV ? 'development' : 'production';
process.env.NODE_ENV = DEV ? 'development' : 'production';
module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: false,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    minimize: !DEV,
    splitChunks: {
      minSize: 500000,
      cacheGroups: {
        vendors: false,
      },
    },
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      component: path.resolve(__dirname, './src/component/'),
      hooks: path.resolve(__dirname, './src/hooks/'),
      constants: path.resolve(__dirname, './src/constants/'),
      styles: path.resolve(__dirname, './src/styles/'),
      typings: path.resolve(__dirname, './src/typings/'),
      logics: path.resolve(__dirname, './src/logics/'),
      utils: path.resolve(__dirname, './src/utils/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/public/index.html'),
    }),
    new CleanWebpackPlugin(),
    DEBUG && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  mode: DEV ? 'development' : 'production',
};
