import prisma from "../../../prisma/prisma";
import { EventoMapper } from "../../application/mappers/evento.mapper";
import { Evento } from "../models/evento.model";
import { IEventoRepository } from "./eventos";
import { getEventosPaciente } from "../../persistence/eventos"
import { EventoDTO } from "../../interface/dto/evento.dto";
import { eventosController } from "../../interface/controllers/eventos.controller";
import { getPacientesId } from "../../persistence/pacientes";
import { PacienteMapper } from "../../application/mappers/paciente.mapper";
import { Paciente } from "../models/paciente.model";
import { verificaIdRecebido } from "../../interface/middlewares/pacientes";


export class EventoRepository implements IEventoRepository {
    constructor(
        private readonly eventoMapper: EventoMapper,
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

    public async postEventoPaciente(body: any) : Promise<Evento | null> {
        verificaIdRecebido(String(body.pacienteId));
        const paciente = await getPacientesId(String(body.pacienteId));
        console.log("repo 1: "+JSON.stringify(paciente));
        if (paciente == null){
            return null;
        }
        const evnDTO : EventoDTO = this.eventoMapper.toDTO(body);
        console.log("repo 2: "+JSON.stringify(evnDTO));
        const evnDomain : Evento = await this.eventoMapper.toDomain(evnDTO);
        console.log("repo 3: "+JSON.stringify(evnDomain));
        return evnDomain;
    };
};

