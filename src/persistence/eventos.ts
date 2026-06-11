import prisma from "../../prisma/prisma";
import { Evento } from "../domain/models/evento.model";
import { Paciente } from "../domain/models/paciente.model";
import { parseISO } from "date-fns";

async function getEventosPaciente(paciente : Paciente) {
    const evento = prisma.evento.findMany({
        where: {
            pacienteId: Number(paciente.id)
        },
        select: {
            id: true,
            pacienteId: true,
            titulo: true,
            data: true,
            horarioInicio: true,
            horarioFim: true
        }
    });

    return evento;
};

async function postEventoPaciente(body: Evento) {
    const evento = prisma.evento.create({
        data: {
            pacienteId: body.pacienteId,
            titulo: body.titulo,
            data: parseISO(body.data),
            horarioInicio: parseISO(body.horarioInicio),
            horarioFim: parseISO(body.horarioFim)
        }
    });

    return evento;
};

export { getEventosPaciente, postEventoPaciente };

