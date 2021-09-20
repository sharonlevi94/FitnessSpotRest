'use strict';

const tableName = 'activities',
    dataBase = require('../../../../../middleware/database')
module.exports = {
    selectPartOfDate
}

async function selectPartOfDate(id, part){
    let result = await dataBase.getObjects(tableName, id);
    return result[0].date[part];
}

/*function updatePartOfDate(id, part){
    dataBase.update(tableName, id, date);
}*/
