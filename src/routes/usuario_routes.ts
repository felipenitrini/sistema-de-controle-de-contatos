import { Router } from "express";
import { registrar, show_login } from "../controllers/controller";

const usuarioRoutes = Router();

usuarioRoutes.get('/usuario/login',show_login);
usuarioRoutes.post('/usuario/registrar', registrar);

export{
    usuarioRoutes
}