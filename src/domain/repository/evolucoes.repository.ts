import prisma from "../../../prisma/prisma";
import { EvolucaoMapper } from "../../application/mappers/evolucao.mapper";
import { postEvolucaoPaciente, getEvolucoesPaciente } from "../../persistence/evolucoes";
import { Evolucao } from "../models/evolucao.model";
import { Paciente } from "../models/paciente.model";
import { IEvolucaoRepository } from "./evolucoes";
import { EvolucaoDTO } from "../../interface/dto/evolucao.dto";

export class EvolucaoRepository implements IEvolucaoRepository {
    constructor(
        private readonly evolucaoMapper: EvolucaoMapper
    ) {};
    public async getEvolucoesPaciente(paciente: Paciente) : Promise<EvolucaoDTO[]> {
        const evolucoes = await getEvolucoesPaciente(paciente);
        let evnArray: EvolucaoDTO[] = [];
        for (const evn of evolucoes){
            const evnResponse = this.evolucaoMapper.toDTO(evn);
            evnArray.push(evnResponse);
        }
        return evnArray;
    };

    public async postEvolucaoPaciente(body: any) : Promise<Evolucao> {
        const evoDTO = this.evolucaoMapper.toDTO(body);
        const evoDomain = await this.evolucaoMapper.toDomain(evoDTO);
        
        postEvolucaoPaciente(evoDomain)
        return evoDomain;
    };
};