'use strict';


/**
 * Remove item(s) from cart
 *
 * item Item Item to be removed and its quantity
 * returns Cart
 **/
exports.accountCartDELETE = function(item) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total_price" : 0,
  "book_list" : [ {
    "imgpath" : "imgpath",
    "isbn13" : 5,
    "isbn10" : 5,
    "book_id" : 0,
    "current_price" : 6.0274563,
    "availability" : "unreleased",
    "title" : "title",
    "authors" : {
      "author_ids" : [ 1, 1 ]
    },
    "info" : {
      "num_of_pages" : 2,
      "genres" : [ "genres", "genres" ],
      "description" : "description",
      "cover_type" : "hard cover"
    }
  }, {
    "imgpath" : "imgpath",
    "isbn13" : 5,
    "isbn10" : 5,
    "book_id" : 0,
    "current_price" : 6.0274563,
    "availability" : "unreleased",
    "title" : "title",
    "authors" : {
      "author_ids" : [ 1, 1 ]
    },
    "info" : {
      "num_of_pages" : 2,
      "genres" : [ "genres", "genres" ],
      "description" : "description",
      "cover_type" : "hard cover"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns list of items present in the cart of the specified user.
 *
 * offset Long Offset with regards to the current page. (optional)
 * limit Long Items per page. (optional)
 * returns Cart
 **/
exports.accountCartGET = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total_price" : 0,
  "book_list" : [ {
    "imgpath" : "imgpath",
    "isbn13" : 5,
    "isbn10" : 5,
    "book_id" : 0,
    "current_price" : 6.0274563,
    "availability" : "unreleased",
    "title" : "title",
    "authors" : {
      "author_ids" : [ 1, 1 ]
    },
    "info" : {
      "num_of_pages" : 2,
      "genres" : [ "genres", "genres" ],
      "description" : "description",
      "cover_type" : "hard cover"
    }
  }, {
    "imgpath" : "imgpath",
    "isbn13" : 5,
    "isbn10" : 5,
    "book_id" : 0,
    "current_price" : 6.0274563,
    "availability" : "unreleased",
    "title" : "title",
    "authors" : {
      "author_ids" : [ 1, 1 ]
    },
    "info" : {
      "num_of_pages" : 2,
      "genres" : [ "genres", "genres" ],
      "description" : "description",
      "cover_type" : "hard cover"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add item to cart.
 *
 * book Book The book to be added to cart.
 * returns Cart
 **/
exports.accountCartPOST = function(book) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total_price" : 0,
  "book_list" : [ {
    "imgpath" : "imgpath",
    "isbn13" : 5,
    "isbn10" : 5,
    "book_id" : 0,
    "current_price" : 6.0274563,
    "availability" : "unreleased",
    "title" : "title",
    "authors" : {
      "author_ids" : [ 1, 1 ]
    },
    "info" : {
      "num_of_pages" : 2,
      "genres" : [ "genres", "genres" ],
      "description" : "description",
      "cover_type" : "hard cover"
    }
  }, {
    "imgpath" : "imgpath",
    "isbn13" : 5,
    "isbn10" : 5,
    "book_id" : 0,
    "current_price" : 6.0274563,
    "availability" : "unreleased",
    "title" : "title",
    "authors" : {
      "author_ids" : [ 1, 1 ]
    },
    "info" : {
      "num_of_pages" : 2,
      "genres" : [ "genres", "genres" ],
      "description" : "description",
      "cover_type" : "hard cover"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
