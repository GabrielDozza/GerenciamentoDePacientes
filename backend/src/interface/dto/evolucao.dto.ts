export interface CreateEvolucaoDTO{
    id: number;
    titulo: string;
    data: Date;
    horarioInicio: Date;
    horarioFim: Date;
    descricao: string;
}

export interface EvolucaoResponseDTO{
    titulo: string;
    data: Date;
    horarioInicio: Date;
    horarioFim: Date;
    descricao: string;
}