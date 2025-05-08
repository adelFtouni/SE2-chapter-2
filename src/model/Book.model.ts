import { Item, ItemCategory } from './Item.model';

 type Genre = 
  | 'Science Fiction'
  | 'Thriller'
  | 'Biography'
  | 'Mystery'
  | 'Fantasy'
  | 'Romance'
  | 'Historical Fiction'
  | 'Non-Fiction';

 type Format = 
  | 'Paperback'
  | 'Hardcover'
  | 'eBook';

 type Language = 
  | 'English'
  | 'French'
  | 'Spanish'
  | 'German';

 type SpecialEdition = 
  | 'Signed Copy'
  | 'Limited Edition'
  | 'None';

 type Packaging = 
  | 'Eco-Friendly Packaging'
  | 'Standard Packaging'
  | 'Gift Wrapped';

export class Book implements Item {
  getCategory(): ItemCategory {
    return ItemCategory.Book;
  }

  private orderId: string;
  private bookTitle: string;
  private author: string;
  private genre: Genre;
  private format: Format;
  private language: Language;
  private publisher: string;
  private specialEdition: SpecialEdition;
  private packaging: Packaging;
  private price: number;
  private quantity: number;

  constructor(
    orderId: string,
    bookTitle: string,
    author: string,
    genre: Genre,
    format: Format,
    language: Language,
    publisher: string,
    specialEdition: SpecialEdition,
    packaging: Packaging,
    price: number,
    quantity: number
  ) {
    this.orderId = orderId;
    this.bookTitle = bookTitle;
    this.author = author;
    this.genre = genre;
    this.format = format;
    this.language = language;
    this.publisher = publisher;
    this.specialEdition = specialEdition;
    this.packaging = packaging;
    this.price = price;
    this.quantity = quantity;
  }
  getOrderId(): string {
    return this.orderId;
  }

  getBookTitle(): string {
    return this.bookTitle;
  }

  getAuthor(): string {
    return this.author;
  }

  getGenre(): Genre {
    return this.genre;
  }

  getFormat(): Format {
    return this.format;
  }

  getLanguage(): Language {
    return this.language;
  }

  getPublisher(): string {
    return this.publisher;
  }

  getSpecialEdition(): SpecialEdition {
    return this.specialEdition;
  }

  getPackaging(): Packaging {
    return this.packaging;
  }

  getPrice(): number {
    return this.price;
  }

  getQuantity(): number {
    return this.quantity;
  }
}
    
    
  