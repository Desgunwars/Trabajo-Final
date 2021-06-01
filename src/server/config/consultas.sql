INSERT INTO categoria (nombre, descripcion) VALUES ("Ropa para dultos","Prenda que hace parte de la seccion de adultos");
INSERT INTO productos (nombre_p, descripcion_p, foto, vr_unitario, cantidad, oferta) VALUES ("Jean","Comodo","http://www.loquesea.com",1200,20,0);
SELECT id_categoria FROM categoria WHERE nombre = "Ropa de Adulto";
SELECT * FROM productos

SELECT categoria.nombre, productos.nombre_p,productos.descripcion_p, productos.foto, productos.vr_unitario FROM categoria JOIN productos ON categoria.id_categoria = productos.id_categoria WHERE categoria.nombre = "Ropa Bebes"