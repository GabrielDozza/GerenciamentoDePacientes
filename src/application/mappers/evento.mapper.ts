import { Injectable } from "@nestjs/common";
import { Evento } from "../../domain/models/evento.model";
import { EventoDTO } from "../../interface/dto/evento.dto";


@Injectable()
export class EventoMapper {
    public toDomain = async (eventoDTO: EventoDTO) : Promise<Evento> => {
        const evento = new Evento(
            eventoDTO.id,
            eventoDTO.pacienteId,
            eventoDTO.titulo,
            eventoDTO.data,
            eventoDTO.horarioInicio,
            eventoDTO.horarioFim,
        );
        return evento;
    }

    public toDTO = (evento: Evento | any) : EventoDTO => {
        return {
            id: evento.id,
            pacienteId: evento.pacienteId,
            titulo: evento.titulo,
            data: evento.data,
            horarioInicio: evento.horarioInicio,
            horarioFim: evento.horarioFim,
        };
    }

}