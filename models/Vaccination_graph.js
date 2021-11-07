const connect = require('../db_connect')

const getVaccinationByProvince_data = (callback) => {
    return connect.query("SELECT pd_vac_one_dose, pd_fully_vac " +
    "FROM province_data;", 

    [],
    callback)
}

module.exports = {
    getVaccinationByProvince_data
}
