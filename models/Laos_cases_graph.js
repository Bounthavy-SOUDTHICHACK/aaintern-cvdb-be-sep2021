const connect = require('../db_connect')

const Laos_casaes_update = (callback) => {
    return connect.query("SELECT pd_vac_one_dose FROM province_data;", [], callback)
}

module.exports = {
    Laos_casaes_update
}
