import { Request, Response } from "express";
import { getByEmail, getByEmailAndPassword, insert, usuario } from "../model/usuario_model";

export function show_login(req: Request, res: Response) {
    res.render('login', { response: null });
}

export async function registrar(req: Request, res: Response) {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
        return res.render('login', {
            response: {
                type: 'error',
                value: 'Preencha os campos corretamente'
            }
        })
    }

    const usuarioEncontrar = await getByEmail(email);
    if (usuarioEncontrar) {
        return res.render('login', {
            response: {
                type: 'error',
                value: 'Email já  cadastrado'
            }
        })
    }

    const usuario: usuario = {
        nome,
        email,
        senha
    }

    await insert(usuario);

    return res.render('login', {
        reponse: {
            type: 'sucess',
            value: 'Usuario cadastrado com sucesso!!'
        }
    });
}

export async function login(req:Request,res:Response) {
    const{email, senha } =req.body

    if ( !email || !senha) {
        return res.render('login', {
            response: {
                type: 'error',
                value: 'Preencha os campos corretamente'
            }
        })
    }


  const usuario = await getByEmailAndPassword(email,senha)

  if (!usuario) {
    return res.render('login',{
        type: 'error',
        value: 'Email ou senha incorretos'
    })
  }

  res.render('dashboard',{
    nome: usuario.nome
  })

}