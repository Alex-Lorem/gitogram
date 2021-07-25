// const path = require('path')
//
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader'
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       },
//       {
//         test: /\.scss$/i,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader'
//           }
//         ]
//       }
//     ]
//
//   },
//
//   resolve: {
//     alias: {
//       src: path.resolve(__dirname, 'src')
//     },
//     extensions: ['.js', '.json', '.wasm', '.vue'],
//     modules: ['node_modules']
//   }
// }
