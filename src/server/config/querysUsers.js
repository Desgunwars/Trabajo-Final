/* SQL User */
const getUser = `SELECT * FROM users WHERE email = ?;`
const insertUser = `INSERT INTO users (nombre, apellido, nro_ident, genero, email, password) VALUES (?,?,?,?,?,?);`;

const getProducts = `SELECT * FROM productos;`;
const getProductBebes = `SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Calzado Bebes";`;
const getProductNiños = `SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Calzado Niños";`;
const getProductJovenes = `SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Calzado Jovenes";`;
const getProductAdultos = `SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Calzado Adultos";`;

/* SQL User */
module.exports = {
    getUser,
    insertUser,
    getProducts,
    getProductBebes,
    getProductNiños,
    getProductJovenes,
    getProductAdultos,
}