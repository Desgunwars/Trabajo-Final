// Querys For Databases
// Get Email and Password For valid in database
const getEmailSql = `SELECT * FROM users WHERE email = ?; `;
const insertUser = `INSERT INTO users (nombre, apellido, nro_ident, fecha_naci, genero, email, password) VALUES (?,?,?,?,?,?,?);`;
const validatorUser = `SELECT email, password FROM users WHERE email ='?' AND ? = ?;`;
const deleteProduct = ``;


module.exports = {
    getEmailSql,
    insertUser
}