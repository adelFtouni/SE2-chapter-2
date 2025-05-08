import { Book, Genre, Format, Language, SpecialEdition, Packaging } from '../src/model/Book.model';
import { ItemCategory } from '../src/model/Item.model';



describe('Book Class', () => {
  let book: Book;

  beforeAll(() => {
    console.log('Initializing Book tests...');
  });

  beforeEach(() => {
    book = new Book(
      '12345',
      'The Great Adventure',
      'John Doe',
      'Fantasy',
      'Hardcover',
      'English',
      'Adventure Books Inc.',
      'Signed Copy',
      'Gift Wrapped',
      29.99,
      3
    );
  });

  afterEach(() => {
    console.log('Test completed.');
  });

  afterAll(() => {
    console.log('All Book tests completed.');
  });

  // Standard Book field tests
  it('should return correct order ID', () => {
    expect(book.getOrderId()).toBe('12345');
  });

  it('should return correct book title', () => {
    expect(book.getBookTitle()).toBe('The Great Adventure');
  });

  it('should return correct author', () => {
    expect(book.getAuthor()).toBe('John Doe');
  });

  it('should return correct genre', () => {
    expect(book.getGenre()).toBe('Fantasy');
  });

  it('should return correct format', () => {
    expect(book.getFormat()).toBe('Hardcover');
  });

  it('should return correct language', () => {
    expect(book.getLanguage()).toBe('English');
  });

  it('should return correct publisher', () => {
    expect(book.getPublisher()).toBe('Adventure Books Inc.');
  });

  it('should return correct special edition', () => {
    expect(book.getSpecialEdition()).toBe('Signed Copy');
  });

  it('should return correct packaging', () => {
    expect(book.getPackaging()).toBe('Gift Wrapped');
  });

  it('should return correct price', () => {
    expect(book.getPrice()).toBeCloseTo(29.99);
  });

  it('should return correct quantity', () => {
    expect(book.getQuantity()).toBe(3);
  });

  it('should return correct category', () => {
    expect(book.getCategory()).toBe(ItemCategory.Book);
  });
});

// Tests for valid enum values
describe('Enum type tests', () => {
  it.each<Genre>([
    'Science Fiction',
    'Thriller',
    'Biography',
    'Mystery',
    'Fantasy',
    'Romance',
    'Historical Fiction',
    'Non-Fiction'
  ])('should accept Genre: %s', (genre) => {
    const book = new Book(
      'id',
      'Title',
      'Author',
      genre,
      'Paperback',
      'English',
      'Publisher',
      'None',
      'Standard Packaging',
      10,
      1
    );
    expect(book.getGenre()).toBe(genre);
  });

  it.each<Format>(['Paperback', 'Hardcover', 'eBook'])('should accept Format: %s', (format) => {
    const book = new Book(
      'id',
      'Title',
      'Author',
      'Mystery',
      format,
      'English',
      'Publisher',
      'None',
      'Standard Packaging',
      10,
      1
    );
    expect(book.getFormat()).toBe(format);
  });

  it.each<Language>(['English', 'French', 'Spanish', 'German'])('should accept Language: %s', (lang) => {
    const book = new Book(
      'id',
      'Title',
      'Author',
      'Mystery',
      'Paperback',
      lang,
      'Publisher',
      'None',
      'Standard Packaging',
      10,
      1
    );
    expect(book.getLanguage()).toBe(lang);
  });

  it.each<SpecialEdition>(['Signed Copy', 'Limited Edition', 'None'])('should accept SpecialEdition: %s', (edition) => {
    const book = new Book(
      'id',
      'Title',
      'Author',
      'Mystery',
      'Paperback',
      'English',
      'Publisher',
      edition,
      'Standard Packaging',
      10,
      1
    );
    expect(book.getSpecialEdition()).toBe(edition);
  });

  it.each<Packaging>(['Eco-Friendly Packaging', 'Standard Packaging', 'Gift Wrapped'])('should accept Packaging: %s', (pack) => {
    const book = new Book(
      'id',
      'Title',
      'Author',
      'Mystery',
      'Paperback',
      'English',
      'Publisher',
      'None',
      pack,
      10,
      1
    );
    expect(book.getPackaging()).toBe(pack);
  });
});
