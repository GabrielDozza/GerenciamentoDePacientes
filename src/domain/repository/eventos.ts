import { Evento } from "../models/evento.model";

export interface IEventoRepository{
    getEventosPaciente(id: String) : Promise<Evento[] | null>;
    postEventoPaciente(body: any) : Promise<Evento | null>;
}