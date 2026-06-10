import { Body, Controller, Delete, Get, Param, Patch, Post, Headers } from "@nestjs/common";
import type { PacienteDTO, UpdatePacienteDTO } from "../dto/paciente.dto";
import type { Paciente } from "../../domain/models/paciente.model";
import { PacienteService } from "../../application/services/paciente.service";
import { verificadorToken } from "../middlewares/tokenJwt";
import type { EventoDTO } from "../dto/evento.dto";
import type { EvolucaoDTO } from "../dto/evolucao.dto";
import { EventoService } from "../../application/services/evento.service";
import { EvolucaoService } from "../../application/services/evolucao.service";
import verificaDadosPostEventos from "../middlewares/eventos";
import { verificaIdRecebido } from "../middlewares/pacientes";

@Controller("pacientes")
export class PacientesController {
    constructor(
        private readonly pacienteService: PacienteService,
        private readonly eventoService: EventoService,
        private readonly evolucaoService: EvolucaoService
    ) {}

    // GETS
    @Get()
    async getPacientes(/*@Headers("Authorization") token: String*/) {
        //verificadorToken(token);
        const pacientes = await this.pacienteService.getAll();
        return pacientes;
    };

    @Get("/cpf/:cpf")
    async getPacienteCpf(@Headers("Authorization") token: String, @Param("cpf") cpfRecebido: String) {
        //verificadorToken(token);
        const paciente = await this.pacienteService.getByCpf(cpfRecebido);
        return paciente;
    };

    @Get(":id")
    async getPacientesId(@Param("id") idRecebido: String, @Headers("Authorization") token: String) {
        //verificadorToken(token);
        const paciente = await this.pacienteService.getById(idRecebido);
        return paciente;
    };

    //POSTS
    @Post()
    async postPaciente(@Body() body: any/*, @Headers("Authorization") token: String*/) {
        //verificadorToken(token);
        const novoPaciente = await this.pacienteService.create(body);
        return novoPaciente;
    };

    @Patch(":id")
    async patchPaciente(@Param("id") idRecebido: String, @Body() update: any, @Headers("Authorization") token: String) {
        //verificadorToken(token);
        verificaIdRecebido(idRecebido);
        //console.log(idRecebido);
        const updatePaciente = await this.pacienteService.patch(idRecebido, update)
        if (updatePaciente == null){
            return null;
        }
        return updatePaciente;
    };

    @Delete(":id")
    async deletePaciente(@Param("id") idRecebido: String, @Headers("Authorization") token: String) {
        //verificadorToken(token);
        console.log(idRecebido);
        const paciente = await this.pacienteService.delete(idRecebido);
        return paciente;
    };

    // PACIENTE EVENTOS
    @Get(":id/eventos")
    async getEventosPaciente(@Param("id") idRecebido: String, @Headers("Authorization") token: string) {
        //verificadorToken(token);

        const eventos = await this.pacienteService.getEventos(idRecebido);
        return eventos;
    };

    @Post(":id/eventos")
    async postEventoPaciente(@Param("id") idRecebido: String, @Body() body: any, @Headers("Authorization") token: string) {
        //verificadorToken(token);
        verificaIdRecebido(idRecebido);
        verificaDadosPostEventos(body);
        body.pacienteId = Number(idRecebido);
        const evento = await this.eventoService.create(idRecebido, body);
        return evento;
    };

    // PACIENTE EVOLUCOES
    @Get(":id/evolucoes")
    async getEvolucoesPaciente(@Param("id") idRecebido: String, @Headers("Authorization") token: string) {
        //verificadorToken(token);
        verificaIdRecebido(idRecebido);

        const evolucoes = await this.pacienteService.getEvolucoes(idRecebido);
        return evolucoes;
    };

    @Post(":id/evolucoes")
    async postEvolucaoPaciente(@Param("id") idRecebido: String, @Body() body: any, @Headers("Authorization") token: string) {
        //verificadorToken(token);
        //verificaDadosPostEventos(idRecebido); //essa funcao não tem versao para evolucoes

        const evolucao = await this.pacienteService.addEvolucao(idRecebido, body);
        return evolucao;
    };

};