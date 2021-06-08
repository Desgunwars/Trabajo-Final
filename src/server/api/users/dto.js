// Data Transfers Obeject = Objeto de Transferencia de Datos
const single = (resources, tvalidation) => ({
    id: resources.id_cliente,
    fullNombre: `${ resources.nombre }  ${ resources.apellido }`,
    email: resources.email,
});


const products = (resources) =>({
    id: resources.id_producto,
    Nombre: resources.nombre_p,
    Descripcion: resources.descripcion_p,
    Foto: resources.foto,
    Valor: resources.vr_unitario
});

const mapeo = (cantidad) => cantidad.map((cantid) => products(cantid))


module.exports ={
    single,
    mapeo
}