const connect = require('../db_connect')

const getCovidLaos = (callback) => {
    return connect.query(
        "SELECT pro.prov_id, pro.prov_name, pd_confirmed, pd_tested, " + 
        "pd_recovered, pd_deceased " +
        
        "FROM province as pro " +
        "Join province_data as pr " +
        "ON pro.prov_id = pr.prov_id;",
        
        [], 
        callback)
}

module.exports = {
    getCovidLaos
}
