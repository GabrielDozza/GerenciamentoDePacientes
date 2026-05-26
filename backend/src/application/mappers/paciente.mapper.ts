import { Injectable } from "@nestjs/common";
import { Paciente } from "../../domain/models/paciente.model";
import { CreatePacienteDTO, PacienteResponseDTO, UpdatePacienteDTO } from "../../interface/dto/paciente.dto";


@Injectable()
export class PacienteMapper {
    public toDomain = async (pacienteDTO: CreatePacienteDTO) : Promise<Paciente> => {
        const paciente = new Paciente(
            pacienteDTO.id,
            pacienteDTO.nome,
            pacienteDTO.cpf,
            pacienteDTO.dataNascimento,
            pacienteDTO.telefone,
            pacienteDTO.email,
            pacienteDTO.endereco,
        );
        return paciente;
    }

    public toDTO = (paciente: Paciente) : PacienteResponseDTO => {
        return {
            id: paciente.id,
            nome: paciente.nome,
            cpf: paciente.cpf,
            dataNascimento: paciente.dataNascimento,
            telefone: paciente.telefone,
            email: paciente.email,
            endereco: paciente.endereco,
            eventos: paciente.eventos,
            evolucoes: paciente.evolucoes
        };
    }

    public updateDomain = async (paciente: Paciente, updatePacienteDTO: UpdatePacienteDTO) : Promise<Paciente> => {
        if (updatePacienteDTO.nome) paciente.nome = updatePacienteDTO.nome;
        if (updatePacienteDTO.cpf) paciente.cpf = updatePacienteDTO.cpf;
        if (updatePacienteDTO.dataNascimento) paciente.dataNascimento = updatePacienteDTO.dataNascimento;
        if (updatePacienteDTO.telefone) paciente.telefone = updatePacienteDTO.telefone;
        if (updatePacienteDTO.email) paciente.email = updatePacienteDTO.email;
        if (updatePacienteDTO.endereco) paciente.endereco = updatePacienteDTO.endereco;
        
        return paciente;
    }

}