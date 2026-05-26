import { IsEmail, IsOptional } from 'class-validator';
import { EventoModel } from './evento.model';
import { EvolucaoModel } from './evolucao.model';

export class PacienteModel {
    id: number;
    nome: string;

    @IsOptional()
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

    eventos: EventoModel[];

    evolucoes: EvolucaoModel[];

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