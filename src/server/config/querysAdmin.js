// Querys For Databases

/* SQL Admin*/
const getAdmin = `SELECT * FROM admin WHERE email = ?;`;
const InsertAdmin = `INSERT INTO admin (email, password) VALUES (?,?);`;
const InsertProduct = `INSERT INTO productos (id_categoria,nombre_p, descripcion_p, foto, vr_unitario, cantidad, oferta) VALUES (?,?,?,?,?,?,?);`;
const InsertCategory = `INSERT INTO categoria (nombre, descripcion) VALUES (?,?);`;
const getCategory = `SELECT id_categoria FROM categoria WHERE nombre = ?;`;

/* SQL Global */
const getProducts = `SELECT * FROM productos`
const getProductBebes = `SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Calzado Bebes";`;
const getProductNiños = `SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Calzado Niños";`;
const getProductJovenes = `SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Calzado Jovenes";`;
const getProductAdultos = `SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Calzado Adultos";`;

/* SQL Actualizaciones*/
const getProduct = `SELECT id_producto, nombre_p, descripcion_p, foto, vr_unitario, cantidad, oferta FROM productos WHERE id_producto = ?;`;
const putProduct = `UPDATE productos SET nombre_p = ?, descripcion_p = ?, foto = ?, vr_unitario = ?, cantidad = ?, oferta = ? WHERE id_producto = ?;`;

/* SQL Modificar Descripcion de Prodcutos */
const selectCategory = `SELECT nombre,descripcion FROM categoria WHERE id_categoria = ?;`;
const updateCategory = `UPDATE categoria SET descripcion = ? WHERE id_categoria = ?;`;

/* SQL Delete Producto*/
const deleteProducto = `DELETE FROM productos WHERE id_producto = ?;`;

/* SQL Gestion de Usuarios*/
const getUsers = `SELECT nombre, apellido, genero email FROM users;`;
/* SQL Start Client */
const startClient = 'SELECT concat(users.nombre," ",users.apellido) as Nombres, COUNT(compras.id_producto) AS Productos_comprados FROM `users` INNER JOIN compras on users.id_cliente=compras.id_cliente GROUP BY compras.id_cliente HAVING COUNT(compras.id_producto)>2 ORDER BY SUM(compras.id_producto);';
const popularProducts = 'SELECT productos.nombre_p as Nombre_Producto, COUNT(*) as Veces_Vendido from productos INNER JOIN compras on productos.id_producto=compras.id_producto GROUP BY compras.id_producto HAVING COUNT(*)=(SELECT MAX(contador) FROM (SELECT compras.id_producto, COUNT(*) contador from compras GROUP BY compras.id_producto) T);';
const getBuyClient = `SELECT concat(users.nombre," ",users.apellido) as Nombre_cliente, productos.nombre_p as Nombre_Producto, compras.fecha_venta, compras.precio FROM users INNER JOIN compras on users.id_cliente=compras.id_cliente INNER JOIN productos on productos.id_producto=compras.id_producto;`;

/* SQL Ventas */
const total = `SELECT SUM(precio) AS 'Recaudado' FROM compras;`;



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
    getUsers,
    InsertCategory,
    InsertProduct,
    getProduct,
    putProduct,
    deleteProducto,
    selectCategory,
    updateCategory, 
    startClient,
    popularProducts,
    getBuyClient,
    total
}