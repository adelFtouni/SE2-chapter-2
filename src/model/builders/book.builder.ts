import logger from "../../util/logger";
import { Book , Genre,Format,Language,SpecialEdition,Packaging } from "../../model/Book.model";

export class BookBuilder{
  private orderId!: string;
  private bookTitle!: string;
  private author!: string;
  private genre!: Genre;
  private format!: Format;
  private language!: Language;
  private publisher!: string;
  private specialEdition!: SpecialEdition;
  private packaging!: Packaging;
  private price!: number;
  private quantity!: number;

  public setId(orderId: string): BookBuilder {
    this.orderId = orderId;
    return this;
  }

  public setBookTitle(bookTitle: string): BookBuilder {
    this.bookTitle = bookTitle;
    return this;
  }

  public setAuthor(author: string): BookBuilder {
    this.author = author;
    return this;
  }

  public setGenre(genre: Genre): BookBuilder {
    this.genre = genre;
    return this;
  }

  public setFormat(format: Format): BookBuilder {
    this.format = format;
    return this;
  }

  public setLanguage(language: Language): BookBuilder {
    this.language = language;
    return this;
  }

  public setPublisher(publisher: string): BookBuilder {
    this.publisher = publisher;
    return this;
  }

  public setSpecialEdition(specialEdition: SpecialEdition): BookBuilder {
    this.specialEdition = specialEdition;
    return this;
  }

  public setPackaging(packaging: Packaging): BookBuilder {
    this.packaging = packaging;
    return this;
  }

  public setPrice(price: number): BookBuilder {
    this.price = price;
    return this;
  }

  public setQuantity(quantity: number): BookBuilder {
    this.quantity = quantity;
    return this;
  }

  build() : Book {
    const requiredProperties = [
      this.orderId,
      this.bookTitle,
      this.author,
      this.genre,
      this.format,
      this.language,
      this.publisher,
      this.specialEdition,
      this.packaging,
      this.price,
      this.quantity
    ];
    requiredProperties.forEach(property => {
      if(!property){
        logger.error("missing property , could not create a book");
        throw new Error("missing property occured");
      }
    });
    if(this.price < 0){
      logger.error("price should be greater than zero");
      throw new Error("price should be greater than zero");
  }
   return new Book(
  this.orderId,
  this.bookTitle,
  this.author,
  this.genre,
  this.format,
  this.language,
  this.publisher,
  this.specialEdition,
  this.packaging,
  this.price,
  this.quantity
   )
  }
}