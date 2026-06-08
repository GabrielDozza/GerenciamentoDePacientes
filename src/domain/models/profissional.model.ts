export class Profissional {
    id: number;
    nome: string;
    email: string;
    senha: string;
    especialidade: string;
    fotoPerfil?: string;

    constructor(id: number, nome: string, email: string, senha: string, especialidade: string, fotoPerfil? : string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.especialidade = especialidade;
        this.fotoPerfil = (fotoPerfil) ? fotoPerfil : undefined;
    }
}