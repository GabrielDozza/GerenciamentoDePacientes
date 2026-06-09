import prisma from "../../../prisma/prisma";
import { EventoMapper } from "../../application/mappers/evento.mapper";
import { Evento } from "../models/evento.model";
import { IEventoRepository } from "./eventos";
import { getEventosPaciente } from "../../persistence/eventos"
import { EventoDTO } from "../../interface/dto/evento.dto";
import { eventosController } from "../../interface/controllers/eventos.controller";
import { PacienteRepository } from "./pacientes.repository";
import { getPacientesId } from "../../persistence/pacientes";
import { PacienteMapper } from "../../application/mappers/paciente.mapper";
import { Paciente } from "../models/paciente.model";
import { PacienteService } from "../../application/services/paciente.service";
import { verificaIdRecebido } from "../../interface/middlewares/pacientes";


export class EventoRepository implements IEventoRepository {
    constructor(
        private readonly eventoMapper: EventoMapper,
        private readonly pacienteService: PacienteService,
        //private readonly pacienteMapper: PacienteMapper
    ) {}
    
    public async getEventosPaciente(paciente : Paciente) : Promise<EventoDTO[]> {
        const eventos = await getEventosPaciente(paciente);
        let evnArray: EventoDTO[] = [];
        for (const evn of eventos){
            const evnResponse = this.eventoMapper.toDTO(evn);
            evnArray.push(evnResponse);
        }
        return evnArray;
    };

    public async postEventoPaciente(idPaciente: String, body: any) : Promise<Evento | null> {
        verificaIdRecebido(idPaciente);
        const paciente = await this.pacienteService.getById(idPaciente);
        console.log("repo 1: "+JSON.stringify(paciente));
        if (paciente == null){
            return null;
        }
        const evnDTO : EventoDTO = this.eventoMapper.toDTO(body);
        console.log("repo 2: "+JSON.stringify(evnDTO));
        const evnDomain : Evento = await this.eventoMapper.toDomain(String(evnDTO.pacienteId),evnDTO);
        console.log("repo 3: "+JSON.stringify(evnDomain));
        return evnDomain;
    };
};

