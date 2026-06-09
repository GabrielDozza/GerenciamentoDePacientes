import { Paciente } from "../models/paciente.model";
import { Evento } from "../models/evento.model";
import { EventoDTO } from "../../interface/dto/evento.dto";

export interface IEventoRepository{
    getEventosPaciente(paciente : Paciente) : Promise<EventoDTO[]>
    postEventoPaciente(idPaciente: String, body: any) : Promise<Evento | null>;
}