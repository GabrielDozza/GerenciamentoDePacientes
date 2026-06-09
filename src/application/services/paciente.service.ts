import { Injectable } from "@nestjs/common";
import { PacienteMapper } from "../mappers/paciente.mapper";
import { PacienteDTO, UpdatePacienteDTO } from "../../interface/dto/paciente.dto";
import { PacienteRepository } from "../../domain/repository/pacientes.repository";
import { Paciente } from "../../domain/models/paciente.model";
import { Evento } from "../../domain/models/evento.model";
import { Evolucao } from "../../domain/models/evolucao.model";
import { deletePaciente } from "../../persistence/pacientes";
import { verificaIdRecebido } from "../../interface/middlewares/pacientes";
import { postEventoPaciente } from "../../persistence/eventos";
import { postEvolucaoPaciente } from "../../persistence/evolucoes";



@Injectable()
export class PacienteService {
    constructor(
        private readonly pacienteRepository: PacienteRepository,
        private readonly pacienteMapper: PacienteMapper
    ) {}

    async getAll(){
        const paciente = await this.pacienteRepository.getPacientes();
        return paciente;
    }

    async getById(id : String){
        verificaIdRecebido(id);
        const paciente = await this.pacienteRepository.getPacientesId(id);
        return paciente;
    }

    async getByCpf(cpf : String){
        const paciente = await this.pacienteRepository.getPacientesCpf(cpf);
        return paciente;
    }
    
    async create(pacienteDTO : PacienteDTO) : Promise<Paciente>{
        const paciente = await this.pacienteMapper.toDomain(pacienteDTO);
        return await this.pacienteRepository.postPaciente(paciente);
    }

    async patch(id : String, updatePacienteDTO : UpdatePacienteDTO){
        verificaIdRecebido(id);
        const paciente = await this.pacienteRepository.getPacientesId(id);
        if(paciente == null) return null;
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente)
        return await this.pacienteMapper.updateDomain(pacienteDomain, updatePacienteDTO);
    }

    async delete(id: String){
        verificaIdRecebido(id);
        const paciente = await deletePaciente(id);
        return paciente;
    }

    async addEvento(id : String, evento : Evento){
        verificaIdRecebido(id);
        const paciente = await this.pacienteRepository.getPacientesId(id);
        if(paciente == null) return null;
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente);
        pacienteDomain.eventos.push(evento);
        postEventoPaciente(evento);
        return evento;
    }

    async addEvolucao(id : String, evolucao : Evolucao){
        verificaIdRecebido(id);
        const paciente = await this.pacienteRepository.getPacientesId(id);
        if(paciente == null) return null;
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente);
        pacienteDomain.eventos.push(evolucao);
        return evolucao;
    }

    async getEventos(id : String) : Promise<Evento[] | null>{
        verificaIdRecebido(id);
        const paciente = await this.pacienteRepository.getPacientesId(id);
        if(paciente == null) return null;
        return paciente.eventos;
    }

    async getEvolucoes(id : String) : Promise<Evolucao[] | null>{
        verificaIdRecebido(id);
        const paciente = await this.pacienteRepository.getPacientesId(id);
        if(paciente == null) return null;
        return paciente.evolucoes;
    }
}
