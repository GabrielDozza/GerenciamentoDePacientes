import { Injectable } from "@nestjs/common";
import { PacienteMapper } from "../mappers/paciente.mapper";
import { PacienteRepository } from "../../domain/repository/pacientes.repository";
import { Paciente } from "../../domain/models/paciente.model";
import { deletePaciente, getPacientesId } from "../../persistence/pacientes";
import { verificaDadosPatchBody, verificaDadosPostBody, verificaIdRecebido } from "../../interface/middlewares/pacientes";
import { EventoService } from "./evento.service";
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
        console.log(`getAll from pacientes.service`)
        return await this.pacienteRepository.getPacientes();
    }

    async getById(id : String){
        console.log(`getbyId from pacientes.service`)
        verificaIdRecebido(id);
        return await this.pacienteRepository.getPacientesId(id);
    }
    
    async create(paciente : any) : Promise<Paciente>{
        console.log(`create from pacientes.service`)
        verificaDadosPostBody(paciente);
        return await this.pacienteRepository.postPaciente(paciente);
    }

    async patch(id : String, update : any){
        console.log(`patch from pacientes.service`)
        verificaIdRecebido(id);
        verificaDadosPatchBody(update);
        return await this.pacienteRepository.patchPaciente(id, update);
    }

    async delete(id: String){
        console.log(`delete from pacientes.service`)
        verificaIdRecebido(id);
        return await deletePaciente(id);
    }

    async addEvento(id : String, evento : any){
        console.log(`addEvento from pacientes.service`)
        const evnPost = await this.eventoService.post(id, evento);
        return evnPost;
    }

    async addEvolucao(id : String, evolucao : any){
        console.log(`addEvolucao from pacientes.service`)
        const evoPost = await this.evolucaoService.post(id, evolucao);
        return evoPost;
    }

    async getEventos(id : String){
        console.log(`getEventos from pacientes.service`)
        const paciente = await this.pacienteRepository.getPacientesId(id);
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente);
        const eArray = await this.eventoService.getByPaciente(pacienteDomain)
        return eArray;
    }

    async getEvolucoes(id : String){
        console.log(`getEvolucoes from pacientes.service`)
        const paciente = await this.pacienteRepository.getPacientesId(id);
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente);
        const eArray = await this.evolucaoService.getByPaciente(pacienteDomain)
        return eArray;
    }
}
