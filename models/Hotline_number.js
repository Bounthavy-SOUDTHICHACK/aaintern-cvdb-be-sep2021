const connect = require('../db_connect')

const getEmergencyContact = (callback) => {
    return connect.query(
        "SELECT emer_num, emer_name " + 

        "FROM overall_data;", 

        [], 
        callback)
}

module.exports = {
    getEmergencyContact
}
