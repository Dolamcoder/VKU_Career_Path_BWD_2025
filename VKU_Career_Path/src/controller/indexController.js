const getHome = (req, res) => {
    res.render('index.ejs');
}
const getAdvise = (req, res) => {
    res.render('advise.ejs');
}
const getLogin = (req, res) => {
    res.render('login.ejs');
}
module.exports = {
    getHome,
    getAdvise,
    getLogin
}