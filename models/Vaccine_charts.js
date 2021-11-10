const connect = require('../db_connect')

const Vaccine_charts = (callback) => {
    return connect.query(
    
    "SELECT DATE_FORMAT(pd_date, '%Y/%m/%e') as vaccine_date, " +
        "pd_vac_one_dose as vaccine_dose_one, " +
        "pd_fully_vac as vaccine_dose_two " +

    "FROM province_data " +
    "WHERE pd_date BETWEEN DATE_SUB(CURDATE(), INTERVAL 60 DAY) AND CURDATE(); ",
    
    
    [], 
    callback)
}

module.exports = {
    Vaccine_charts
}
