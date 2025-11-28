export function authMiddleware(req: any, res: any, next: any) {
    if(req.session?.usuario) { // se o usuario estiver logado
        return next(); // continua a request
    }
    return res.redirect('/usuario/login'); // senao volta para o login
}