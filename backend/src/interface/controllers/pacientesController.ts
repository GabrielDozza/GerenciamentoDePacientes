import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { deletePacienteId, getPacientes, getPacientesId, patchPaciente, postPaciente } from "../../persistence/pacientes";
import { trataErrosPostPaciente, verificaDadosPathBody, verificaDadosPostBody, verificaIdReceibo } from "../middlewares/pacientes";
import { getEventosPaciente, postEventoPaciente } from "../../persistence/eventos";
import { getEvolucoesPaciente, postEvolucaoPaciente } from "../../persistence/evolucoes";
import e from "express";

@Controller("pacientes")
export class pacientesController {

    // PACIENTES
    @Get()
    async getPacientes() {
        const pacientes = await getPacientes();
        return pacientes;
    };

    @Get(":id")
    async getPacientesId(@Param("id") idRecebido: String) {
        verificaIdReceibo(idRecebido);

        const paciente = await getPacientesId(idRecebido);
        return paciente;
    };

    @Post()
    async postPaciente(@Body() body: any) {
        try {
            verificaDadosPostBody(body);

            const paciente = await postPaciente(body);
            return paciente;
        } catch(erro) {
            return trataErrosPostPaciente(erro);
        };
    };

    @Patch(":id")
    async patchPaciente(@Param("id") idRecebido: String, @Body() body: any) {
        verificaDadosPathBody(body);

        const paciente = await patchPaciente(idRecebido, body);
        return paciente;
    };

    @Delete(":id")
    async deletePacienteId(@Param("id") idRecebido: String) {
        verificaIdReceibo(idRecebido);

        const paciente = await deletePacienteId(idRecebido);
        return paciente
    };

    // PACIENTE EVENTOS
    @Get(":id/eventos")
    async getEventosPaciente(@Param("id") idRecebido: String) {
        verificaIdReceibo(idRecebido);

        const eventos = await getEventosPaciente(idRecebido);
        return eventos;
    };

    @Post(":id/eventos")
    async postEventoPacaiente(@Param("id") idRecebido: String, @Body() body: any) {
        verificaIdReceibo(idRecebido);

        const evento = await postEventoPaciente(idRecebido, body);
        return evento;
    };

    // PACIENTE EVOLUCOES
    @Get(":id/evolucoes")
    async getEvolucoesPaciente(@Param("id") idRecebido: String) {
        const evolucoes = await getEvolucoesPaciente(idRecebido);
        return evolucoes;
    };

    @Post(":id/evolucoes")
    async postEvolucaoPaciente(@Param("id") idRecebido: String, @Body() body: any) {
        const evolucao = await postEvolucaoPaciente(idRecebido, body);
        return evolucao;
    };
};