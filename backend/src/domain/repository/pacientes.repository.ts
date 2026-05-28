import { Injectable } from "@nestjs/common";
import prisma from "../../../prisma/prisma"
import type { Paciente } from "../models/paciente.model";
import { IPacienteRepository } from "./pacientes";
import { PacienteMapper } from "../../application/mappers/paciente.mapper";
import { CreatePacienteDTO, PacienteResponseDTO, UpdatePacienteDTO } from "../../interface/dto/paciente.dto";

@Injectable()
export class PacienteRepository implements IPacienteRepository{
    constructor( 
        private readonly pacienteMapper : PacienteMapper 
    ){};

    public async getPacientes() : Promise<PacienteResponseDTO[]>{
        const pacientes = await prisma.paciente.findMany({
            select: {
                id: true,
                nome: true,
                cpf: true,
                dataNascimento: true,
                telefone: true,
                email: true,
                endereco: true,
                eventos: true,
                evolucoes: true
            }
        });
        let pArray: PacienteResponseDTO[] = [];
        for (const p of pacientes) {
            const pDTO : CreatePacienteDTO = {
                id: p.id,
                nome: p.nome,
                cpf: p?.cpf?? undefined,
                dataNascimento: p?.dataNascimento?? undefined,
                telefone: p?.telefone?? undefined,
                email: p?.email?? undefined,
                endereco: p?.endereco?? undefined,
                eventos: p.eventos,
                evolucoes: p.evolucoes
            }
            const pacienteDomain = await this.pacienteMapper.toDomain(pDTO);
            const pacienteResponse = this.pacienteMapper.toDTO(pacienteDomain);
            pArray.push(pacienteResponse);
        }
        return pArray;
    };

    public async getPacientesId(id: String) : Promise<PacienteResponseDTO | null> {
        const paciente = await prisma.paciente.findFirst({
            where: { id: Number(id) },
            select: {
                id: true,
                nome: true,
                cpf: true,
                dataNascimento: true,
                telefone: true,
                email: true,
                endereco: true,
                eventos: true,
                evolucoes: true
            }
        });
        if (!paciente) {
            return null;
        }
        const pacienteDTO : CreatePacienteDTO = {
            id: paciente.id,
            nome: paciente.nome,
            cpf: paciente?.cpf?? undefined,
            dataNascimento: paciente?.dataNascimento?? undefined,
            telefone: paciente?.telefone?? undefined,
            email: paciente?.email?? undefined,
            endereco: paciente?.endereco?? undefined,
            eventos: paciente.eventos,
            evolucoes: paciente.evolucoes
        }
        const pacienteDomain = await this.pacienteMapper.toDomain(pacienteDTO);
        const pacienteResponse = this.pacienteMapper.toDTO(pacienteDomain);               
        
        return pacienteResponse;
    };

    public async postPaciente(body: any) : Promise<Paciente>{
        const paciente = await prisma.paciente.create({
            data: {
                nome: body.nome,
                dataNascimento: body.dataNascimento,
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
        const pacienteDTO : CreatePacienteDTO = {
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

    public async patchPaciente(id: String, body: any) : Promise<PacienteResponseDTO | null>{
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


}