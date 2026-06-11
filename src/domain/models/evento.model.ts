export class Evento {
    id: number;
    pacienteId: number;
    titulo: string;
    data: string;
    horarioInicio: string;
    horarioFim: string;

    constructor(id: number, pacienteId : number, titulo: string, data: string, horarioInicio: string, horarioFim: string) {
        this.id = id;
        this.pacienteId = pacienteId;
        this.titulo = titulo;
        this.data = data;
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
    }
}