import express from 'express';
import { usuarioRoutes } from './routes/usuario_routes';
import { admRoutes } from './routes/adm_routes';
import session from 'express-session';

const app = express();

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.redirect('/usuario/login');
});

app.use(session({
    secret: 'aula-pw2', //chave usada para assinar o cookie
    resave: false, // evita salvar as sessoes nao inicializadas
saveUninitialized: true, //salva sessoes nao inicializadas
cookie: {maxAge: 1 * 1000 * 60 * 60} // uma hora de tempo de expiração
}));

app.use(usuarioRoutes);

app.use(admRoutes);

app.listen(3333, () => {
    console.log('Servidor rodando no endereço http://localhost:3333');
});