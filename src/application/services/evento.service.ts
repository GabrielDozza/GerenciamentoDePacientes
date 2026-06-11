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
        console.log(`getByPaciente from evento.service`)
        return this.eventoRepository.getEventosPaciente(paciente);
    }

    async post(idPaciente : String, evento : any) : Promise<Evento>{
        console.log(`post from evento.service`)
        console.log(idPaciente+" "+JSON.stringify(evento))
        evento.pacienteId = Number(idPaciente);
        const evnDTO = this.eventoMapper.toDTO(evento);
        console.log("DTO: "+JSON.stringify(evnDTO))
        const evnDomain = await this.eventoMapper.toDomain(evnDTO);
        console.log("Domain: "+JSON.stringify(evnDomain))
        const evn = await this.eventoRepository.postEventoPaciente(evnDomain);
        console.log("post: "+JSON.stringify(evn))
        return evn;
    }
    
}
