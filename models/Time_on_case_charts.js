const connect = require('../db_connect')

const Time_on_case_charts = (callback) => {
    return connect.query(
    
    "SELECT DATE_FORMAT(pd_date,'%Y-%m-%d') as case_date, " +
    "DATE_FORMAT(pd_time, '%H:%i:%s') as case_time " +

    "FROM province_data " +
    "WHERE pd_date BETWEEN DATE_SUB(CURDATE(), INTERVAL 60 DAY) AND CURDATE(); ",
    
    
    [], 
    callback)
}

module.exports = {
    Time_on_case_charts
}
