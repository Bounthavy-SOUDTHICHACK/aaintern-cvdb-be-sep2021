const connect = require('../db_connect')

const getOverallInformation = (callback) => {
    return connect.query(
        "SELECT od_id, ad_id, emer_num, " +
        "emer_name, od_date, od_time, " + 
        "od_confirmed, od_active, od_recovered, od_deceased, " +
        "od_tested, od_vac_dose_ad, od_vac_one_dose, od_fully_vac " +

        "FROM overall_data;", 
        
        
        [], 
        callback)
}

module.exports = {
    getOverallInformation
}