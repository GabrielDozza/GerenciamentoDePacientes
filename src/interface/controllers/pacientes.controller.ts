import { Body, Controller, Delete, Get, Param, Patch, Post, Headers } from "@nestjs/common";
import type { PacienteDTO, UpdatePacienteDTO } from "../dto/paciente.dto";
import type { Paciente } from "../../domain/models/paciente.model";
import { PacienteService } from "../../application/services/paciente.service";
import { verificadorToken } from "../middlewares/tokenJwt";

@Controller("pacientes")
export class PacientesController {
    constructor(private readonly pacienteService: PacienteService) {}

    // GETS
    @Get()
    async getPacientes(@Headers("Authorization") token: String) {
        verificadorToken(token);
        const pacientes = await this.pacienteService.getAll();
        return pacientes;
    };

    @Get("/cpf/:cpf")
    async getPacienteCpf(@Headers("Authorization") token: String, @Param("cpf") cpfRecebido: String) {
        verificadorToken(token);

        const paciente = await this.pacienteService.getByCpf(cpfRecebido);
        return paciente;
    };

    @Get(":id")
    async getPacientesId(@Param("id") idRecebido: String, @Headers("Authorization") token: String) {
        verificadorToken(token);
        const paciente = await this.pacienteService.getById(idRecebido);
        return paciente;
    };

    //POSTS
    @Post()
    async postPaciente(@Body() body: PacienteDTO, @Headers("Authorization") token: String) {
        verificadorToken(token);
        const novoPaciente = await this.pacienteService.create(body);
        return novoPaciente;
    };

    @Patch(":id")
    async patchPaciente(@Param("id") idRecebido: String, @Body() update: UpdatePacienteDTO, @Headers("Authorization") token: String) {
        verificadorToken(token);
        console.log(idRecebido);
        const updatePaciente = await this.pacienteService.patch(idRecebido, update)
        if (updatePaciente == null){
            return null;
        }
        return updatePaciente;
    };

    @Delete(":id")
    async deletePaciente(@Param("id") idRecebido: String, @Headers("Authorization") token: String) {
        verificadorToken(token);
        console.log(idRecebido);
        const paciente = await this.pacienteService.delete(idRecebido);
        return paciente;
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