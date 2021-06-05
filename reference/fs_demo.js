import fs from 'fs'
import path from 'path'
import URL from 'url';


const __filename = URL.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Read File
// Asynchronous Node.js behavior
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//         if(err) throw err
//         console.log(data)
//         console.log(__filename)
//         console.log(__dirname);
// })

// Rename File
fs.rename(
        path.join(__dirname, '/test', 'hello.txt'), 
        path.join(__dirname, '/test', 'rename.txt'), err => {
        if(err) throw err
        console.log('File renamed!')
})







// Create a folder
// fs.mkdir(path.join(__dirname , '/test'), {}, err => {
//     if(err) throw err
//     console.log('Folder created')
// })

// Create and write to file
// fs.writeFile(path.join(__dirname , '/test', 'hello.txt'), 'Hello world!', err => {
//     if(err) throw err
//     console.log('File written!')

//     // Append file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Learning Node.js from Traversy Media', err => {
//         if(err) throw err
//         console.log('File updated!')
//     })
    
// })


// const sum = 2
//Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     return new Promise((resolve, reject) => {
//         if(sum === 2) resolve()
//         else reject()
//     }).then(() => {//Resolve callback
//         console.log(data)
//     }, () => { //Reject callback
//         console.log('Request rejected.')
//     }).catch(() => {
//         console.log(err)
//     }).finally(() => {
//         console.log('Promise response callback')
//     })
// })


// Refactored Promise
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     return new Promise ((resolve, reject )=> {
//         if(sum !== null) resolve()
//         else reject()
//     })
//     .then(() => {// Resolve Callback 
//         if(sum === undefined) throw 'Undefined'
//         if(sum === '') throw 'Empty Value'
//         if(isNaN(sum)) throw 'Not a number'

//         console.log(data)
//     }, () => {// Reject Callback
//         console.log('Rejected')
//     })
//     .catch((error) => {
//         console.log(error)
//     }).finally(() => {
//         console.log('Promise refactored callback executed')
//     })
// })


    