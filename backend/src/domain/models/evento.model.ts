export class Evento {
    id: number;
    pacienteId: number;
    titulo: string;
    data: Date;
    horarioInicio: Date;
    horarioFim: Date;

    constructor(id: number, pacienteId : number, titulo: string, data: Date, horarioInicio: Date, horarioFim: Date) {
        this.id = id;
        this.pacienteId = pacienteId;
        this.titulo = titulo;
        this.data = data;
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
    }
}