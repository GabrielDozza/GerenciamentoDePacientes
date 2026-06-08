import { Injectable } from "@nestjs/common";
import { Evolucao } from "../../domain/models/evolucao.model";
import { EvolucaoDTO } from "../../interface/dto/evolucao.dto";


@Injectable()
export class EvolucaoMapper {
    public toDomain = async (evolucaoDTO: EvolucaoDTO) : Promise<Evolucao> => {
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

    public toDTO = (evolucao: Evolucao) : EvolucaoDTO => {
        return {
            id: evolucao.id,
            titulo: evolucao.titulo,
            data: evolucao.data,
            horarioInicio: evolucao.horarioInicio,
            horarioFim: evolucao.horarioFim,
            descricao: evolucao.descricao
        };
    }

}