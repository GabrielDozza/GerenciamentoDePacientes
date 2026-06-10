import { Body, Controller, Delete, Get, Param, Patch, Post, Headers } from "@nestjs/common";
import { PacienteService } from "../../application/services/paciente.service";
import { verificadorToken } from "../middlewares/tokenJwt";
import { EventoService } from "../../application/services/evento.service";
import { EvolucaoService } from "../../application/services/evolucao.service";
import verificaDadosPostEventos from "../middlewares/eventos";
import { verificaDadosPatchBody, verificaDadosPostBody, verificaIdRecebido } from "../middlewares/pacientes";

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
        console.log(`getPacientes from pacientes.controller`)
        //verificadorToken(token);
        
        const pacientes = await this.pacienteService.getAll();
        return pacientes;
    };

    @Get(":id")
    async getPacientesId(@Param("id") idRecebido: String, /*@Headers("Authorization") token: String*/) {
        console.log(`getPacientesId from pacientes.controller`)
        //verificadorToken(token);
        verificaIdRecebido(idRecebido);

        const paciente = await this.pacienteService.getById(idRecebido);
        return paciente;
    };

    //POSTS
    @Post()
    async postPaciente(@Body() body: any/*, @Headers("Authorization") token: String*/) {
        console.log(`postPaciente from pacientes.controller`)
        //verificadorToken(token);
        verificaDadosPostBody(body);
        
        const novoPaciente = await this.pacienteService.create(body);
        return novoPaciente;
    };

    @Patch(":id")
    async patchPaciente(@Param("id") idRecebido: String, @Body() update: any/*, @Headers("Authorization") token: String*/) {
        console.log(`patchPaciente from pacientes.controller`)
        //verificadorToken(token);
        verificaIdRecebido(idRecebido);
        verificaDadosPatchBody(update);
        
        const updatePaciente = await this.pacienteService.patch(idRecebido, update)
        return updatePaciente;
    };

    @Delete(":id")
    async deletePaciente(@Param("id") idRecebido: String/*, @Headers("Authorization") token: String*/) {
        console.log(`deletePaciente from pacientes.controller`)
        //verificadorToken(token);
        verificaIdRecebido(idRecebido);

        const paciente = await this.pacienteService.delete(idRecebido);
        return paciente;
    };

    // PACIENTE EVENTOS
    @Get(":id/eventos")
    async getEventosPaciente(@Param("id") idRecebido: String/*, @Headers("Authorization") token: string*/) {
        console.log(`getEventosPaciente from pacientes.controller`)
        //verificadorToken(token);
        verificaIdRecebido(idRecebido);

        const eventos = await this.pacienteService.getEventos(idRecebido);
        return eventos;
    };

    @Post(":id/eventos")
    async postEventoPaciente(@Param("id") idRecebido: String, @Body() body: any/*, @Headers("Authorization") token: string*/) {
        console.log(`postEventoPaciente from pacientes.controller`)
        //verificadorToken(token);
        verificaIdRecebido(idRecebido);
        verificaDadosPostEventos(body);

        const evento = await this.eventoService.create(idRecebido, body);
        return evento;
    };

    // PACIENTE EVOLUCOES
    @Get(":id/evolucoes")
    async getEvolucoesPaciente(@Param("id") idRecebido: String/*, @Headers("Authorization") token: string*/) {
        console.log(`getEvolucoesPaciente from pacientes.controller`)
        //verificadorToken(token);
        verificaIdRecebido(idRecebido);

        const evolucoes = await this.pacienteService.getEvolucoes(idRecebido);
        return evolucoes;
    };

    @Post(":id/evolucoes")
    async postEvolucaoPaciente(@Param("id") idRecebido: String, @Body() body: any/*, @Headers("Authorization") token: string*/) {
        console.log(`postEvolucaoPaciente from pacientes.controller`)
        //verificadorToken(token);
        verificaIdRecebido(idRecebido);
        //verificaDadosPostEventos(idRecebido); //essa funcao não tem versao para evolucoes

        const evolucao = await this.pacienteService.addEvolucao(idRecebido, body);
        return evolucao;
    };

};