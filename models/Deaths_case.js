const connect = require('../db_connect')

const Deaths_case = (callback) => {
    return connect.query(
        
        "SELECT SUM(pd_deceased) as deaths_case, " +
        "IFNULL((SELECT SUM(pd_deceased) FROM province_data WHERE pd_date = curdate()),0) AS deaths_case_today, " +
        "CONCAT(ROUND((SUM(prov.pd_confirmed) + SUM(prov.pd_deceased)) / 100, 2), '%')  as deaths_case_ratio " +
        "FROM province_data as prov;",

        [], 
        callback)
}

module.exports = {
    Deaths_case
}
 