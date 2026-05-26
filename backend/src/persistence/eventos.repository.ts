import prisma from "../../prisma/prisma";

async function getEventosPaciente(id: String) {
    const evento = prisma.evento.findMany({
        where: {
            pacienteId: Number(id)
        }
    });

    return evento;
};

async function postEventoPaciente(body: any) {
    const evento = prisma.evento.create({
        data: {
            paciente: body.paciente,
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

