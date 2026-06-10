import { PacienteDTO, UpdatePacienteDTO } from "../../interface/dto/paciente.dto";
import { Paciente } from "../models/paciente.model";

export interface IPacienteRepository{
    getPacientes() : Promise<PacienteDTO[]>;
    getPacientesId(id: String) : Promise<PacienteDTO>;
    postPaciente(body: any) : Promise<PacienteDTO>;
    patchPaciente(id: String, body: any) : Promise<PacienteDTO>;
}