import { Book, Format, Genre, Language, Packaging, SpecialEdition } from "model/Book.model";
import { IMapper } from "./IMapper";
import { BookBuilder } from "../model/builders/book.builder";

//used in jsonParser.ts to return a promise where the data having this type
// so we can loop through the rows using map in index.ts while building the Book objects
export interface DatasetRow {
  'Order ID': string;
  'Book Title': string;
  Author: string;
  Genre: string;
  Format: string;
  Language: string;
  Publisher: string;
  'Special Edition': string;
  Packaging: string;
  Price: string;
  Quantity: string;
}

export class BookMapper implements IMapper<DatasetRow, Book> {
  map(data: DatasetRow): Book {
    return new BookBuilder()
      .setId(data['Order ID'])
      .setBookTitle(data['Book Title'])
      .setAuthor(data.Author)
      .setGenre(data.Genre as Genre)
      .setFormat(data.Format as Format)
      .setLanguage(data.Language as Language)
      .setPublisher(data.Publisher)
      .setSpecialEdition(data['Special Edition'] as SpecialEdition)
      .setPackaging(data.Packaging as Packaging)
      .setPrice(parseFloat(data.Price))
      .setQuantity(parseInt(data.Quantity))
      .build();
  }
}
