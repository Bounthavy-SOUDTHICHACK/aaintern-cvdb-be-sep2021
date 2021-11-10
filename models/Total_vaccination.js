const connect = require('../db_connect')

const Total_vaccintion = (callback) => {
    return connect.query(
        "SELECT SUM(pd_vac_dose_ad) as TOTAL_VACCINATION " +
        "FROM province_data;",

        [], 
        callback)
}

module.exports = {
    Total_vaccintion
}