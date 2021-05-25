// Querys For Databases
// Get Email and Password For valid in database
const getEmailSql = `SELECT * FROM users WHERE email = ?; `;
const insertUser = `INSERT INTO users (nombre, apellido, nro_ident, fecha_naci, genero, email, password) VALUES (?,?,?,?,?,?,?);`;

/* SQL Admin*/
const getAdmin = `SELECT * FROM admin WHERE email = ?;`;
const InsertAdmin = `INSERT INTO admin (email, password) VALUES (?,?);`;


module.exports = {
    getEmailSql,
    insertUser,
    getAdmin,
    InsertAdmin
}