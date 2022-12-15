import fs from "fs";

async function readFiles(fileName) { 
    const promise1 = new Promise(function (resolve, reject) {
        try {
            const file = fs.readFileSync(fileName);
            if (file) {
                resolve(file.toString());
            }
        } catch (err) { 
            reject("File not found");
        }
    });
    return promise1;
    
}

const promise1 = readFiles("text1.txt");
const promise2 = readFiles("text2.txt");
const promise3 = readFiles("text3.txt");
Promise.any([promise1, promise2, promise3]).then((res) => { console.log(res) });
Promise.race([promise1, promise2, promise3]).then((res) => { console.log(res) });