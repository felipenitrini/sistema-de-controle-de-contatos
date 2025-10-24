import { type } from "os";
import { connection } from "../infra/connection";

export type usuario = {
    id?: number;
    nome: string;
    email: string;
   senha: string;
data_criacao?: string;
}

export type categoria = {
id?: number;
nome: string;
descricao: string;

}
export type contato = {
id?:number;
nome: string;
telefone: string;
email: string;
endereco: string;
observacoes: string;
id_usuario: number;
}

export async function insert(usuario:usuario) {
    await connection.query (
        'INSERT INTO usuario(nome,email,senha) VALUES ($1, $2, $3);',
        [
            usuario.nome,
            usuario.email,
            usuario.senha,
        ]
    )
}

export async function getByEmail(email:string) {
    const {rows} = await connection.query(
        'SELECT * FROM usuario WHERE email=$1',
        [
            email
        ]
    );
    return rows [0]
};