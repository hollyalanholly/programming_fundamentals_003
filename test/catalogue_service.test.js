const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(catalogueService.checkBookByTitle("The Assassination of Margaret Thatcher")).toBe(true);
      expect(catalogueService.checkBookByTitle("Adrian Mole")).toBe(false);
    });
  });

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns no. book starting with that letter", () => {
      expect(catalogueService.countBooksByFirstLetter("T")).toBe(5);
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
      expect(catalogueService.countBooksByFirstLetter("w")).toBe(2);
    });
  });

    describe("catalogueService.getQuantity", () => {
      test("looks at the title and finds how many books in stock", () => {
        expect(catalogueService.getQuantity("A Place of Greater Safety")).toBe(11);
      });

    });

    describe("catalogueService.checkQuantity", () => {
      test("returns true if the title matches and if quantity is more than or equal to quantity", () => {
        expect(catalogueService.checkQuantity("By Night In Chile", 4)).toBe(true);
        expect(catalogueService.checkQuantity("By Night In Chile", 100)).toBe(false);
      });
    });
  });

