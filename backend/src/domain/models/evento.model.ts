export class Evento {
    id: number;
    titulo: string;
    data: Date;
    horarioInicio: Date;
    horarioFim: Date;

    constructor(id: number, titulo: string, data: Date, horarioInicio: Date, horarioFim: Date) {
        this.id = id;
        this.titulo = titulo;
        this.data = data;
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
    }
}