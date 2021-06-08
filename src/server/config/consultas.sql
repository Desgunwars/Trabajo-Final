-- INSERT INTO categoria (nombre, descripcion) VALUES ("Ropa para dultos","Prenda que hace parte de la seccion de adultos");
-- INSERT INTO productos (nombre_p, descripcion_p, foto, vr_unitario, cantidad, oferta) VALUES ("Jean","Comodo","http://www.loquesea.com",1200,20,0);
-- SELECT id_categoria FROM categoria WHERE nombre = "Ropa de Adulto";
-- SELECT nombre_p, descripcion, foto, vr_unitario, cantidad, oferta FROM productos WHERE id_producto =?
-- SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Ropa Bebes"
-- UPDATE productos SET nombre_p = ?, descripcion_p = ?, foto = ?, vr_unitario = ?, cantidad = ?, oferta = ? WHERE id_producto = ?;
-- SELECT descripcion FROM categoria WHERE id_categoria = ?;
-- UPDATE categoria SET descripcion = ? WHERE id_categoria = ?
-- DELETE FROM productos WHERE id_producto = ?;
-- SELECT nombre, apellido, genero email FROM users;
-- SELECT id_cliente FROM users WHERE email = ?;

-- SELECT users.id_cliente, users.nombre, productos.nombre_p, productos.descripcion_p FROM compras JOIN users, productos ON compra.id_productos = productos.id_producto AND compras.id_cliente = users.id_cliente WHERE id_compra = 6; 

