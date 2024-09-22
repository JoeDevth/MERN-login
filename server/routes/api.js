const express = require('express');
const router = express.Router();


//controller
const {register, listUser, editUser, deleteUser} = require('../controllers/auth');




//Endpoint  //http://localhost:5001/api/auth
//Method GET
//@Access Publish

// Example route
router.get('/auth',listUser)

router.post('/auth',register)

router.put('/auth', editUser);

router.delete('/auth',deleteUser)


module.exports = router;
