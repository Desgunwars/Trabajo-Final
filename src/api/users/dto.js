// Data Transfers Obeject = Objeto de Transferencia de Datos
const single = (resources, user) => ({
    fullNombre: `${ resources.nombre }  ${ resources.apellido }`,
    fecha: resources.fecha_naci,
    email: resources.email
});

const mapeo = (cantidad,user) => cantidad.map((cantid) => single(cantid, user))

module.exports ={
    mapeo,
    single
}