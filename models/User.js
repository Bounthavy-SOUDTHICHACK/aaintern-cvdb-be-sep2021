const connect = require('../db_connect')

const all = (callback) => {
    return connect.query("SELECT id, fullname, mobile, username, sector_id, is_admin, created_at, updated_at FROM users", [], callback)
}

module.exports = {
    all
}
