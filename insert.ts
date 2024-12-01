const data = require('./dataFile.json');
const dataMapping = require('./dataMapping.json');
const formId="CancelacionHipoteca";

let table:any;
let field:any;
let sqlInsertL1:string;
let sqlInsertL2:string;

for (table in dataMapping.column_field_mapping){
    sqlInsertL1 = "INSERT INTO " + dataMapping.column_field_mapping[table].table_name + " ";

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
            sqlInsertL1 += ", ";
            sqlInsertL2 += ", ";
        }
    }
    sqlInsertL1 += ")" 
    sqlInsertL2 += ");";
    
    console.log(sqlInsertL1);
    console.log(sqlInsertL2);
}

