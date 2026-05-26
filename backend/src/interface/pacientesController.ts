import { Controller, Get } from "@nestjs/common";
import { getPacientes } from "../persistence/pacientes";

@Controller("pacientes")
export class pacientesController {

    @Get()
    getPacientes() {

        const pacientes = getPacientes();
        return pacientes;
    };
};