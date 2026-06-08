import prisma from "../../prisma/prisma";

async function getEvolucoesPaciente(id: String) {
    const evolucoes = prisma.evolucao.findMany({
        where: { pacienteId: Number(id) }
    });

    return evolucoes;
};

async function postEvolucaoPaciente(body: any) {
    const evolucao = prisma.evolucao.create({
        data: {
            paciente: body.paciente,
            pacienteId: body.pacienteId,
            titulo: body.titulo,
            data: body.data,
            horarioInicio: body.horarioInicio,
            horarioFim: body.horarioFim,
            descricao: body.descricao
        }
    });

    return evolucao;
};

export { getEvolucoesPaciente, postEvolucaoPaciente };