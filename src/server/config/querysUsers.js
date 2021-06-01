/* SQL User */
const getUser = `SELECT * FROM users WHERE email = ?;`
const insertUser = `INSERT INTO users (nombre, apellido, nro_ident, genero, email, password) VALUES (?,?,?,?,?,?);`;

/* SQL User */
module.exports = {
    getUser,
    insertUser,
    // getCategory,
    // getProducts,
    // getProductBebes,
    // getProductNiños,
    // getProductJovenes,
    // getProductAdultos,
}