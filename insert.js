//import * as dataMapping from './dataMapping.json';
// import * as data from './dataFile.json';
var data = require('./dataFile.json');
var dataMapping = require('./dataMapping.json');
var formId = "CancelacionHipoteca";
// Empezamos recorriendo el Mapping y creamos dos arrays
// El primero con las tablas y el segundo con las objetos/atributos
//console.log ("vamos con el mapping");
var table;
var field;
var sqlInsertL1;
var sqlInsertL2;
for (table in dataMapping.column_field_mapping) {
    sqlInsertL1 = "INSERT INTO " + dataMapping.column_field_mapping[table].table_name + " ";
    //console.log("LONNGITUD" + dataMapping.column_field_mapping[table].fields);
    // buscamos el ultimo fiels (RE CHOTO)
    var lastField = void 0;
    for (field in dataMapping.column_field_mapping[table].fields) {
        lastField = field;
    }
    // Armamos las lineas del SQL INSERT
    sqlInsertL1 += "(";
    sqlInsertL2 = "VALUES (";
    for (field in dataMapping.column_field_mapping[table].fields) {
        sqlInsertL1 += (dataMapping.column_field_mapping[table].fields[field].column);
        sqlInsertL2 += data.formData[dataMapping.column_field_mapping[table].object_name][dataMapping.column_field_mapping[table].fields[field].field];
        if (lastField != field) {
            //console.log("AAACCCAA");
            sqlInsertL1 += ", ";
            sqlInsertL2 += ", ";
        }
    }
    sqlInsertL1 += ")";
    sqlInsertL2 += ");";
    console.log(sqlInsertL1);
    console.log(sqlInsertL2);
}
