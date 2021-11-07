const connect = require('../db_connect')

const ProvInformation = (callback) => {
    return connect.query("SELECT prov_id, prov_name FROM province;", [], callback)
}

module.exports = {
    ProvInformation
}
