module.exports = {
    "up": `create table users(
        id integer PRIMARY KEY AUTO_INCREMENT,
        user_name varchar(255) UNIQUE,
        email varchar(255) UNIQUE,
        password varchar(255) ,
        image varchar(255),
        token varchar(255),
        created_at timestamp DEFAULT CURRENT_TIMESTAMP
    );`,
    "down": "DROP TABLE users"
}