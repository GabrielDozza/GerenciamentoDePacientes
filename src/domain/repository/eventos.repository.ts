import prisma from "../../../prisma/prisma";
import { EventoMapper } from "../../application/mappers/evento.mapper";
import { Evento } from "../models/evento.model";
import { IEventoRepository } from "./eventos";
import { getEventosPaciente, postEventoPaciente } from "../../persistence/eventos"
import { EventoDTO } from "../../interface/dto/evento.dto";
import { eventosController } from "../../interface/controllers/eventos.controller";
import { getPacientesId } from "../../persistence/pacientes";
import { PacienteMapper } from "../../application/mappers/paciente.mapper";
import { Paciente } from "../models/paciente.model";
import { verificaIdRecebido } from "../../interface/middlewares/pacientes";
import { stringify } from "node:querystring";


export class EventoRepository implements IEventoRepository {
    constructor(
        private readonly eventoMapper: EventoMapper,
    ) {}
    
    public async getEventosPaciente(paciente : Paciente){
        console.log(`getEventosPaciente from evento.repository`)
        const eventos = await getEventosPaciente(paciente);
        console.log(eventos)
        return eventos;
    };

    public async postEventoPaciente(body: Evento) : Promise<Evento> {
        console.log(`postEventoPaciente from evento.repository`)
        await postEventoPaciente(body);
        return body;
    };
};

