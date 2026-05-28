import prisma from "../../../prisma/prisma";
import { EvolucaoMapper } from "../../application/mappers/evolucao.mapper";
import { Evolucao } from "../models/evolucao.model";
import { IEvolucaoRepository } from "./evolucoes";

export class EvolucaoRepository implements IEvolucaoRepository {
    constructor(
        private readonly evolucaoMapper: EvolucaoMapper
    ) {};
    public async getEvolucoesPaciente(id: String) : Promise<Evolucao[]> {
        const evolucoes = prisma.evolucao.findMany({
            where: { pacienteId: Number(id) }
        });

        return evolucoes;
    };

    public async postEvolucaoPaciente(body: any) : Promise<Evolucao> {
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
};