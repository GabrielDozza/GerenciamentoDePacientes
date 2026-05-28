import { CreatePacienteDTO, PacienteResponseDTO, UpdatePacienteDTO } from "../../interface/dto/paciente.dto";
import { Paciente } from "../models/paciente.model";

export interface IPacienteRepository{
    getPacientes() : Promise<PacienteResponseDTO[]>;
    getPacientesId(id: String) : Promise<PacienteResponseDTO | null>;
    postPaciente(body: any) : Promise<CreatePacienteDTO>;
    patchPaciente(id: String, body: any) : Promise<PacienteResponseDTO | null>;
    deletePaciente(id: String) : Promise<PacienteResponseDTO | null>;
}