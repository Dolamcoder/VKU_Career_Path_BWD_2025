const getHome = (req, res) => {
    res.render('index.ejs', { user: req.session.user});
}
const getAdvise = (req, res) => {
    res.render('advise.ejs',  { user: req.session.user});
}
const getLogin = (req, res) => {
    res.render('login.ejs');
}
module.exports = {
    getHome,
    getAdvise,
    getLogin
}