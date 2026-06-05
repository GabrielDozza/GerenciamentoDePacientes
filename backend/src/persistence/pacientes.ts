import { Paciente } from "@prisma/client";
import { PacienteDTO, UpdatePacienteDTO } from "../interface/dto/paciente.dto";
import prisma from "../../prisma/prisma";

async function getPacientes() {
    const pacientes = await prisma.paciente.findMany({
            select: {
                id: true,
                nome: true,
                cpf: true,
                dataNascimento: true,
                telefone: true,
                email: true,
                endereco: true,
                eventos: true,
                evolucoes: true
            }
        });
    return pacientes;
};

async function getPacientesId(id: String) {
    const paciente = await prisma.paciente.findFirst({
        where: { id: Number(id) }
    });

    return paciente;
};

async function postPaciente(paciente: Paciente) {
    const novoPaciente = await prisma.paciente.create({
        data: {
            nome: paciente.nome,
            dataNascimento: paciente.dataNascimento ?? new Date(),
            telefone: paciente.telefone,
            email: paciente.email,
            cpf: paciente.cpf,
            endereco: paciente.endereco,
            profissao: paciente.profissao,
            origem: paciente.origem
        }
    })

    return novoPaciente;
};

async function patchPaciente(paciente: Paciente) {
    const updatePaciente = await prisma.paciente.update({
        where: {
            id: Number(paciente.id)
        },

        data: {
            telefone: paciente?.telefone,
            email: paciente?.email,
            cpf: paciente?.cpf,
            endereco: paciente?.endereco,
            profissao: paciente?.profissao,
            origem: paciente?.origem,
            eventos: paciente?.eventos,
            evolucoes: paciente?.evolucoes
        }
    });

    return updatePaciente;
};

async function deletePaciente(id: String) {
    const paciente = await prisma.paciente.delete({
        where: {
            id: Number(id)
        }
    })

    return paciente;
};

export { getPacientes, getPacientesId, postPaciente, patchPaciente, deletePaciente }