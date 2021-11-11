const connect = require('../db_connect')

const getAllOfProvinceData = (callback) => {
    return connect.query(
        "SELECT pd_id, ad_id, prov_id, pd_date, " +
        "pd_time, pd_confirmed, pd_active, pd_recovered, " +
        "pd_deceased, pd_tested, pd_vac_dose_ad, " +
        "pd_vac_one_dose, pd_fully_vac " +
        
        
        "FROM province_data;", [], callback)
}

const insertProvince_data_information = ({pd_id, ad_id, prov_id, pd_date, pd_time, pd_confirmed, pd_active, pd_recovered, pd_deceased, pd_tested, pd_vac_dose_ad, pd_vac_one_dose, pd_fully_vac}, callback) => {
    return connect.query(
        "INSERT INTO overall_data (pd_id, ad_id, prov_id, pd_date, pd_time, pd_confirmed, " +
        "pd_active, pd_recovered, pd_deceased, pd_tested, pd_vac_dose_ad, pd_vac_one_dose, " +
        "pd_fully_vac) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            pd_id,
            ad_id,
            prov_id,
            pd_date,
            pd_time,
            pd_confirmed,
            pd_active,
            pd_recovered,
            pd_deceased,
            pd_tested,
            pd_vac_dose_ad,
            pd_vac_one_dose,
            pd_fully_vac
        ],
    callback)
}


module.exports = {
    getAllOfProvinceData,
    insertProvince_data_information
}
