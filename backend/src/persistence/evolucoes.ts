import prisma from "../../prisma/prisma";

async function getEvolucoesPaciente(id: String) {
    const evolucoes = prisma.evolucao.findMany({
        where: { pacienteId: Number(id) }
    });

    return evolucoes;
};

async function postEvolucaoPaciente(id:String, body: any) {
    const evolucao = prisma.evolucao.create({
        data: {
            paciente: body.paciente,
            pacienteId: Number(id),
            titulo: body.titulo,
            data: new Date(body.data),
            horarioInicio: body.horarioInicio,
            horarioFim: body.horarioFim,
            descricao: body.descricao
        }
    });

    return evolucao;
};

async function patchEvolucaoPaciente(id: String, body: any) {
    const evolucao = await prisma.evolucao.update({
        where: {
            id: Number(id)
        },
        data: {
            ...body
        }
    });

    return evolucao;
};

async function deleteEvolucaoPaciente(id: String) {
    const evolucao = await prisma.evolucao.delete({
        where: {
            id: Number(id)
        }
    })

    return evolucao;
};

export { getEvolucoesPaciente, postEvolucaoPaciente, patchEvolucaoPaciente, deleteEvolucaoPaciente };