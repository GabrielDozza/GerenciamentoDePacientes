import prisma from "../../../prisma/prisma";
import { EventoMapper } from "../../application/mappers/evento.mapper";
import { Evento } from "../models/evento.model";
import { IEventoRepository } from "./eventos";

export class EventoRepository implements IEventoRepository {
    constructor(
        private readonly eventoMapper: EventoMapper
    ) {}
    
    public async getEventosPaciente(id: String) : Promise<Evento[]> {
        const evento = prisma.evento.findMany({
            where: {
                pacienteId: Number(id)
            }
    });

    return evento;
};

    public async postEventoPaciente(body: any) : Promise<Evento> {
        const evento = prisma.evento.create({
            data: {
                paciente: body.paciente,
                pacienteId: body.pacienteId,
                titulo: body.titulo,
                data: body.data,
                horarioInicio: body.horarioInicio,
                horarioFim: body.horarioFim
            }
        });

        return evento;
    };
};

