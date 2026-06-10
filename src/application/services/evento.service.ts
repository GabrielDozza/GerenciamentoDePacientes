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
        private readonly eventoMapper: EventoMapper,
        private readonly eventoRepository: EventoRepository
    ) {}

    async getByPaciente(paciente : Paciente){
        return this.eventoRepository.getEventosPaciente(paciente);
    }

    async create(idPaciente : String, evento : any) : Promise<Evento>{
        evento.pacienteId = Number(idPaciente);
        const evnDTO = this.eventoMapper.toDTO(evento);
        const evnDomain = await this.eventoMapper.toDomain(evnDTO);
    
        return evnDomain;
    }
    
}
