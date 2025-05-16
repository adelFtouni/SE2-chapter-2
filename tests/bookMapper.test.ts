import { Book } from "../src/model/Book.model";
import { BookMapper,DatasetRow} from "./../src/mappers/book.mapper";

// A valid dataset row to reuse
const validRow: DatasetRow = {
  "Order ID": "123",
  "Book Title": "Test Book",
  Author: "Jane Doe",
  Genre: "Fiction",
  Format: "Hardcover",
  Language: "English",
  Publisher: "ABC Publishing",
  "Special Edition": "None",
  Packaging: "Box",
  Price: "19.99",
  Quantity: "5"
};

// Helper function to clone and modify rows
function cloneRow(overrides: Partial<DatasetRow>): DatasetRow {
  return {
    ...validRow,
    ...overrides,
  };
}

describe("BookMapper", () => {
  const mapper = new BookMapper();

  it("should map a valid DatasetRow to a Book object", () => {
    const book = mapper.map(validRow);
    expect(book.getBookTitle()).toBe("Test Book");
    expect(book.getPrice()).toBe(19.99);
    expect(book.getQuantity()).toBe(5);
   expect(book).toBeInstanceOf(Book);
  });

  it("should throw if required numeric fields are invalid", () => {
    const invalidPrice = cloneRow({ Price: "invalid" });
    const invalidQuantity = cloneRow({ Quantity: "NaN" });

    expect(() => mapper.map(invalidPrice)).toThrow();
    expect(() => mapper.map(invalidQuantity)).toThrow();
  });

  it("should throw if required fields are missing", () => {
    const rowMissingAuthor = { ...validRow } as DatasetRow;
    // Forcefully omit a field by casting to unknown first
    delete (rowMissingAuthor as unknown as Record<string, string>)["Author"];

    // Cast to DatasetRow assuming the builder will throw due to missing data
    expect(() => mapper.map(rowMissingAuthor)).toThrow();
  });

  it("should handle extra unexpected fields gracefully", () => {
    const rowWithExtraField = {
      ...validRow,
      
      Extra: "Something extra"
    };

    expect(() => mapper.map(rowWithExtraField)).not.toThrow();
  });

  it("should throw if numeric strings are empty", () => {
    const rowWithEmptyPrice = cloneRow({ Price: "" });
    expect(() => mapper.map(rowWithEmptyPrice)).toThrow();
  });
});
