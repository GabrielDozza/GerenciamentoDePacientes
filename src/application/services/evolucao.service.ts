import { Injectable } from "@nestjs/common";
import { EvolucaoRepository } from "../../domain/repository/evolucoes.repository";
import { EvolucaoMapper } from "../mappers/evolucao.mapper";
import { Paciente } from "../../domain/models/paciente.model";
import { EvolucaoDTO } from "../../interface/dto/evolucao.dto";
import { Evolucao } from "../../domain/models/evolucao.model";
import { getEvolucoesPaciente } from "../../persistence/evolucoes";


@Injectable()
export class EvolucaoService {
    constructor(
        private readonly evolucaoRepository: EvolucaoRepository,
        private readonly evolucaoMapper: EvolucaoMapper
    ) {}

    async getByPaciente(paciente : Paciente){
        return getEvolucoesPaciente(paciente);
    }

    async create(evolucaoDTO : EvolucaoDTO) : Promise<Evolucao | null>{
        const evolucao = await this.evolucaoMapper.toDomain(evolucaoDTO);
        return await this.evolucaoRepository.postEvolucaoPaciente(evolucao);
    }

}