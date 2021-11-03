const express = require('express');
const router = express.Router();
//SUSCRIBIRSE SOLO MAIL
router.post('/suscribirse', function(req, res, next) {
  console.log(req.body)
  res.json(req.body)
})
//CONSULTO EL REGISTRO USERS
router.get('/', function(req, res, next) {
  const registro = [
    {
        id:"",
        name:"",
        apellido:"",
        usuario:"",
        contraseña:"",
    },
    
  ]  
  res.json(registro);
})
//INSERTO UN REGISTRO USERS
router.post('/register', function(req, res, next) {
  console.log(req.body)
  res.json(req.body)
})
//ACTUALIZO UN REGISTRO LLAMANDO DESDE EL ID
router.put('/:id', function(req, res, next) {
  console.log(req.params.id)
  res.json(req.body)
})
//ELIMINO UN REGISTRO LLAMANDO DESDE EL ID
router.delete('/:id', function(req, res, next) {
  console.log(req.params.id)
  res.json(req.body)
  
})

router.post('/login', function (req, res, next) {  

  console.log(req.body)

  res.send('login ok');
});

module.exports = router;
