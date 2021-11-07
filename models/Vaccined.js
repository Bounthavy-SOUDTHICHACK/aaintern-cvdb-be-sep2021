const connect = require('../db_connect')

const provVaccined = (callback) => {
    return connect.query(
        "SELECT pro.prov_id, pro.prov_name, pd_vac_one_dose, " +
        "pd_fully_vac, pd_vac_dose_ad " + 
        
        "FROM province as pro " +
        "Join province_data as pr " + 
        "ON pro.prov_id = pr.prov_id;",
    
    [], 
    callback)
}

module.exports = {
    provVaccined
}
