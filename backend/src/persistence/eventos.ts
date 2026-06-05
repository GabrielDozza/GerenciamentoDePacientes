import prisma from "../../prisma/prisma";
import { Evento } from "../domain/models/evento.model";

async function getEventosPaciente(id: String) {
    const evento = prisma.evento.findMany({
        where: {
            pacienteId: Number(id)
        }
    });

    return evento;
};

async function postEventoPaciente(body: Evento) {
    const evento = prisma.evento.create({
        data: {
            pacienteId: body.pacienteId,
            titulo: body.titulo,
            data: body.data,
            horarioInicio: body.horarioInicio,
            horarioFim: body.horarioFim
        }
    });

    return evento;
};

export { getEventosPaciente, postEventoPaciente };

