import { Router } from "express";
import { login, registrar, show_login } from "../controllers/usuarioctrol";


const usuarioRoutes = Router();

usuarioRoutes.get('/usuario/login',show_login);
usuarioRoutes.post('/usuario/registrar', registrar);
usuarioRoutes.post('/usuario/login',login)

export{
    usuarioRoutes
}