import { Delete, Inject, Injectable } from "@nestjs/common";
import { PacienteMapper } from "../mappers/paciente.mapper";
import { PacienteDTO, UpdatePacienteDTO } from "../../interface/dto/paciente.dto";
import { PacienteRepository } from "../../domain/repository/pacientes.repository";
import { Paciente } from "../../domain/models/paciente.model";
import { Evento } from "../../domain/models/evento.model";
import { Evolucao } from "../../domain/models/evolucao.model";



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
        const paciente = await this.pacienteRepository.getPacientesId(id);
        return paciente;
    }
    
    async create(pacienteDTO : PacienteDTO) : Promise<Paciente>{
        const paciente = await this.pacienteMapper.toDomain(pacienteDTO);
        return await this.pacienteRepository.postPaciente(paciente);
    }

    async patch(id : String, updatePacienteDTO : UpdatePacienteDTO){
        const paciente = await this.pacienteRepository.getPacientesId(id);
        if(paciente == null){
            return null;
        }
        const pacienteDomain = await this.pacienteMapper.toDomain(paciente)
        return await this.pacienteMapper.updateDomain(pacienteDomain, updatePacienteDTO);
    }

    async addEvento(id : String, evento : Evento){
        const paciente = await this.pacienteRepository.getPacientesId(id);
        if(paciente == null){
            return null;
        }
        paciente.eventos.push(evento);
        return paciente;
    }

    async addEvolucao(id : String, evolucao : Evolucao){
        const paciente = await this.pacienteRepository.getPacientesId(id);
        if(paciente == null){
            return null;
        }
        paciente.evolucoes.push(evolucao);
        return paciente;
    }

    async getEventos(id : String) : Promise<Evento[] | null>{
        const paciente = await this.pacienteRepository.getPacientesId(id);
        if(paciente == null){
            return null;
        }
        return paciente.eventos;
    }

    async getEvolucoes(id : String) : Promise<Evolucao[] | null>{
        const paciente = await this.pacienteRepository.getPacientesId(id);
        if(paciente == null){
            return null;
        }
        return paciente.evolucoes;
    }
}
/*
Cadastrar pacientes;
Listar pacientes cadastrados;
Buscar pacientes pelo nome;
Visualizar os dados detalhados de um paciente;
Editar os dados de um paciente;
Remover um paciente;
Criar eventos/consultas vinculados a um paciente;
Visualizar os eventos de um paciente;
Criar evoluções/prontuários simples para acompanhamento;
Visualizar o histórico de evoluções do paciente.
*/