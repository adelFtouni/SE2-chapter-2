import { BookBuilder } from '../src/model/builders/book.builder';
import { Genre, Book } from '../src/model/Book.model';

describe('BookBuilder', () => {
  let builder: BookBuilder;

  beforeEach(() => {
    builder = new BookBuilder();
  });

  it('should build a valid Book when all fields are set', () => {
    const book = builder
      .setId('b001')
      .setBookTitle('The Testing Book')
      .setAuthor('Jane Tester')
      .setGenre('Mystery')
      .setFormat('Paperback')
      .setLanguage('English')
      .setPublisher('Test Publishing')
      .setSpecialEdition('Signed Copy')
      .setPackaging('Eco-Friendly Packaging')
      .setPrice(19.99)
      .setQuantity(5)
      .build();

    expect(book).toBeInstanceOf(Book);
    expect(book.getBookTitle()).toBe('The Testing Book');
    expect(book.getGenre()).toBe('Mystery');
    expect(book.getFormat()).toBe('Paperback');
  });

  it('should support method chaining', () => {
    const result = builder
      .setId('b002')
      .setBookTitle('Chaining Book')
      .setAuthor('Chain Author')
      .setGenre('Fantasy')
      .setFormat('eBook')
      .setLanguage('French')
      .setPublisher('Chain Publisher')
      .setSpecialEdition('Limited Edition')
      .setPackaging('Gift Wrapped')
      .setPrice(25)
      .setQuantity(10);
expect(result).toBeInstanceOf(BookBuilder);
    const book = result.build();
    expect(book).toBeInstanceOf(Book);
  });

  it('should throw error if a required property is missing', () => {
    builder
      .setId('b003')
      .setBookTitle('Incomplete Book')
      .setAuthor('Missing Genre')
      // Missing genre
      .setFormat('Paperback')
      .setLanguage('English')
      .setPublisher('Missing Genre Pub')
      .setSpecialEdition('None')
      .setPackaging('Standard Packaging')
      .setPrice(10)
      .setQuantity(1);

    expect(() => builder.build()).toThrow('missing property occured');
  });

  it('should throw error if price is negative', () => {
    builder
      .setId('b004')
      .setBookTitle('Negative Price Book')
      .setAuthor('Wrong Pricer')
      .setGenre('Thriller')
      .setFormat('Hardcover')
      .setLanguage('German')
      .setPublisher('Negative Pub')
      .setSpecialEdition('None')
      .setPackaging('Standard Packaging')
      .setPrice(-5)
      .setQuantity(2);

    expect(() => builder.build()).toThrow('price should be greater than zero');
  });

  it.each<Genre>([
    'Science Fiction',
    'Thriller',
    'Biography',
    'Mystery',
    'Fantasy',
    'Romance',
    'Historical Fiction',
    'Non-Fiction',
  ])('should build book with valid genre: %s', (genre) => {
    const book = builder
      .setId('g001')
      .setBookTitle('Genre Test')
      .setAuthor('Author G')
      .setGenre(genre)
      .setFormat('Paperback')
      .setLanguage('English')
      .setPublisher('GenrePub')
      .setSpecialEdition('None')
      .setPackaging('Standard Packaging')
      .setPrice(10)
      .setQuantity(1)
      .build();

    expect(book.getGenre()).toBe(genre);
  });
});
