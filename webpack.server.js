const path = require('path');
const nodeExternals = require('webpack-node-externals');

//服务端webpack
module.exports ={
    target:'node',
    mode:'development',
    // 入口文件
    entry:'./server/index.js',
    output:{
        // 打包后的文件名
        filename:'bundle.js',
        // 打包后的文件存放的地方
        path:path.resolve(__dirname,'build')
    },
    externals: [nodeExternals()],
    module:{
        rules:[
            {
                // 正则匹配，js结尾
                test:/\.js$/,
                  // 支持import， jsx
                loader:'babel-loader',
                // 排除
                exclude:/node_modules/,
                 // babel配置add
                options:{
                    presets:['@babel/preset-react',['@babel/preset-env']]
                }
            }
        ]
    }
}

