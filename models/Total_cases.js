const connect = require('../db_connect')

const TotalCases = (callback) => {
    return connect.query(
        "SELECT pd_confirmed, pd_active, pd_deceased " +
        "FROM province_data;",
        [], 
        callback)
}

module.exports = {
    TotalCases
}
