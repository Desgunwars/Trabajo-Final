// Data Transfers Obeject = Objeto de Transferencia de Datos
const single = (resources, tvalidation) => ({
    fullNombre: `${ resources.nombre }  ${ resources.apellido }`,
    fecha: resources.fecha_naci,
    email: resources.email,
});


const products = (resources) =>({
    Nombre: resources.nombre_p,
    Descripcion: resources.descripcion_p,
    Foto: resources.foto,
    Valor: resources.vr_unitario
})
const mapeo = (cantidad) => cantidad.map((cantid) => products(cantid))


module.exports ={
    single,
    mapeo
}