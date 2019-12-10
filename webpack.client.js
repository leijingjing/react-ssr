const path = require('path');

//服务端webpack
module.exports ={
    mode:'development',
    // 客户端入口文件
    entry:'./client/index.js',
    output:{
        // 打包后的文件名
        filename:'bundle.js',
        // 打包后的文件存放的地方
        path:path.resolve(__dirname,'public')
    },
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

