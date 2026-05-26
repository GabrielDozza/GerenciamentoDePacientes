export interface CreateEventoDTO{
    id: number;
    titulo: string;
    data: Date;
    horarioInicio: Date;
    horarioFim: Date;
}

export interface EventoResponseDTO{
    titulo: string;
    data: Date;
    horarioInicio: Date;
    horarioFim: Date;
}