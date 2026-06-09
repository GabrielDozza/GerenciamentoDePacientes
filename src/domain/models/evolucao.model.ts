export class Evolucao {
    id: number;
    pacienteId: number;
    titulo: string;
    data: Date;
    horarioInicio: Date;
    horarioFim: Date;
    descricao: string;

    constructor(id: number, pacienteId: number, titulo: string, data: Date, horarioInicio: Date, horarioFim: Date, descricao: string) {
        this.id = id;
        this.pacienteId = pacienteId;
        this.titulo = titulo;
        this.data = data;
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
        this.descricao = descricao;
    }
}