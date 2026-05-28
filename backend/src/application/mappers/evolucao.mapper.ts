import { Injectable } from "@nestjs/common";
import { Evolucao } from "../../domain/models/evolucao.model";
import { CreateEvolucaoDTO, EvolucaoResponseDTO } from "../../interface/dto/evolucao.dto";


@Injectable()
export class EvolucaoMapper {
    public toDomain = async (evolucaoDTO: CreateEvolucaoDTO) : Promise<Evolucao> => {
        const evolucao = new Evolucao(
            evolucaoDTO.id,
            evolucaoDTO.titulo,
            evolucaoDTO.data,
            evolucaoDTO.horarioInicio,
            evolucaoDTO.horarioFim,
            evolucaoDTO.descricao
        );
        return evolucao;
    }

    public toDTO = (evolucao: Evolucao) : EvolucaoResponseDTO => {
        return {
            titulo: evolucao.titulo,
            data: evolucao.data,
            horarioInicio: evolucao.horarioInicio,
            horarioFim: evolucao.horarioFim,
            descricao: evolucao.descricao
        };
    }

}