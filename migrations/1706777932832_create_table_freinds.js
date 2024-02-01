module.exports = {
    "up": `create table freinds(
        user_id integer,
        freind_id integer,
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(freind_id) REFERENCES users(id)
    )`,
    "down": "drop table freinds"
}