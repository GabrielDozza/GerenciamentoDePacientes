import prisma from "../../prisma/prisma";

async function getEventosPaciente(id: String) {
    const evento = prisma.evento.findMany({
        where: {
            pacienteId: Number(id)
        }
    });

    return evento;
};

async function postEventoPaciente(id: String, body: any) {
    const evento = prisma.evento.create({
        data: {
            paciente: body.paciente,
            pacienteId: Number(id),
            titulo: body.titulo,
            data: new Date(body.data),
            horarioInicio: body.horarioInicio,
            horarioFim: body.horarioFim
        }
    });

    return evento;
};

async function patchEventoPaciente(id: String, body: any) {
    const evento = await prisma.evento.update({
        where: {
            id: Number(id)
        },

        data: {
            ...body
        }
    });

    return evento;
};

async function deleteEvento(id: String) {
    const evento = await prisma.evento.delete({
        where: { id: Number(id) }
    });

    return evento;
};

export { getEventosPaciente, postEventoPaciente, patchEventoPaciente, deleteEvento };

