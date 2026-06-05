import prisma from "../../../prisma/prisma";
import { EventoMapper } from "../../application/mappers/evento.mapper";
import { Evento } from "../models/evento.model";
import { IEventoRepository } from "./eventos";
import { getEventosPaciente } from "../../persistence/eventos"
import { EventoDTO } from "../../interface/dto/evento.dto";
import { eventosController } from "../../interface/controllers/eventosController";
import { PacienteRepository } from "./pacientes.repository";
import { getPacientesId } from "../../persistence/pacientes";
import { PacienteMapper } from "../../application/mappers/paciente.mapper";
import { Paciente } from "../models/paciente.model";


export class EventoRepository implements IEventoRepository {
    constructor(
        private readonly eventoMapper: EventoMapper,
        private readonly pacienteRepository: PacienteRepository,
        private readonly pacienteMapper: PacienteMapper
    ) {}
    
    public async getEventosPaciente(id: String) : Promise<EventoDTO[]> {
        const eventos = await getEventosPaciente(id);
        let evnArray: EventoDTO[] = [];
        for (const evn of eventos){
            const evnResponse = this.eventoMapper.toDTO(evn);
            evnArray.push(evnResponse);
        }
        return evnArray;
    };

    public async postEventoPaciente(body: any) : Promise<Evento | null> {
        const paciente = await this.pacienteRepository.getPacientesId(body.pacienteId);
        if (paciente == null){
            return null;
        }
        const pacienteDomain : Paciente = await this.pacienteMapper.toDomain(paciente);
        const evnDTO : EventoDTO = this.eventoMapper.toDTO(body);
        const evnDomain : Evento = await this.eventoMapper.toDomain(evnDTO);
        pacienteDomain.eventos.push(evnDomain);
        return evnDomain;
    };
};

