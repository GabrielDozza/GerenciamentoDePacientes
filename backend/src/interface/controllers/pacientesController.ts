import { Body, Controller, Delete, Get, Headers, Param, Patch, Post } from "@nestjs/common";
import { deletePacienteId, getPacientes, getPacientesCpf, getPacientesId, patchPaciente, postPaciente } from "../../persistence/pacientes";
import { verificaDadosPathBody, verificaDadosPostBody, verificaIdReceibo } from "../middlewares/pacientes";
import { getEventosPaciente, postEventoPaciente } from "../../persistence/eventos";
import { getEvolucoesPaciente, postEvolucaoPaciente } from "../../persistence/evolucoes";
import { verificadorToken } from "../middlewares/tokenJwt";

@Controller("pacientes")
export class pacientesController {

    // PACIENTES
    @Get()
    async getPacientes(@Headers("Authorization") token: String) {
        verificadorToken(token);

        const pacientes = await getPacientes();
        return pacientes;
    };

    @Get("/cpf/:cpf")
    async getPacienteCpf(@Headers("Authorization") token: String, @Param("cpf") cpfRecebido: String) {
        verificadorToken(token);

        const paciente = await getPacientesCpf(cpfRecebido);
        return paciente;
    };

    @Get(":id")
    async getPacientesId(@Param("id") idRecebido: String, @Headers("Authorization") token: String) {
        verificaIdReceibo(idRecebido);
        verificadorToken(token);

        const paciente = await getPacientesId(idRecebido);
        return paciente;
    };

    @Post()
    async postPaciente(@Body() body: any, @Headers("Authorization") token: String) {
        verificadorToken(token);
        verificaDadosPostBody(body);

        const paciente = await postPaciente(body);
        return paciente;
    };

    @Patch(":id")
    async patchPaciente(@Param("id") idRecebido: String, @Body() body: any, @Headers("Authorization") token: String) {
        verificaIdReceibo(idRecebido);
        verificadorToken(token);
        verificaDadosPathBody(body);

        const paciente = await patchPaciente(idRecebido, body);
        return paciente;
    };

    @Delete(":id")
    async deletePacienteId(@Param("id") idRecebido: String, @Headers("Authorization") token: String) {
        verificaIdReceibo(idRecebido);
        verificadorToken(token);

        const paciente = await deletePacienteId(idRecebido);
        return paciente
    };

    // PACIENTE EVENTOS
    @Get(":id/eventos")
    async getEventosPaciente(@Param("id") idRecebido: String, @Headers("Authorization") token: string) {
        verificaIdReceibo(idRecebido);
        verificadorToken(token);

        const eventos = await getEventosPaciente(idRecebido);
        return eventos;
    };

    @Post(":id/eventos")
    async postEventoPacaiente(@Param("id") idRecebido: String, @Body() body: any, @Headers("Authorization") token: string) {
        verificaIdReceibo(idRecebido);
        verificadorToken(token);

        const evento = await postEventoPaciente(idRecebido, body);
        return evento;
    };

    // PACIENTE EVOLUCOES
    @Get(":id/evolucoes")
    async getEvolucoesPaciente(@Param("id") idRecebido: String, @Headers("Authorization") token: string) {
        verificaIdReceibo(idRecebido);
        verificadorToken(token);

        const evolucoes = await getEvolucoesPaciente(idRecebido);
        return evolucoes;
    };

    @Post(":id/evolucoes")
    async postEvolucaoPaciente(@Param("id") idRecebido: String, @Body() body: any, @Headers("Authorization") token: string) {
        verificaIdReceibo(idRecebido);
        verificadorToken(token);

        const evolucao = await postEvolucaoPaciente(idRecebido, body);
        return evolucao;
    };
};