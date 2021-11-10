const connect = require('../db_connect')

const Total_vaccination_dose_2 = (callback) => {
    return connect.query(
        "SELECT SUM(pd_fully_vac) as TOTAL_VACCINATION_DOSE_2 " +
        "FROM province_data;",

        [], 
        callback)
}

module.exports = {
    Total_vaccination_dose_2
}
