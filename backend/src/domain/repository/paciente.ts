import { Paciente, PacienteType } from "../models/paciente.model";

export interface IPacienteRepository{
    getPacientes() : Promise<Paciente[]>;
    getPacientesId(id: String) : Promise<Paciente>;
    postPaciente(body: any) : Promise<Paciente>;
    patchPaciente(id: String, body: any) : Promise<Paciente>;
    deletePaciente(id: String) : Promise<Paciente>;
}