import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { getPacientes, getPacientesId, patchPaciente, postPaciente } from "../../persistence/pacientes";
import verificaDadosBody from "../middlewares/pacientes";
import type { PacienteDTO, UpdatePacienteDTO } from "../dto/paciente.dto";
import type { Paciente } from "../../domain/models/paciente.model";
import { PacienteService } from "../../application/services/paciente.service";

@Controller("pacientes")
export class PacientesController {
    constructor(private readonly pacienteService: PacienteService) {}

    // GETS
    @Get()
    async getPacientes() {
        const pacientes = await getPacientes();
        return pacientes;
    };

    @Get(":id")
    async getPacientesId(@Param("id") idRecebido: String) {
        const paciente = await getPacientesId(idRecebido);
        return paciente;
    };

    //POSTS
    @Post()
    async postPaciente(@Body() body: PacienteDTO) {
        const novoPaciente = await this.pacienteService.create(body);
        const paciente = await postPaciente(novoPaciente);
        return paciente;
    };

    @Patch(":id")
    async patchPaciente(@Param("id") idRecebido: String, @Body() body: UpdatePacienteDTO) {
        console.log(idRecebido);

        const paciente = await patchPaciente(idRecebido, body);
        return paciente;
    };
};