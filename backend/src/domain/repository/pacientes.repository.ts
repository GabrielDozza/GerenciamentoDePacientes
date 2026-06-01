import { Injectable } from "@nestjs/common";
import prisma from "../../../prisma/prisma"
import type { Paciente } from "../models/paciente.model";
import { IPacienteRepository } from "./pacientes";
import { PacienteMapper } from "../../application/mappers/paciente.mapper";
import { PacienteDTO, UpdatePacienteDTO } from "../../interface/dto/paciente.dto";
import { getPacientes, getPacientesId } from "../../persistence/pacientes";
import { get } from "http";

@Injectable()
export class PacienteRepository implements IPacienteRepository{
    constructor( 
        private readonly pacienteMapper : PacienteMapper 
    ){};

    public async getPacientes() : Promise<PacienteDTO[]>{
        const pacientes = await getPacientes();
        let pArray: PacienteDTO[] = [];
        for (const p of pacientes) {
            const pDTO : PacienteDTO = {
                id: p.id,
                nome: p.nome,
                cpf: p?.cpf?? undefined,
                dataNascimento: p?.dataNascimento?? undefined,
                telefone: p?.telefone?? undefined,
                email: p?.email?? undefined,
                endereco: p?.endereco?? undefined,
                eventos: [],
                evolucoes: []
            }
            const pacienteResponse = this.pacienteMapper.toDTO(pDTO);
            pArray.push(pacienteResponse);
        }
        return pArray;
    };

    public async getPacientesId(id: String) : Promise<PacienteDTO | null> {
        const paciente = await getPacientesId(id);
        if (!paciente) {
            return null;
        }
        const pacienteDTO : PacienteDTO = {
            id: paciente.id,
            nome: paciente.nome,
            cpf: paciente?.cpf?? undefined,
            dataNascimento: paciente?.dataNascimento?? undefined,
            telefone: paciente?.telefone?? undefined,
            email: paciente?.email?? undefined,
            endereco: paciente?.endereco?? undefined,
            eventos: [],
            evolucoes: []
        }
        return pacienteDTO;
    };

    public async postPaciente(body: any) : Promise<PacienteDTO>{
        const paciente = await prisma.paciente.create({
            data: {
                nome: body.nome,
                dataNascimento: new Date(body.dataNascimento),
                telefone: body.telefone,
                email: body.email,
                cpf: body.cpf,
                endereco: body.endereco,
                //profissao: body.profissao,
                //origem: body.origem,
                eventos: body.eventos,
                evolucoes: body.evolucoes
            }
        });
        const pacienteDTO : PacienteDTO = {
            id: paciente.id,
            nome: paciente.nome,
            cpf: paciente?.cpf?? undefined,
            dataNascimento: paciente?.dataNascimento?? undefined,
            telefone: paciente?.telefone?? undefined,
            email: paciente?.email?? undefined,
            endereco: paciente?.endereco?? undefined,
            eventos: [],
            evolucoes: []
        }   
        const pacienteDomain = await this.pacienteMapper.toDomain(pacienteDTO);
        return pacienteDomain;
    };
/*
    public async patchPaciente(id: String, body: any) : Promise<PacienteDTO | null>{
        const paciente = await prisma.paciente.update({
            where: {
                id: Number(id)
            },

            data: {
                ...body
            }

            
        });

        return paciente;
    };

    public async deletePaciente(id: String) : Promise<Paciente>{
        const paciente = await prisma.paciente.delete({
            where: {
                id: Number(id)
            }
        })

        return paciente;
    };

*/
}