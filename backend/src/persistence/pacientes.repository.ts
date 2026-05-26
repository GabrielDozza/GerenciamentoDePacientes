import { Injectable } from "@nestjs/common";
import prisma from "../../prisma/prisma.js";
import type { Paciente, PacienteType } from "../domain/models/paciente.model.js";
import { IPacienteRepository } from "../domain/repository/paciente.js";
import { PacienteMapper } from "../application/mappers/paciente.mapper.js";

@Injectable()
export class PacienteRepository implements IPacienteRepository{
    constructor( 
        private readonly pacienteMapper : PacienteMapper 
    ){};

    public async getPacientes() : Promise<Paciente[]>{
        const pacientes = await prisma.paciente.findMany({});
        return pacientes;
    };

    public async getPacientesId(id: String) : Promise<Paciente> {
        const paciente = await prisma.paciente.findFirst({
            where: { id: Number(id) }
        });

        return this.pacienteMapper.toDomain(paciente);
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
                profissao: body.profissao,
                origem: body.origem,
                eventos: body.eventos,
                evolucoes: body.evolucoes
            }
        });

        return paciente;
    };

    public async patchPaciente(id: String, body: any) : Promise<Paciente>{
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