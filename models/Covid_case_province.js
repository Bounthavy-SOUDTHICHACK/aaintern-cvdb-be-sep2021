const connect = require('../db_connect')

const Covid_case_province = (callback) => {
    return connect.query(
        "SELECT " +
        
        "pro.prov_id, pr.prov_name as province_name, " +
       
        "SUM(pd_vac_one_dose) as vaccin_dose_one, " +
        "IFNULL((SELECT SUM(A.pd_vac_one_dose) FROM province_data A WHERE A.pd_date = curdate() and A.prov_id = pro.prov_id),0) AS vaccine_dose_one_today, " +
        
        "SUM(pd_confirmed) as total_case, " +
        "IFNULL((SELECT SUM(A.pd_confirmed) FROM province_data A WHERE A.pd_date = curdate() and A.prov_id = pro.prov_id),0) AS total_case_today, " +

        "SUM(pd_tested) as test_case, " +
        "IFNULL((SELECT SUM(A.pd_tested) FROM province_data A WHERE A.pd_date = curdate() and A.prov_id = pro.prov_id),0) AS test_case_today, " +
   
        "SUM(pd_active) as active_case, " +
        "IFNULL((SELECT SUM(A.pd_active) FROM province_data A WHERE A.pd_date = curdate() and A.prov_id = pro.prov_id),0) AS active_case_today, " +
       
        "SUM(pd_recovered) as recovered_case, " +
        "IFNULL((SELECT SUM(A.pd_recovered) FROM province_data A WHERE A.pd_date = curdate() and A.prov_id = pro.prov_id ),0) AS recovered_case_today, " +
       
        "SUM(pd_deceased) as deaths_case, " +
        "IFNULL((SELECT SUM(A.pd_deceased) FROM province_data A WHERE A.pd_date = curdate() and A.prov_id = pro.prov_id ),0) AS deaths_case_today, " +
       
        "CONCAT(ROUND((SUM(pro.pd_confirmed) + SUM(pro.pd_active)) / 100, 2), '%')  as active_ratio, " +
        "CONCAT(ROUND((SUM(pro.pd_confirmed) + SUM(pro.pd_recovered)) / 100, 2), '%')  as recovered_ratio, " +
        "CONCAT(ROUND((SUM(pro.pd_confirmed) + SUM(pro.pd_deceased)) / 100, 2), '%')  as deaths_ratio " +

        "FROM province_data pro " +
        "Join province as pr " +
        "ON pro.prov_id = pr.prov_id " +
        "group by prov_id;",
        
        [], 
        callback)
}

module.exports = {
    Covid_case_province
}
