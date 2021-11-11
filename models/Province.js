const connect = require('../db_connect')

const ProvInformation = (callback) => {
    return connect.query("SELECT prov_id, prov_name FROM province;", [], callback)
}

const insertProvince_information = ({prov_name}, callback) => {
    return connect.query(
        "INSERT INTO province (prov_name) VALUES (?)",
        [
            prov_name
        ],
    callback)
}
module.exports = {
    ProvInformation,
    insertProvince_information
}
