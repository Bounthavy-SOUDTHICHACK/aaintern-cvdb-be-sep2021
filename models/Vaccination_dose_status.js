const connect = require('../db_connect')

const VaccinationStatus = (callback) => {
    return connect.query(
        "SELECT SUM(pd_vac_dose_ad) as pd_vac_dose_ad, SUM(pd_vac_one_dose) as pd_vac_one_dose, SUM(pd_fully_vac) as pd_fully_vac, " +
        "SUM(pd_confirmed) as pd_confirmed, SUM(pd_active) as pd_active, SUM(pd_recovered) as pd_recovered, SUM(pd_deceased) as pd_deceased " +
        "FROM province_data;",

        [], 
        callback)
}

module.exports = {
    VaccinationStatus
}
