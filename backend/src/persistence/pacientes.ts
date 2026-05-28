import prisma from "../../prisma/prisma.js";

async function getPacientes() {
    const pacientes = await prisma.paciente.findMany({});
    return pacientes;
};

async function getPacientesId(id: String) {
    const paciente = await prisma.paciente.findFirst({
        where: { id: Number(id) }
    });

    return paciente;
};

async function postPaciente(body: any) {
    const paciente = await prisma.paciente.create({
        data: {
            nome: body.nome,
            dataNascimento: new Date(body.dataNascimento),
            telefone: body.telefone,
            email: body.email,
            cpf: body.cpf,
            endereco: body.endereco,
            profissao: body.profissao,
            origem: body.origem,
            eventos: body.eventos,
            evolucoes: body.evolucoes
        }
    })

    return paciente
};

async function patchPaciente(id: String, body: any) {
    body.dataNascimento = new Date(body.dataNascimento);
    const paciente = await prisma.paciente.update({
        where: {
            id: Number(id)
        },

        data: {
            ...body
        }
    });

    return paciente;
};

async function deletePacienteId(id: String) {
    const paciente = await prisma.paciente.delete({
        where: {
            id: Number(id)
        }
    })

    return paciente;
};

export { getPacientes, getPacientesId, postPaciente, patchPaciente, deletePacienteId }