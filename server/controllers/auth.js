

exports.register = async(req, res) => {
    try{
        res.send(req.body.username+' '+req.body.password)
    } catch(err){
        Console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.listUser = async(req, res) => {
    try{
        res.send('list get use')
    } catch(err){
        Console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.editUser = async(req, res) => {
    try{
        res.send('edit use')
    } catch(err){
        Console.log(err)
        res.status(500).send('Server Error!')
    }
}

exports.deleteUser = async(req, res) => {
    try{
        res.send('remove use')
    } catch(err){
        Console.log(err)
        res.status(500).send('Server Error!')
    }
}