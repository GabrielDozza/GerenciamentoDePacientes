import { Injectable } from "@nestjs/common";
import { Paciente } from "../../domain/models/paciente.model";
import { PacienteDTO, UpdatePacienteDTO } from "../../interface/dto/paciente.dto";


@Injectable()
export class PacienteMapper {
    public toDomain = async (pacienteDTO: PacienteDTO) : Promise<Paciente> => {
        const paciente = new Paciente(
            pacienteDTO.id,
            pacienteDTO.nome,
            pacienteDTO?.cpf,
            pacienteDTO?.dataNascimento,
            pacienteDTO?.telefone,
            pacienteDTO?.email,
            pacienteDTO?.endereco
        );
        return paciente;
    }


    public toDTO = (paciente: Paciente) : PacienteDTO => {
        return {
            id: paciente.id,
            nome: paciente.nome,
            cpf: paciente?.cpf?? undefined,
            dataNascimento: paciente?.dataNascimento?? undefined,
            telefone: paciente?.telefone?? undefined,
            email: paciente?.email?? undefined,
            endereco: paciente?.endereco?? undefined,
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