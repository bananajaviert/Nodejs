import http from 'http'

const port = 8080

// Create Server obj

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Welcome!')
        res.end()
    } else if (req.url === '/groups/izone') {
        res.write('This is IZ*ONE!')
        res.end()
    } else if (req.url === '/groups/loona') {
        res.write('This is LOONA!')
        res.end()
    } else if (req.url === `/groups/cherry%20bullet`) {
        res.write('This is Cherry Bullet!')
        res.end()
    }
}).listen(port, () => { console.log('Listening on port', port) })

