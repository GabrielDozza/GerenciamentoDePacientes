import { Injectable } from "@nestjs/common";
import { EventoRepository } from "../../domain/repository/eventos.repository";
import { EventoMapper } from "../mappers/evento.mapper";
import { Paciente } from "../../domain/models/paciente.model";
import { EventoDTO } from "../../interface/dto/evento.dto";
import { Evento } from "../../domain/models/evento.model";
import { getEventosPaciente } from "../../persistence/eventos";


@Injectable()
export class EventoService {
    constructor(
        private readonly eventoRepository: EventoRepository,
        private readonly eventoMapper: EventoMapper
    ) {}

    async getByPaciente(paciente : Paciente){
        return getEventosPaciente(paciente);
    }

    async create(idPaciente: String, eventoDTO : EventoDTO) : Promise<Evento | null>{
        const evento = await this.eventoMapper.toDomain(idPaciente, eventoDTO);
        console.log("create 1: "+JSON.stringify(evento));
        const eventoDomain = await this.eventoRepository.postEventoPaciente(idPaciente, evento);
        console.log("create 2: "+JSON.stringify(eventoDomain));
        return eventoDomain;
    }
    
}
