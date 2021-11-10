const connect = require('../db_connect')

const Active_case = (callback) => {
    return connect.query(
    
    "SELECT " +
    "SUM(prov.pd_active) as active_case, " +
    "IFNULL((SELECT SUM(A.pd_active) FROM province_data A WHERE A.pd_date = curdate() and A.prov_id = prov_id),0) AS active_case_today, " +
    "CONCAT(ROUND((SUM(prov.pd_confirmed) + SUM(prov.pd_active)) / 100, 2), '%')  as active_case_ratio " +
    "FROM province_data as prov;",

        [], 
        callback)
}

module.exports = {
    Active_case
}
