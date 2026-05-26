import { Delete, Inject, Injectable } from "@nestjs/common";
import { PacienteMapper } from "../mappers/paciente.mapper";
import { CreatePacienteDTO, UpdatePacienteDTO } from "../../interface/dto/paciente.dto";
import { PacienteRepository } from "../../persistence/pacientes.repository";


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
    
    async create(pacienteDTO : CreatePacienteDTO){
        const paciente = await this.pacienteMapper.toDomain(pacienteDTO);
        return await this.pacienteRepository.postPaciente(paciente);
    }

    async patch(id : String, updatePacienteDTO : UpdatePacienteDTO){
        const paciente = await this.pacienteRepository.getPacientesId(id);
        return await this.pacienteMapper.updateDomain(paciente, updatePacienteDTO);
        
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