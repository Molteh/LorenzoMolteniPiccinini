const sqlDbFactory = require("knex");

let sqlDb = sqlDbFactory({
    client: "pg",
    connection: process.env.DATABASE_URL || "postgres://bciddqzwubzgxb:c0154d9c774c7b7da88220d33d4ab6bd3be0b5b32492aacf6e62c049865f3162@ec2-54-247-70-127.eu-west-1.compute.amazonaws.com:5432/d6ifalhrov4ije?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory",
    ssl: true,
    debug: true
});

accountSetup = function(database) {
    sqlDb = database;
    console.log("Checking if account table exists");
    return database.schema.hasTable("account").then(exists => {
        if (!exists) {
            console.log("It doesn't so we create it");
            return database.schema.createTable("account", table => {
              table.increments("user_id").notNullable().primary();
              table.string("email").notNullable();
              table.string("password").notNullable();
              table.string("name");
              table.string("surname");
              table.boolean("activated").notNullable();
            })
        }
    });
};

authorSetup = function(database) {
    sqlDb = database;
    console.log("Checking if author table exists");
    return database.schema.hasTable("author").then(exists => {
        if (!exists) {
            console.log("It doesn't so we create it");
            return database.schema.createTable("author", table => {
                table.increments("author_id").notNullable().primary();
                table.string("name").notNullable();
                table.string("surname").notNullable();
                table.date("birthdate");
                table.string("birthplace");
                table.text("imgpath");
                table.text("description");
            })
        }
    });
};

authorshipSetup = function(database) {
    sqlDb = database;
    console.log("Checking if authorship table exists");
    return database.schema.hasTable("authorship").then(exists => {
        if (!exists) {
            console.log("It doesn't so we create it");
            return database.schema.createTable("author", table => {
                table.integer("author_id").notNullable().references("author.author_id").onUpdate("NO ACTION").onDelete("NO ACTION");
                table.integer("book_id").notNullable().references("book.book_id").onUpdate("NO ACTION").onDelete("NO ACTION");
                table.primary(["author_id", "book_id"]);
            })
        }
    });
};

bookSetup = function(database) {
    sqlDb = database;
    console.log("Checking if book table exists");
    return database.schema.hasTable("book").then(exists => {
        if (!exists) {
            console.log("It doesn't so we create it");
            /*return database.schema.createTable("books", table => {
              table.increments();
              table.text("title");
              table.text("author");
              table.float("value");
              table.text("currency");
              table.enum("status", ["available", "out of stock"]);
            })*/;
        }
    });
};

cartSetup = function(database) {
    sqlDb = database;
    console.log("Checking if cart table exists");
    return database.schema.hasTable("cart").then(exists => {
        if (!exists) {
            console.log("It doesn't so we create it");
            /*return database.schema.createTable("books", table => {
              table.increments();
              table.text("title");
              table.text("author");
              table.float("value");
              table.text("currency");
              table.enum("status", ["available", "out of stock"]);
            })*/;
        }
    });
};

genreSetup = function(database) {
    sqlDb = database;
    console.log("Checking if genre table exists");
    return database.schema.hasTable("genre").then(exists => {
        if (!exists) {
            console.log("It doesn't so we create it");
            /*return database.schema.createTable("books", table => {
              table.increments();
              table.text("title");
              table.text("author");
              table.float("value");
              table.text("currency");
              table.enum("status", ["available", "out of stock"]);
            })*/;
        }
    });
};

purchaseSetup = function(database) {
    sqlDb = database;
    console.log("Checking if purchase table exists");
    return database.schema.hasTable("purchase").then(exists => {
        if (!exists) {
            console.log("It doesn't so we create it");
            /*return database.schema.createTable("books", table => {
              table.increments();
              table.text("title");
              table.text("author");
              table.float("value");
              table.text("currency");
              table.enum("status", ["available", "out of stock"]);
            })*/;
        }
    });
};

reservationSetup = function(database) {
    sqlDb = database;
    console.log("Checking if reservation table exists");
    return database.schema.hasTable("reservation").then(exists => {
        if (!exists) {
            console.log("It doesn't so we create it");
            /*return database.schema.createTable("books", table => {
              table.increments();
              table.text("title");
              table.text("author");
              table.float("value");
              table.text("currency");
              table.enum("status", ["available", "out of stock"]);
            })*/;
        }
    });
};

similaritySetup = function(database) {
    sqlDb = database;
    console.log("Checking if similarity table exists");
    return database.schema.hasTable("similarity").then(exists => {
        if (!exists) {
            console.log("It doesn't so we create it");
            /*return database.schema.createTable("books", table => {
              table.increments();
              table.text("title");
              table.text("author");
              table.float("value");
              table.text("currency");
              table.enum("status", ["available", "out of stock"]);
            })*/;
        }
    });
};

function setupDatabase() {
    console.log("Setting up the database");
    accountSetup(sqlDb);
    authorSetup(sqlDb);
    authorshipSetup(sqlDb);
    bookSetup(sqlDb);
    cartSetup(sqlDb);
    genreSetup(sqlDb);
    purchaseSetup(sqlDb);
    reservationSetup(sqlDb);
    similaritySetup(sqlDb);
}

module.exports = { database: sqlDb, setupDatabase };