import { IsEmail, IsNumberString, IsOptional, Length } from 'class-validator';
import { Evento } from './evento.model';
import { Evolucao } from './evolucao.model';

export class Paciente {
    id: number;
    nome: string;

    @IsOptional()
    @IsNumberString()
    @Length(11,11)
    cpf?: string;

    @IsOptional()
    dataNascimento?: Date;

    @IsOptional()
    telefone?: string;
    
    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    endereco?: string;

    eventos: Evento[];

    evolucoes: Evolucao[];

    constructor(id: number, nome: string, cpf?: string, dataNascimento?: Date, telefone?: string, email?: string, endereco?: string) {
        this.id = id;
        this.nome = nome;
        this.cpf = (cpf) ? cpf : undefined;
        this.dataNascimento = (dataNascimento) ? dataNascimento : undefined;
        this.telefone = (telefone) ? telefone : undefined;
        this.email = (email) ? email : undefined;
        this.endereco = (endereco) ? endereco : undefined;
        this.eventos = [];
        this.evolucoes = [];
    }
}

export type PacienteType = {
    cpf: string | null;
    dataNascimento: Date;
    telefone: string | null;
    email: string | null;
    endereco: string | null;
    id: number; nome: string;
    profissao: string | null;
    origem: string | null; 
} | null;