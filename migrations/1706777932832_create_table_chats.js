module.exports = {
    "up": `create table chats(
        user_id integer,
        room_id integer,
        name varchar(255),
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(room_id) REFERENCES users(id)
    )`,
    "down": "drop table chats"
}