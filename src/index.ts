// import { OrderMapper } from "./mappers/order.mapper";
// import { CSVCakeMapper } from "./mappers/cake.mapper";
// import { readCSVFile } from "./parsers/csvParser";

// import { readCSVFile } from "./parsers/csvParser";
import { BookMapper } from "./mappers/book.mapper";
import { readJsonFile } from "./parsers/jsonParser";


async function main(){
//     const data = await readCSVFile('src/data/cake orders.csv');

//     const mapper = new CSVCakeMapper();

// const orderMapper = new OrderMapper(mapper);
//    const cakesOrders = data.map(r => orderMapper.map(r))
// console.log(cakesOrders)
     const books = await readJsonFile('src/data/book orders.json');
    // //  console.log(books)
        const bookMapper = new BookMapper();
      const mappedBooks = books.map(bookMapper.map);
      console.log(mappedBooks);

    // const cakes = await readCSVFile('src/data/cake orders.csv');
    // console.log(cakes)
 }

main();