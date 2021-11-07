const connect = require('../db_connect')

const getAdminInformation = (callback) => {
    return connect.query("SELECT ad_id, ad_name, password, " +
    "user_name FROM admin;", [], callback)
}

module.exports = {
    getAdminInformation
}
