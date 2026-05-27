import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { getPacientes, getPacientesId, patchPaciente, postPaciente } from "../../persistence/pacientes";
import verificaDadosBody from "../middlewares/pacientes";

@Controller("pacientes")
export class pacientesController {

    // GETS
    @Get()
    getPacientes() {
        const pacientes = getPacientes();
        return pacientes;
    };

    @Get(":id")
    getPacientesId(@Param("id") idRecebido: String) {
        const paciente = getPacientesId(idRecebido);
        return paciente;
    };

    //POSTS
    @Post()
    postPaciente(@Body() body: any) {
        verificaDadosBody(body);

        const paciente = postPaciente(body);
        return paciente;
    };

    @Patch(":id")
    patchPaciente(@Param("id") idRecebido: String, @Body() body: any) {
        console.log(idRecebido);
        verificaDadosBody(body);

        const paciente = patchPaciente(idRecebido, body);
        return paciente;
    };
};