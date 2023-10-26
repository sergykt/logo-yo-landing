const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = (env, argv) => {
  const mode = env.NODE_ENV;
  const isProd = argv.mode === 'production';

  return {
    mode,
    context: path.resolve(__dirname, 'src'),
    entry: './js/main.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProd ? 'js/[name].[hash].js' : 'js/[name].js',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.css', '.scss', '.svg'],
      alias: {
        '@svg': path.resolve(__dirname, 'src', 'img', 'svg'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'defaults' }]
              ]
            }
          }
        },
        {
          test: /\.(c|sa|sc)ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['postcss-preset-env'],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            outputPath: '/img/',
          }
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          use: !isProd
            ? []
            : [
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                  },
                  optipng: {
                    enabled: true,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                },
              },
            ],
          generator: {
            filename: 'img/[name][ext]',
          }
        },
        {
          test: /\.ico$/i,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext]',
          },
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options: {
            sources: {
              list: [
                {
                  tag: "img",
                  attribute: "data-src",
                  type: "src",
                },
                {
                  tag: "img",
                  attribute: "src",
                  type: "src",
                },
                {
                  tag: "img",
                  attribute: "srcset",
                  type: "srcset",
                },
              ],
            },
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          }
        },
      ],
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [
        new CssMinimizerPlugin(
          {
            minimizerOptions: {
              preset: [
                'default',
                {
                  discardComments: { removeAll: true },
                },
              ],
            },
          }
        ),
        new TerserPlugin(),
      ]
    },
    devServer: {
      port: 5001,
      open: true,
      hot: true,
      compress: true,
      static: {
        directory: path.join(__dirname, 'build'),
      }
    },
    plugins: [
      new SpriteLoaderPlugin(),
      new HTMLWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: isProd ? 'css/[name].[hash].css' : 'css/[name].css',
      }),
    ],
  }
};

