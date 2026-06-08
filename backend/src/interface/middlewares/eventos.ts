import { BadRequestException } from "@nestjs/common";

function verificaDadosPostEventos(body: any) {
    if (body.titulo === undefined) {
        throw new BadRequestException({ message: "Digite um título" });
    }

    if (typeof body.titulo !== "string") {
        throw new BadRequestException({ message: "Título precisa ser uma string" });
    }

    if (body.data === undefined) {
        throw new BadRequestException({ message: "Digite uma data" });
    }

    if (isNaN(Date.parse(body.data))) {
        throw new BadRequestException({ message: "Data inválida" });
    }

    if (body.horarioInicio === undefined) {
        throw new BadRequestException({ message: "Digite um horário de início" });
    }

    if (typeof body.horarioInicio !== "string") {
        throw new BadRequestException({ message: "Horário de início precisa ser uma string" });
    }

    if (body.horarioFim === undefined) {
        throw new BadRequestException({ message: "Digite um horário de fim" });
    }

    if (typeof body.horarioFim !== "string") {
        throw new BadRequestException({ message: "Horário de fim precisa ser uma string" });
    }
}

export default verificaDadosPostEventos;