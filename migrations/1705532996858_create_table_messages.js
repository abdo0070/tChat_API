module.exports = {
    "up": `create table messages(
        id integer PRIMARY KEY AUTO_INCREMENT,
        user_id integer,
        content varchar(255),
        seen_at timestamp,
        send_at timestamp DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id) 
    )`,
    "down": "drop table messages"
}