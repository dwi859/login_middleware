exports.login = (req,res) => {
    let message = "";
    res.render("login", { message : message})
}

exports.proses = (req,res) => {
    let data = req.body
    console.log(data)
    res.send(data)
}