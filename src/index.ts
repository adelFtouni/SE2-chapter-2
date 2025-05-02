import {readCSVFile} from "./parsers/csvParser";
import * as path from 'path';
async function main(){
    const filePath = path.join(__dirname, './data','cake orders.csv');
    
//const data = await readCSVFile(filePath,false);
const data = await readCSVFile("src/data/cake orders.csv");
console.log(filePath)
console.log(data);
}

main();