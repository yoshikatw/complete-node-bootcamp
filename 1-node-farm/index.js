const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////////////////////////////////////////////////////
// File

// Blocking, synchronous way
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt', textOut, 'utf-8');
// console.log('File written!');

// Non-blocking, asynchronous way
// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('Error! 💥');

//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//         fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//             console.log('Your file has been written 😊');
//             })
//         });
//     });
// });
// console.log('Will read file!');

///////////////
// SERVER
const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } else if (pathName === '/api'){
            res.writeHead(200, {'Content-type': 'application/json'})
            res.end(data);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8',
            'my-own-header': 'hello-world',
        });

        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listing to request on port 8000');
});