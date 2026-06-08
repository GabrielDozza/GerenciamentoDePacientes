export interface ProfissionalDTO{
    id: number;
    nome: string;
    email: string;
    senha: string;
    especialidade: string;
    fotoPerfil?: string;
}

export interface UpdateProfissionalDTO{
    nome?: string;
    email?: string;
    especialidade?: string;
    fotoPerfil?: string;
}