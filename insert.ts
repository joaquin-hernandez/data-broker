//import * as dataMapping from './dataMapping.json';
// import * as data from './dataFile.json';
const data = require('./dataFile.json');
const dataMapping = require('./dataMapping.json');
const formId="CancelacionHipoteca";

// Empezamos recorriendo el Mapping y creamos dos arrays
// El primero con las tablas y el segundo con las objetos/atributos
//console.log ("vamos con el mapping");
let table:any;
let field:any;
let sqlInsertL1:string;
let sqlInsertL2:string;

for (table in dataMapping.column_field_mapping){
    sqlInsertL1 = "INSERT INTO " + dataMapping.column_field_mapping[table].table_name + " ";
    //console.log("LONNGITUD" + dataMapping.column_field_mapping[table].fields);

    // buscamos el ultimo fiels (RE CHOTO)
    let lastField
    for (field in dataMapping.column_field_mapping[table].fields){
        lastField = field;
    }

    // Armamos las lineas del SQL INSERT
    sqlInsertL1 += "(" 
    sqlInsertL2 ="VALUES (";

    for (field in dataMapping.column_field_mapping[table].fields){
        sqlInsertL1 += (dataMapping.column_field_mapping[table].fields[field].column);
        sqlInsertL2 += data.formData[dataMapping.column_field_mapping[table].object_name][dataMapping.column_field_mapping[table].fields[field].field];

        if(lastField!=field){
            //console.log("AAACCCAA");
            sqlInsertL1 += ", ";
            sqlInsertL2 += ", ";
        }
        
    }
    sqlInsertL1 += ")" 
    sqlInsertL2 += ");";
    
    console.log(sqlInsertL1);
    console.log(sqlInsertL2);
}

