import { IsDate, IsNumber, IsString } from "class-validator";

export class EvolucaoDTO{
    @IsNumber()
    id: number;

    @IsNumber()
    pacienteId: number;

    @IsString()
    titulo: string;

    @IsString()
    data: string;

    @IsString()
    horarioInicio: string;

    @IsString()
    horarioFim: string;

    @IsString()
    descricao: string;

    constructor(id: number, pacienteId: number, titulo: string, data: string, horarioInicio: string, horarioFim: string, descricao: string){
        this.id = id;
        this.pacienteId = pacienteId;
        this.titulo = titulo;
        this.data = data;
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
        this.descricao = descricao;
    }
}