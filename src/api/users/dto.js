// Data Transfers Obeject = Objeto de Transferencia de Datos
const single = (resources, tvalidation) => ({
    fullNombre: `${ resources.nombre }  ${ resources.apellido }`,
    fecha: resources.fecha_naci,
    email: resources.email,
    token: tvalidation
});

// const mapeo = (cantidad,user) => cantidad.map((cantid) => single(cantid, user))

module.exports ={
    single,
    // mapeo
}