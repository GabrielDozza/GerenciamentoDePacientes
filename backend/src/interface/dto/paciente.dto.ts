import { Evento } from "../../domain/models/evento.model";
import { Evolucao } from "../../domain/models/evolucao.model";

export interface CreatePacienteDTO{
    id: number;
    nome: string;
    cpf?: string | undefined;
    dataNascimento?: Date | undefined;
    telefone?: string | undefined;
    email?: string | undefined;
    endereco?: string | undefined;
    eventos: Evento[]; // 
    evolucoes: Evolucao[];
}

export interface UpdatePacienteDTO{
    nome?: string;
    cpf?: string;
    dataNascimento?: Date;
    telefone?: string;
    email?: string;
    endereco?: string;
}

export interface UpdatePacienteEvntDTO{
    eventos: Evento[]; // eu uso model aqui para fazer update nos eventos do paciente??
}

export interface UpdatePacienteEvolDTO{
    evolucoes: Evolucao[];
}

export interface PacienteResponseDTO{
    id: number;
    nome: string;
    cpf?: string;
    dataNascimento?: Date;
    telefone?: string;
    email?: string;
    endereco?: string;
    eventos: Evento[];
    evolucoes: Evolucao[];
}