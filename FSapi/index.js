const fs = require('fs');
const readline = require('readline');

const filePath = './text.txt';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter text for message.txt file ', (answer) => {
//   // TODO: Log the answer in a database
//   // console.log(`Thank you for your valuable feedback: ${answer}`);

//   fs.writeFile('message.txt', answer, 'utf8', callbackFn);

//   rl.close();
// });

// fs.open(filePath, 'r', (err, fd) => {
//     if (err) {
//         if (err.code === 'ENOENT') {
//             console.error('myfile does not exist');
//             return;
//         }

//         throw err;
//     }
//     // readMyData(fd);
//     console.log(fd);
// });

// const data = new Uint8Array(Buffer.from('Hello World'));
// fs.writeFile('message.txt', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

function callbackFn(err) {
    if (err) throw err;
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(`You have entered : ${data}`);
    });
}

fs.appendFile(filePath, '\n' +'data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
