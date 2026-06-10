import { Injectable } from "@nestjs/common";
import { PacienteMapper } from "../mappers/paciente.mapper";
import { PacienteDTO, UpdatePacienteDTO } from "../../interface/dto/paciente.dto";
import { PacienteRepository } from "../../domain/repository/pacientes.repository";
import { Paciente } from "../../domain/models/paciente.model";
import { Evento } from "../../domain/models/evento.model";
import { Evolucao } from "../../domain/models/evolucao.model";
import { deletePaciente, getPacientesId } from "../../persistence/pacientes";
import { verificaDadosPatchBody, verificaDadosPostBody, verificaIdRecebido } from "../../interface/middlewares/pacientes";
import { postEventoPaciente } from "../../persistence/eventos";
import { postEvolucaoPaciente } from "../../persistence/evolucoes";
import { EventoMapper } from "../mappers/evento.mapper";
import verificaDadosPostEventos from "../../interface/middlewares/eventos";



@Injectable()
export class PacienteService {
    constructor(
        private readonly pacienteRepository: PacienteRepository,
        private readonly pacienteMapper: PacienteMapper,
        private readonly eventoMapper: EventoMapper
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
    
    async create(paciente : any) : Promise<Paciente>{
        verificaDadosPostBody(paciente);
        return await this.pacienteRepository.postPaciente(paciente);
    }

    async patch(id : String, update : any){
        verificaIdRecebido(id);
        verificaDadosPatchBody(update);

        const paciente = await getPacientesId(id);
        if(paciente == null) return null;
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente)

        const updateDTO : UpdatePacienteDTO = this.pacienteMapper.toUpdateDTO(update);
        return await this.pacienteMapper.updateDomain(pacienteDomain, updateDTO);
    }

    async delete(id: String){
        verificaIdRecebido(id);
        const paciente = await deletePaciente(id);
        return paciente;
    }

    async addEvento(id : String, evento : any){
        verificaIdRecebido(id);
        verificaDadosPostEventos(evento);
        
        const paciente = await this.pacienteRepository.getPacientesId(id);
        if(paciente == null) return null;
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente);

        const evnDTO = this.eventoMapper.toDTO(evento);
        const evnDomain = await this.eventoMapper.toDomain(evnDTO);
        pacienteDomain.eventos.push(evnDomain);
        await postEventoPaciente(evnDomain);
        return evnDTO;
    }

    async addEvolucao(id : String, evolucao : any){
        verificaIdRecebido(id);
        const evoDTO = this.eventoMapper.toDTO(evolucao);
        const evoDomain = await this.eventoMapper.toDomain(evoDTO);
        const paciente = await this.pacienteRepository.getPacientesId(id);
        if(paciente == null) return null;
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente);
        pacienteDomain.eventos.push(evoDomain);
        await postEventoPaciente(evoDomain);
        return evoDTO;
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
