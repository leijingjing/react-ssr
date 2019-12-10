import React from 'react';
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from '../src/App'

const app = express();

// 静态资源目录
app.use(express.static('public'))
app.get('/',(req,res)=> {
    // 把react解析成虚拟dom
    const content = renderToString(App)
    res.send(`
        <html>
            <head>
                <mate charset="utf-8"/>
                <title>react-ssr</title>
            </head>
            <boby>
                <div id="root">${content}</div>
                <script src="/bundle.js"></script> 
            </boby>
        </html>
    `)
})

app.listen(9090, ()=> {
    console.log('监听完毕')
})
