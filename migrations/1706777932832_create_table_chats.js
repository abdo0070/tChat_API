module.exports = {
    "up": `create table chats(
        user_id integer,
        freind_id integer,
        room_id integer,
        name varchar(255),
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(room_id) REFERENCES rooms(id),
        FOREIGN KEY(freind_id) REFERENCES users(id)
    )`,
    "down": "drop table chats"
}