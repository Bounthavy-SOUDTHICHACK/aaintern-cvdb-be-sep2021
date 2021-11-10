const connect = require('../db_connect')

const Case_charts = (callback) => {
    return connect.query(
    
    "SELECT DATE_FORMAT(pd_date, '%Y/%m/%e') as case_date, " +
        "pd_confirmed as total_case, " +
        "pd_active as active_case, " +
        "pd_recovered as recovered_case, " +
        "pd_deceased as deaths_case, " +
        "pd_tested as tested_case " +

    "FROM province_data " +
    "WHERE pd_date BETWEEN DATE_SUB(CURDATE(), INTERVAL 60 DAY) AND CURDATE(); ",
    
    
    [], 
    callback)
}

module.exports = {
    Case_charts
}
