const viewProducts = (resources, autoPorduct) =>({
    Nombre: resources.nombre_p,
    Descripcion: resources.descripcion_p,
    Foto: resources.foto,
    Valor: resources.vr_unitario
    
});

const mapeo = (cantidad) => cantidad.map((cantid) =>  viewProducts(cantid))

module.exports = {
    mapeo,

}