const mysql = require('mysql');
const config = require('./config');

module.exports = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE
});
// .connect((err =>{
//         if(err){
//             console.log(`Error en conexion de base de datos ${ err }`);
//             return;
//         }
//         console.log('Conexion exitosa');
//     }));

// module.exports = mysql.end(err ={ status:"conexionterminada"})