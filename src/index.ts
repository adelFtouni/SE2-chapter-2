
import { BookBuilder } from "./model/builders/book.builder";

function createBook(): void {
    const book = new BookBuilder()
.setId("12345")
.setBookTitle("The Great Adventure")
.setAuthor("John Doe")
.setGenre("Fantasy")
.setFormat("Hardcover")
.setLanguage("English")
.setPublisher("Adventure Books Inc.")
.setSpecialEdition("Signed Copy")
.setPackaging("Gift Wrapped")
.setPrice(29.99)
.setQuantity(3)
.build();
    console.log(book);
}

async function main() {
    createBook();
}

main();