import { Evento } from "../../domain/models/evento.model";
import { Evolucao } from "../../domain/models/evolucao.model";

export interface PacienteDTO{
    id: number;
    nome: string;
    cpf?: string;
    dataNascimento?: Date;
    telefone?: string;
    email?: string;
    endereco?: string;
    profissao?: string;
    origem?: string;
    eventos: Evento[];
    evolucoes: Evolucao[];
}

export interface UpdatePacienteDTO{
    nome?: string;
    cpf?: string;
    dataNascimento?: Date;
    telefone?: string;
    email?: string;
    endereco?: string;
    profissao?: string;
    origem?: string;
    eventos?: Evento[];
    evolucoes?: Evolucao[];
}