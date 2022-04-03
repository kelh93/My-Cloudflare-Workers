const build = require('esbuild')

const options = {
  entryPoints: ['./src/index.ts'], // 只能是数组或对象
  outfile: './dist/worker.js',
  minify: process.env.NODE_ENV === 'production', // 是否压缩
  bundle: true, // 是否打包
  sourcemap: true, // 是否开启source-map
  platform: 'node',
  target: ['node10.4'], // node兼容版本
}

build.buildSync(options)
