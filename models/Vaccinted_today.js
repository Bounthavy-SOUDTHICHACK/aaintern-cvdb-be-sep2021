const connect = require('../db_connect')

const Vaccinated_today = (callback) => {
    return connect.query(
        "SELECT SUM(od_vac_dose_ad) + SUM(od_fully_vac) as VACCINATED_TODAY " +
        
        "FROM overall_data;",

        [], 
        callback)
}

module.exports = {
    Vaccinated_today
}