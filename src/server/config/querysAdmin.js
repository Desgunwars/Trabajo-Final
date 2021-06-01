// Querys For Databases

/* SQL Admin*/
const getAdmin = `SELECT * FROM admin WHERE email = ?;`;
const InsertAdmin = `INSERT INTO admin (email, password) VALUES (?,?);`;
const InsertProduct = `INSERT INTO productos (id_categoria,nombre_p, descripcion_p, foto, vr_unitario, cantidad, oferta) VALUES (?,?,?,?,?,?,?);`;
const InsertCategory = `INSERT INTO categoria (nombre, descripcion) VALUES (?,?);`;
const getCategory = `SELECT id_categoria FROM categoria WHERE nombre = ?;`

/* SQL Global */
const getProducts = `SELECT * FROM productos`
const getProductBebes = `SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Calzado Bebes";`;
const getProductNiños = `SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Calzado Niños";`;
const getProductJovenes = `SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Calzado Jovenes";`;
const getProductAdultos = `SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Calzado Adultos";`;


/* SQL Admin Export */
module.exports = {
    getAdmin,
    InsertAdmin,
    getProducts,
    getCategory,
    getProductBebes,
    getProductNiños,
    getProductJovenes,
    getProductAdultos,
    InsertCategory,
    InsertProduct,
}