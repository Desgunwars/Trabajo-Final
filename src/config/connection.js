const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path: '/.env'});

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '01251903',
    database: 'tienda'
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DATABASE
});
// .connect((err =>{
//         if(err){
//             console.log(`Error en conexion de base de datos ${ err }`);
//             return;
//         }
//         console.log('Conexion exitosa');
//     }));

// module.exports = mysql.end(err ={ status:"conexionterminada"})