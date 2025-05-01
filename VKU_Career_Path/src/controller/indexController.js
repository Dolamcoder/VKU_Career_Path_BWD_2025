const getHome = (req, res) => {
    res.render('index.ejs');
}
const getAdvise = (req, res) => {
    res.render('advise.ejs');
}
module.exports = {
    getHome,
    getAdvise
}