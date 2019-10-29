const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

//midleware: intercepta a requisicao entre o controller e a
//parte da rota: naquele momento que a rota chegou no servidor, antes de chegar na parte do controller existe o middleware

router.get('/', (req, res) => {
	res.send({ok:true, user: req.userId});
});

module.exports = app => app.use('/projects', router);