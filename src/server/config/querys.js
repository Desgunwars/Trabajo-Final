// Querys For Databases
/* SQL User */
const getEmailSql = `SELECT * FROM users WHERE email = ?; `;
const insertUser = `INSERT INTO users (nombre, apellido, nro_ident, fecha_naci, genero, email, password) VALUES (?,?,?,?,?,?,?);`;

/* SQL Admin*/
const getAdmin = `SELECT * FROM admin WHERE email = ?;`;
const InsertAdmin = `INSERT INTO admin (email, password) VALUES (?,?);`;

/* SQL Global */

const getProduct = `SELECT * FROM productos`

/* SQL User */
module.exports = {
    getEmailSql,
    insertUser,
    getProduct
}


/* SQL Admin Export */
module.exports = {
    getAdmin,
    InsertAdmin,
    getProduct
}