export class EvolucaoModel {
    id: number;
    titulo: string;
    data: Date;
    horarioInicio: Date;
    horarioFim: Date;
    descricao: string;

    constructor(id: number, titulo: string, data: Date, horarioInicio: Date, horarioFim: Date, descricao: string) {
        this.id = id;
        this.titulo = titulo;
        this.data = data;
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
        this.descricao = descricao;
    }
}