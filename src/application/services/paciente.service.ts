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
import { EventoService } from "./evento.service";
import { PacientesController } from "../../interface/controllers/pacientes.controller";
import { EvolucaoService } from "./evolucao.service";



@Injectable()
export class PacienteService {
    constructor(
        private readonly pacienteRepository: PacienteRepository,
        private readonly pacienteMapper: PacienteMapper,
        private readonly eventoService: EventoService,
        private readonly evolucaoService : EvolucaoService
    ) {}

    async getAll(){
        return await this.pacienteRepository.getPacientes();
    }

    async getById(id : String){
        verificaIdRecebido(id);
        return await this.pacienteRepository.getPacientesId(id);
    }
    
    async create(paciente : any) : Promise<Paciente>{
        verificaDadosPostBody(paciente);
        return await this.pacienteRepository.postPaciente(paciente);
    }

    async patch(id : String, update : any){
        verificaIdRecebido(id);
        verificaDadosPatchBody(update);
        return await this.pacienteRepository.patchPaciente(id, update);
    }

    async delete(id: String){
        verificaIdRecebido(id);
        return await deletePaciente(id);
    }

    async addEvento(id : String, evento : any){
        const paciente = await this.pacienteRepository.getPacientesId(id);
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente);

        const evnDomain = await this.eventoService.create(id, evento);
        
        pacienteDomain.eventos.push(evnDomain);
        return evnDomain;
    }

    async addEvolucao(id : String, evolucao : any){
        const paciente = await this.pacienteRepository.getPacientesId(id);
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente);

        const evoDomain = await this.evolucaoService.create(id, evolucao);
        
        pacienteDomain.evolucoes.push(evoDomain);
        return evoDomain;
    }

    async getEventos(id : String) : Promise<Evento[]>{
        const paciente = await this.pacienteRepository.getPacientesId(id);
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente);
        const eArray = await this.eventoService.getByPaciente(pacienteDomain)
        return eArray;
    }

    async getEvolucoes(id : String) : Promise<Evolucao[]>{
        const paciente = await this.pacienteRepository.getPacientesId(id);
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente);
        const eArray = await this.evolucaoService.getByPaciente(pacienteDomain)
        return eArray;
    }
}
