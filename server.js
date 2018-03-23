const Vue = require('vue')
const express = require('express');
const server = express();
server.use(express.static(__dirname+'/public'));
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `    <div>
                            <h3>访问的 URL 是： {{ url }}</h3>
                            <img src="img/bg.jpg" alt="風景照">
                       </div>`
    })
    const context = {
        title: 'hello-world',
    }
    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error'+err)
            return
        }
        res.end(html);
    })
});

server.listen(8080)
