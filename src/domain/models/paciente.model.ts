import { IsEmail, IsOptional } from 'class-validator';
import { Evento } from './evento.model';
import { Evolucao } from './evolucao.model';

export class Paciente {
    id: number;
    nome: string;
    dataNascimento: Date;

    @IsOptional()
    telefone?: string;
    
    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    cpf?: string;

    @IsOptional()
    endereco?: string;

    @IsOptional()
    profissao?: string;

    @IsOptional()
    origem?: string;

    eventos: Evento[];

    evolucoes: Evolucao[];

    constructor(id: number, nome: string, dataNascimento: Date, cpf?: string, telefone?: string, email?: string, endereco?: string, profissao?: string, origem?: string) {
        this.id = id;
        this.nome = nome;
        this.cpf = (cpf) ? cpf : undefined;
        this.dataNascimento = dataNascimento;
        this.telefone = (telefone) ? telefone : undefined;
        this.email = (email) ? email : undefined;
        this.endereco = (endereco) ? endereco : undefined;
        this.profissao = (profissao) ? profissao : undefined;
        this.origem = (origem) ? origem : undefined;
        this.eventos = [];
        this.evolucoes = [];
    }
}