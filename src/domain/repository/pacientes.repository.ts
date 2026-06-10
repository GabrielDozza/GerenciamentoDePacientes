import { Injectable } from "@nestjs/common";
import type { Paciente } from "../models/paciente.model";
import { IPacienteRepository } from "./pacientes";
import { PacienteMapper } from "../../application/mappers/paciente.mapper";
import { PacienteDTO } from "../../interface/dto/paciente.dto";
import { getPacientes, getPacientesId, patchPaciente, postPaciente, getPacientesCpf } from "../../persistence/pacientes";


@Injectable()
export class PacienteRepository implements IPacienteRepository{
    constructor( 
        private readonly pacienteMapper : PacienteMapper 
    ){};

    public async getPacientes() : Promise<PacienteDTO[]>{
        const pacientes = await getPacientes();
        let pArray: PacienteDTO[] = [];
        for (const p of pacientes) {
            const pDTO : PacienteDTO = this.pacienteMapper.toDTO(p);
            pArray.push(pDTO);
        }
        return pArray;
    };

    public async getPacientesId(id: String) : Promise<PacienteDTO>{
        const paciente = await getPacientesId(id);
        const pacienteDTO = this.pacienteMapper.toDTO(paciente);
        return pacienteDTO;
    };

    public async postPaciente(body: any) : Promise<Paciente>{
        const pacienteDTO = this.pacienteMapper.toDTO(body);
        const pacienteDomain = await this.pacienteMapper.toDomain(pacienteDTO);

        await postPaciente(pacienteDomain);
        return pacienteDomain;
    };

    public async patchPaciente(id: String, body: any) : Promise<Paciente>{
        const paciente = getPacientesId(id);
        const pacienteDTO = this.pacienteMapper.toDTO(paciente);
        const pacienteDomain = await this.pacienteMapper.toDomain(pacienteDTO);

        const updateDTO = this.pacienteMapper.toUpdateDTO(body);
        const pacienteUpdated = await this.pacienteMapper.updateDomain(pacienteDomain, updateDTO);
        await patchPaciente(pacienteUpdated);

        return pacienteUpdated;
    };

}