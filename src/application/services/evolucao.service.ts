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
        private readonly evolucaoMapper: EvolucaoMapper,
        private readonly evolucaoRepository: EvolucaoRepository
    ) {}

    async getByPaciente(paciente : Paciente){
        return this.evolucaoRepository.getEvolucoesPaciente(paciente);
    }

    async create(idPaciente : String, evolucao : any) : Promise<Evolucao>{
            evolucao.pacienteId = Number(idPaciente);
            const evoDTO = this.evolucaoMapper.toDTO(evolucao);
            const evoDomain = await this.evolucaoMapper.toDomain(evoDTO);
        
            return evoDomain;
        }

}