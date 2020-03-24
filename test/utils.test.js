const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });

  test("returns 0 when passed 0", () => {
    expect(utils.addVAT(0)).toBe(0);
  });

  test("returns 'Pricing Error' when passed -6", () => {
    expect(utils.addVAT(-6)).toBe('Pricing Error');
  });

});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });

  test("returns 'Need more info' when passed Madonna", () => {
    expect(utils.getFullName("Madonna")).toBe('Need more info');
  });

  test("returns 'Only strings allowed' when passed 123, 456", () => {
    expect(utils.getFullName(123, 456)).toBe('Only strings allowed');
  });

  test("returns 'Only strings allowed' when passed 'Boris', 456", () => {
    expect(utils.getFullName('Boris', 456)).toBe('Only strings allowed');
  });

  test("returns 'Only strings allowed' when passed 123, 'Johnson'", () => {
    expect(utils.getFullName(123, 'Johnson')).toBe('Only strings allowed');
  });

});

describe("utils.makeHalfPrice", () => {
  test("returns 50 when passed 100", () => {
    expect(utils.makeHalfPrice(200)).toBe(100);
  });

  test("returns 0 when passed 0", () => {
    expect(utils.makeHalfPrice(0)).toBe(0);
  });

  test("returns 'Pricing Error' when passed -100", () => {
    expect(utils.makeHalfPrice(-100)).toBe('Pricing Error');
  });
});

describe("utils.countBooks", () => {
  test("returns 4 when passed ['The Hobbit', 'Fellowship of the Ring', 'Two Towers', 'Return of the King']", () => {
    expect(utils.countBooks(['The Hobbit', 'Fellowship of the Ring', 'Two Towers', 'Return of the King'])).toBe(4);
  });

  test("returns 2 when passed ['1984', 'Brave New World']", () => {
    expect(utils.countBooks(['1984', 'Brave New World'])).toBe(2);
  });

  test("returns 0 when passed []", () => {
    expect(utils.countBooks([])).toBe(0);
  });

  test("returns 'Book Title Error' when passed [1, 2, 3, 4]", () => {
    expect(utils.countBooks([1, 2, 3, 4])).toBe('Book Title Error');
  });

  test("returns 'Book Title Error' when passed ['The Hobbit', 2, 3, 4]", () => {
    expect(utils.countBooks(['The Hobbit', 2, 3, 4])).toBe('Book Title Error');
  });

  test("returns 'Book Title Error' when passed [1, 'The Hobbit', 3, 4]", () => {
    expect(utils.countBooks([1, 'The Hobbit', 3, 4])).toBe('Book Title Error');
  });

  test("returns 'Book Title Error' when passed [1, 2, 'The Hobbit', 4]", () => {
    expect(utils.countBooks([1, 2, 'The Hobbit', 4])).toBe('Book Title Error');
  });

  test("returns 'Book Title Error' when passed [1, 2, 3, 'The Hobbit']", () => {
    expect(utils.countBooks([1, 2, 3, 'The Hobbit'])).toBe('Book Title Error');
  });

});

describe("utils.isInStock", () => {
  test("returns true if the title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 2
    };

    expect(utils.isInStock(book)).toBe(true);
  });

  test("returns false if the title is not in stock", () => {
    const book = {
      title: "The Hobbit",
      author: "JRR Tolkien",
      yearOfPublication: 1936,
      quantity: 0
    };

    expect(utils.isInStock(book)).toBe(false);
  });

  test("returns true if the title is in stock", () => {
    const book = {
      title: "How to Self-Isolate",
      author: "AN Expert",
      yearOfPublication: 2020,
      quantity: 8000000000
    };

    expect(utils.isInStock(book)).toBe(true);
  });

  test("returns false if the title is out of print", () => {
    const book = {
      title: "Fly Fishing",
      author: "JR Hartley",
      yearOfPublication: 1972,
      quantity: -1
    };

    expect(utils.isInStock(book)).toBe(false);
  });

});

describe("utils.getTotalOrderPrice", () => {
  test("returns 120 when passed 10, 10", () => {
    expect(utils.getTotalOrderPrice(10, 10)).toBe(120);
  });
  
  test("returns 144 when passed 6, 20", () => {
    expect(utils.getTotalOrderPrice(6, 20)).toBe(144);
  });

  test("returns 9.6 when passed 4, 2", () => {
    expect(utils.getTotalOrderPrice(4, 2)).toBe(9.6);
  });

  test("returns 0 when passed 0, 28", () => {
    expect(utils.getTotalOrderPrice(0, 28)).toBe(0);
  });

  test("returns 'Quantity must be greater than 0' when passed 28, 0", () => {
    expect(utils.getTotalOrderPrice(28, 0)).toBe('Quantity must be greater than 0');
  });

  test("returns 'Pricing Error' when passed -5, 2", () => {
    expect(utils.getTotalOrderPrice(-5, 2)).toBe('Pricing Error');
  });

});
