const connect = require('../db_connect')

const Total_vaccination_dose_1 = (callback) => {
    return connect.query(
        "SELECT SUM(pd_vac_one_dose) as TOTAL_VACCINATION_DOSE1 " +
        "FROM province_data;",

        [], 
        callback)
}

module.exports = {
    Total_vaccination_dose_1
}
