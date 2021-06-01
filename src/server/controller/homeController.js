const login = (req, res) => {
    res.render('home', {title:'Login', local: 'Tiendio', ape:'Todo'});
}

const adminPanel = (req, res) => {
    res.render('adminpanel', {title:'Login', local: 'Tiendio', ape:'Todo'});
}

const Iconst = (req, res, next) =>{
    res.render('icons',{title: 'Icons'})
}

const Map = (req, res, next) =>{
    res.render('map', {title:'Localization'})
}

const Notification = (req, res, next) =>{
    res.render('notifications', {title: 'Notification'});
}

const Users = (req, res, next) =>{
    res.render('user', {title: 'Users'});
}

const Tables = (req, res, next) =>{
    res.render('tables', {title: 'Tables'});
}

const Typography = (req, res, next) =>{
    res.render('typography', {title: 'Typography'});
}

const Upgrade = (req, res, next) =>{
    res.render('upgrade', {title: 'Upgrade'});
}

module.exports = {
    login, 
    adminPanel,
    Iconst, 
    Map,
    Notification, 
    Users,
    Tables, 
    Typography,
    Upgrade
}