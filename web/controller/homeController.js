const login = (req, res) => {
    res.render('home', {title:'Login', local: 'Tiendio', ape:'Todo'});
}

const adminPanel = (req, res) => {
    res.render('adminpanel', {title:'Login', local: 'Tiendio', ape:'Todo'});
}



module.exports = {
    login, 
    adminPanel
}