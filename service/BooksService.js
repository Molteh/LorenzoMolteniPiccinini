'use strict';

const {database} = require("./Database");

/**
 * Delete an existing book.
 *
 * book_id Long The id of the desired book.
 * returns Book
 **/
exports.booksBookIdDELETE = function(book_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "num_of_pages" : 2,
  "genres" : [ "genres", "genres" ],
  "imgpath" : "imgpath",
  "isbn13" : 5,
  "description" : "description",
  "isbn10" : 5,
  "book_id" : 0,
  "current_price" : 6.0274563,
  "availability" : "unreleased",
  "title" : "title",
  "cover_type" : "hard cover",
  "authors" : {
    "author_ids" : [ 1, 1 ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the full description of a book.
 *
 * book_id Long Id of the book to retrieve.
 * returns Book
 **/
exports.booksBookIdGET = function(book_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "num_of_pages" : 2,
  "genres" : [ "genres", "genres" ],
  "imgpath" : "imgpath",
  "isbn13" : 5,
  "description" : "description",
  "isbn10" : 5,
  "book_id" : 0,
  "current_price" : 6.0274563,
  "availability" : "unreleased",
  "title" : "title",
  "cover_type" : "hard cover",
  "authors" : {
    "author_ids" : [ 1, 1 ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates an existing Book.
 *
 * book_id Long The id of the desired book.
 * book BookContent The new fields to update.
 * returns Book
 **/
exports.booksBookIdPUT = function(book_id,book) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "num_of_pages" : 2,
  "genres" : [ "genres", "genres" ],
  "imgpath" : "imgpath",
  "isbn13" : 5,
  "description" : "description",
  "isbn10" : 5,
  "book_id" : 0,
  "current_price" : 6.0274563,
  "availability" : "unreleased",
  "title" : "title",
  "cover_type" : "hard cover",
  "authors" : {
    "author_ids" : [ 1, 1 ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the lists of books similar to a specific one.
 *
 * book_id Long The id of the reference book.
 * offset Long Offset with regards to the current page. (optional)
 * limit Long Items per page. (optional)
 * returns List
 **/
exports.booksBookIdSimiliarsGET = function(book_id,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "num_of_pages" : 2,
  "genres" : [ "genres", "genres" ],
  "imgpath" : "imgpath",
  "isbn13" : 5,
  "description" : "description",
  "isbn10" : 5,
  "book_id" : 0,
  "current_price" : 6.0274563,
  "availability" : "unreleased",
  "title" : "title",
  "cover_type" : "hard cover",
  "authors" : {
    "author_ids" : [ 1, 1 ]
  }
}, {
  "num_of_pages" : 2,
  "genres" : [ "genres", "genres" ],
  "imgpath" : "imgpath",
  "isbn13" : 5,
  "description" : "description",
  "isbn10" : 5,
  "book_id" : 0,
  "current_price" : 6.0274563,
  "availability" : "unreleased",
  "title" : "title",
  "cover_type" : "hard cover",
  "authors" : {
    "author_ids" : [ 1, 1 ]
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a preview of all the books.
 *
 * offset Long Offset with regards to the current page. (optional)
 * limit Long Items per page. (optional)
 * returns List
 **/
exports.booksGET = function(offset,limit) {
  return new Promise((resolve, reject) => {
    //fare la query sull'autore
    database.select('title').table("book").limit(limit).offset(offset).then((result) => {
      resolve(result);
    });
  });
}


/**
 * Inserts a new book.
 *
 * book BookContent The book object to insert.
 * returns Book
 **/
exports.booksPOST = function(book) {
  return new Promise(function(resolve, reject) {

    // TODO align backend and db cover type names and add covr_type
    const obj = {
      'title': book.title,
      'isbn10': book.isbn10,
      'isbn13': book.isbn13,
      'description': book.info.description,
      'current_price': book.info.current_price,
      'num_of_pages': book.num_of_pages,
      'availability': book.availability,
      'img_path': book.imgpath
    };

    return database
        .table("book")
        .insert(obj, ['book_id'])
        .then(data => {
          console.log(data);
          resolve(data);
        })
        .catch(err => console.log(err));
  });
}


/**
 * Returns a preview of all the books filtered by keyword.
 *
 * keyword String A generic keyword to filter all the books. (optional)
 * title String The desired title of the book. (optional)
 * genre String The genre to filter the book by. (optional)
 * author String The author to search the book by. (optional)
 * offset Long Offset with regards to the current page. (optional)
 * limit Long Items per page. (optional)
 * returns List
 **/
exports.booksSearchGET = function(keyword,title,genre,author,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "num_of_pages" : 2,
  "genres" : [ "genres", "genres" ],
  "imgpath" : "imgpath",
  "isbn13" : 5,
  "description" : "description",
  "isbn10" : 5,
  "book_id" : 0,
  "current_price" : 6.0274563,
  "availability" : "unreleased",
  "title" : "title",
  "cover_type" : "hard cover",
  "authors" : {
    "author_ids" : [ 1, 1 ]
  }
}, {
  "num_of_pages" : 2,
  "genres" : [ "genres", "genres" ],
  "imgpath" : "imgpath",
  "isbn13" : 5,
  "description" : "description",
  "isbn10" : 5,
  "book_id" : 0,
  "current_price" : 6.0274563,
  "availability" : "unreleased",
  "title" : "title",
  "cover_type" : "hard cover",
  "authors" : {
    "author_ids" : [ 1, 1 ]
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the lists of all available genres.
 *
 * offset Long Offset with regards to the current page. (optional)
 * limit Long Items per page. (optional)
 * returns List
 **/
exports.genresGET = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ { }, { } ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

