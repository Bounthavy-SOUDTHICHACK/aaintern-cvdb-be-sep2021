const connect = require('../db_connect')

const Total_Case = (callback) => {
    return connect.query(
        "SELECT SUM(pd_confirmed) as total_case, " +
        "IFNULL((SELECT SUM(pd_confirmed) FROM province_data WHERE pd_date = curdate()),0) AS total_case_today " +

        "FROM province_data;",
        [], 
        callback)
}

module.exports = {
    Total_Case
}
