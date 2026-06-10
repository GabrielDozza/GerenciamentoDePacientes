import { IsDate, IsNumber, IsString } from "class-validator";

export class EventoDTO{
    @IsNumber()
    id: number;

    @IsNumber()
    pacienteId: number;

    @IsString()
    titulo: string;

    @IsDate()
    data: Date;

    @IsDate()
    horarioInicio: Date;

    @IsDate()
    horarioFim: Date;

    constructor(id: number, pacienteId: number, titulo: string, data: Date, horarioInicio: Date, horarioFim: Date){
        this.id = id;
        this.pacienteId = pacienteId;
        this.titulo = titulo;
        this.data = data;
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
    }
}