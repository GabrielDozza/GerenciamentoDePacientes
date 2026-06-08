import { Injectable } from "@nestjs/common";
import { Paciente } from "../../domain/models/paciente.model";
import { PacienteDTO, UpdatePacienteDTO } from "../../interface/dto/paciente.dto";
import { Evento } from "../../domain/models/evento.model";
import { Evolucao } from "../../domain/models/evolucao.model";
import verificaDadosBody from "../../interface/middlewares/pacientes";


@Injectable()
export class PacienteMapper {
    public toDomain = async (pacienteDTO: PacienteDTO/* | any*/) : Promise<Paciente> => {
        const paciente = new Paciente(
            pacienteDTO.id,
            pacienteDTO.nome,
            pacienteDTO.dataNascimento,
            pacienteDTO?.cpf,
            pacienteDTO?.telefone,
            pacienteDTO?.email,
            pacienteDTO?.endereco,
            pacienteDTO?.profissao,
            pacienteDTO?.origem
        );
        return paciente;
    }


    public toDTO = (paciente: Paciente | any) : PacienteDTO => {
        verificaDadosBody(paciente);
        return {
            id: paciente.id,
            nome: paciente.nome,
            dataNascimento: this.stringToDate(paciente.dataNascimento),
            cpf: paciente?.cpf?? undefined,
            telefone: paciente?.telefone?? undefined,
            email: paciente?.email?? undefined,
            endereco: paciente?.endereco?? undefined,
            profissao: paciente?.profissao?? undefined,
            origem: paciente?.origem?? undefined,
            eventos: paciente.eventos,
            evolucoes: paciente.evolucoes
        };
    }

    public toUpdateDTO = (paciente : any) : UpdatePacienteDTO => {
        return {
            cpf: paciente?.cpf?? undefined,
            telefone: paciente?.telefone?? undefined,
            email: paciente?.email?? undefined,
            endereco: paciente?.endereco?? undefined,
            profissao: paciente?.profissao?? undefined,
            origem: paciente?.origem?? undefined,
        }
    }

    public updateDomain = async (paciente: Paciente, updatePacienteDTO: UpdatePacienteDTO) : Promise<Paciente> => {
        if (updatePacienteDTO.nome) paciente.nome = updatePacienteDTO.nome;
        if (updatePacienteDTO.cpf) paciente.cpf = updatePacienteDTO.cpf;
        if (updatePacienteDTO.dataNascimento) paciente.dataNascimento = updatePacienteDTO.dataNascimento;
        if (updatePacienteDTO.telefone) paciente.telefone = updatePacienteDTO.telefone;
        if (updatePacienteDTO.email) paciente.email = updatePacienteDTO.email;
        if (updatePacienteDTO.endereco) paciente.endereco = updatePacienteDTO.endereco;
        if (updatePacienteDTO.profissao) paciente.profissao = updatePacienteDTO.profissao;
        if (updatePacienteDTO.origem) paciente.origem = updatePacienteDTO.origem;
        
        return paciente;
    }

    private stringToDate = (data: any) : Date => {
        if (data instanceof Date && !isNaN(data.getTime())) {
            return data;
        }
        const [day, month, year] = data.split("/");
        return new Date(parseInt(year), parseInt(month)-1, parseInt(day));
    }

}