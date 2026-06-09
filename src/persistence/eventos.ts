import prisma from "../../prisma/prisma";
import { Evento } from "../domain/models/evento.model";
import { Paciente } from "../domain/models/paciente.model";

async function getEventosPaciente(paciente : Paciente) {
    const evento = prisma.evento.findMany({
        where: {
            pacienteId: Number(paciente.id)
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

