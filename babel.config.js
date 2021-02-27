module.exports = {
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', {
      targets: {
        esmodules: true,
      },
    }],
  ],
  plugins: [
    [require('babel-plugin-module-resolver'), {
      root: 'src',
      extensions: ['.ts']
    }],
    [require('babel-plugin-file-loader'), {
      name: '[hash].[ext]',
      extensions: ['png', 'jpg', 'jpeg'],
      publicPath: 'build/images',
      outputPath: 'build/images',
      context: '',
      limit: 0
    }]
  ],
  ignore: ['**/types']
}