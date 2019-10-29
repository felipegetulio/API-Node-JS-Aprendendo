const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


require('./controllers/authController')(app);
require('./controllers/projectController')(app);

//exemplo
//app.get('/', (req, res) => {
	//req: dados da requisicao (parametros, token)
	//res: objeto para utilizar pra enviar alguma resposta pro usuario
//	res.send('OK');

//});

app.listen(3000);
