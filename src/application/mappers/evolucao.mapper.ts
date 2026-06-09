import { Injectable } from "@nestjs/common";
import { Evolucao } from "../../domain/models/evolucao.model";
import { EvolucaoDTO } from "../../interface/dto/evolucao.dto";


@Injectable()
export class EvolucaoMapper {
    public toDomain = async (evolucaoDTO: EvolucaoDTO) : Promise<Evolucao> => {
        const evolucao = new Evolucao(
            evolucaoDTO.id,
            evolucaoDTO.pacienteId,
            evolucaoDTO.titulo,
            evolucaoDTO.data,
            evolucaoDTO.horarioInicio,
            evolucaoDTO.horarioFim,
            evolucaoDTO.descricao
        );
        return evolucao;
    }

    public toDTO = (evolucao: Evolucao | any) : EvolucaoDTO => {
        return {
            id: evolucao.id,
            pacienteId: parseInt(evolucao.pacienteId),
            titulo: evolucao.titulo,
            data: this.stringToDate(evolucao.data),
            horarioInicio: this.stringToDate(evolucao.data, evolucao.horarioInicio),
            horarioFim: this.stringToDate(evolucao.data, evolucao.horarioFim),
            descricao: evolucao.descricao
        };
    }

    private stringToDate = (data: any, horario? : any) : Date => {
        if (data instanceof Date && !isNaN(data.getTime())) {
            return data;
        }
        const [day, month, year] = data.split("/");
        if(horario){
            const [hora, minuto] = horario.split(":");
            return new Date(parseInt(year), parseInt(month)-1, parseInt(day), parseInt(hora), parseInt(minuto));
        }
        return new Date(parseInt(year), parseInt(month)-1, parseInt(day));
    }
    

}