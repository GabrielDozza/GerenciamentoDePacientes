import prisma from "../../prisma/prisma";
import { EvolucaoDTO } from "../interface/dto/evolucao.dto";
import { Paciente } from "../domain/models/paciente.model";
import { getPacientesId } from "./pacientes";
import { stringify } from "querystring";

async function getEvolucoesPaciente(paciente: Paciente) {
    const evolucoes = prisma.evolucao.findMany({
        where: { pacienteId: Number(paciente.id) }
    });

    return evolucoes;
};

async function postEvolucaoPaciente(body: EvolucaoDTO) {
    const evolucao = prisma.evolucao.create({
        data: {
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