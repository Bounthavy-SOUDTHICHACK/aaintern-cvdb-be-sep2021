const connect = require('../db_connect')

const Vaccine_province = (callback) => {
    return connect.query(
        "SELECT " +
        
        "pro.prov_id, pr.prov_name as province_name, " +
       
        "SUM(pd_vac_one_dose) as vaccin_dose_one, " +
        "IFNULL((SELECT SUM(A.pd_vac_one_dose) FROM province_data A WHERE A.pd_date = curdate() and A.prov_id = pro.prov_id),0) AS vaccine_dose_one_today, " +
        
        "SUM(pd_fully_vac) as vaccin_dose_two, " +
        "IFNULL((SELECT SUM(A.pd_fully_vac) FROM province_data A WHERE A.pd_date = curdate() and A.prov_id = pro.prov_id),0) AS vaccin_dose_two_today, " +

        "SUM(pd_vac_dose_ad) as vaccine_total, " +
        "IFNULL((SELECT SUM(A.pd_vac_dose_ad) FROM province_data A WHERE A.pd_date = curdate() and A.prov_id = pro.prov_id),0) AS vaccin_total_today " +
       
        "FROM province_data pro " +
        "Join province as pr " +
        "ON pro.prov_id = pr.prov_id " +
        "group by prov_id;",
    [], 
    callback)
}

module.exports = {
    Vaccine_province
}
