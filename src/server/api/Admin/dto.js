const viewProducts = (resources, autoPorduct) =>({
    Nombre: resources.nombre_p,
    Descripcion: resources.descripcion_p,
    Foto: resources.foto,
    Valor: resources.vr_unitario
});

const mapeo = (cantidad) => cantidad.map((cantid) =>  viewProducts(cantid))

const mapPopular = (cantidad) => cantidad.map((cantid) => Populares(cantid))

const Populares = (resources) => ({
    Nombre_Producto: resources.Nombre_Producto,
    Cantidad_Ventas: resources.Veces_Vendido
});

module.exports = {
    mapeo,
    mapPopular,
}