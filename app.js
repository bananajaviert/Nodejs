import http from 'http'
import fs from 'fs'
import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    // Build file path
    let filePath = path.join(__dirname, './public', 
    req.url === '/' ? '/index.html': req.url)

    // Get file extension
    let extname = path.extname(filePath)

    // Initial content type
    let contentType = 'text/html'

    // Check extension and ser content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code === 'ENOENT') {
                // Page isn't found
                fs.readFile(path.join(__dirname, './public', './404.html'),
                (err, content) => {
                    if(err) throw err
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(content, 'utf-8')
                })
            } else {
                // Some server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
            console.log(err)
        } else {
            // Success response
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content, 'utf-8')
        }
    })
})

server.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) })

    // if(req.url === '/') {
    //     return fs.readFile(path.join(__dirname, './public', 'index.html'), 
    //     (err, content) => {
    //         if(err) throw err
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(content)
    //     })
    // }
    // if(req.url === '/groups/izone') {
    //     return fs.readFile(path.join(__dirname, './public', './izone.html'), 
    //     (err, content) => {
    //         if(err) throw err
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(content)
    //     })
    // }
    // if(req.url === '/groups/loona') {
    //     return fs.readFile(path.join(__dirname, './public', './loona.html'), 
    //     (err, content) => {
    //         if(err) throw err
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(content)
    //     })
    // }
    // if(req.url === '/api/users') {
    //     const users = [
    //         { name: 'Honda Hitomi', age: 19},
    //         { name: 'Kang Hyewn', age: 21 },
    //         { name: 'Jo Yuri', age: 19 },
    //         { name: 'Miyawaki Sakura', age: 19 }
    //     ]
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(users))
    // }
