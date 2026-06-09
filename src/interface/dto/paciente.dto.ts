import { IsDate, IsNumber, IsString } from "class-validator";
import { Evento } from "../../domain/models/evento.model";
import { Evolucao } from "../../domain/models/evolucao.model";
import { Paciente } from "../../domain/models/paciente.model";
import { Optional } from "@nestjs/common";

export class PacienteDTO{
    @IsNumber()
    id: number;

    @IsString()
    nome: string;

    @IsDate()
    dataNascimento: Date;

    @Optional()
    @IsString()
    cpf?: string;

    @Optional()
    @IsString()
    telefone?: string;

    @Optional()
    @IsString()
    email?: string;

    @Optional()
    @IsString()
    endereco?: string;

    @Optional()
    @IsString()
    profissao?: string;

    @Optional()
    @IsString()
    origem?: string;

    eventos: Evento[];
    evolucoes: Evolucao[];

    constructor (id: number, nome: string, dataNascimento: Date, cpf?: string, telefone?: string, email?: string, profissao?: string, origem?: string, paciente?: Paciente){
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.profissao = profissao;
        this.origem = origem;
        this.eventos = (paciente) ? paciente.eventos : [] ;
        this.evolucoes = (paciente) ? paciente.evolucoes : [];
    }
}

export class UpdatePacienteDTO{
    @Optional()
    @IsString()
    nome?: string;

    @Optional()
    @IsDate()
    dataNascimento?: Date;

    @Optional()
    @IsString()
    cpf?: string;

    @Optional()
    @IsString()
    telefone?: string;

    @Optional()
    @IsString()
    email?: string;

    @Optional()
    @IsString()
    endereco?: string;

    @Optional()
    @IsString()
    profissao?: string;

    @Optional()
    @IsString()
    origem?: string;

    constructor (nome?: string, dataNascimento?: Date, cpf?: string, telefone?: string, email?: string, profissao?: string, origem?: string){
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.profissao = profissao;
        this.origem = origem;
    }
}
