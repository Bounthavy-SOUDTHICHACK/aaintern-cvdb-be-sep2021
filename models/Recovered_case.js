const connect = require('../db_connect')

const Recovered_case = (callback) => {
    return connect.query(

        "SELECT " +
        "SUM(prov.pd_recovered) as recvered_case, " +
        "IFNULL((SELECT SUM(A.pd_recovered) FROM province_data A WHERE A.pd_date = curdate() and A.prov_id = prov_id),0) AS recovered_case_today, " +
        "CONCAT(ROUND((SUM(prov.pd_confirmed) + SUM(prov.pd_recovered)) / 100, 2), '%')  as recovered_case_ratio " +
        "FROM province_data as prov;",

        [], 
        callback)
}

module.exports = {
    Recovered_case
}
