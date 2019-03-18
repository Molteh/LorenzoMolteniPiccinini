'use strict';


/**
 * Delete an existing author.
 *
 * author_id Long The id of the desired author.
 * returns Author
 **/
exports.authorsAuthorIdDELETE = function(author_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthdate" : "birthdate",
  "birthplace" : "birthplace",
  "surname" : "surname",
  "imgpath" : "imgpath",
  "name" : "name",
  "description" : "description",
  "author_id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the full description of an author.
 *
 * author_id Long The id of the desired author.
 * returns Author
 **/
exports.authorsAuthorIdGET = function(author_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthdate" : "birthdate",
  "birthplace" : "birthplace",
  "surname" : "surname",
  "imgpath" : "imgpath",
  "name" : "name",
  "description" : "description",
  "author_id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing author information.
 *
 * author_id Long The id of the desired author.
 * author Author The fields to update.
 * returns Author
 **/
exports.authorsAuthorIdPUT = function(author_id,author) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthdate" : "birthdate",
  "birthplace" : "birthplace",
  "surname" : "surname",
  "imgpath" : "imgpath",
  "name" : "name",
  "description" : "description",
  "author_id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a preview of all the authors.
 *
 * offset Long Offset with regards to the current page. (optional)
 * limit Long Items per page. (optional)
 * returns List
 **/
exports.authorsGET = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "birthdate" : "birthdate",
  "birthplace" : "birthplace",
  "surname" : "surname",
  "imgpath" : "imgpath",
  "name" : "name",
  "description" : "description",
  "author_id" : 0
}, {
  "birthdate" : "birthdate",
  "birthplace" : "birthplace",
  "surname" : "surname",
  "imgpath" : "imgpath",
  "name" : "name",
  "description" : "description",
  "author_id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Inserts a new Author.
 *
 * author Author The author to be inserted.
 * returns Author
 **/
exports.authorsPOST = function(author) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthdate" : "birthdate",
  "birthplace" : "birthplace",
  "surname" : "surname",
  "imgpath" : "imgpath",
  "name" : "name",
  "description" : "description",
  "author_id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
