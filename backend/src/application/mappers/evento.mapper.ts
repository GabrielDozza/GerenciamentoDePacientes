import { Injectable } from "@nestjs/common";
import { Evento } from "../../domain/models/evento.model";
import { CreateEventoDTO, EventoResponseDTO } from "../../interface/dto/evento.dto";


@Injectable()
export class EventoMapper {
    public toDomain = async (eventoDTO: CreateEventoDTO) : Promise<Evento> => {
        const evento = new Evento(
            eventoDTO.id,
            eventoDTO.titulo,
            eventoDTO.data,
            eventoDTO.horarioInicio,
            eventoDTO.horarioFim,
        );
        return evento;
    }

    public toDTO = (evento: Evento) : EventoResponseDTO => {
        return {
            titulo: evento.titulo,
            data: evento.data,
            horarioInicio: evento.horarioInicio,
            horarioFim: evento.horarioFim,
        };
    }

}