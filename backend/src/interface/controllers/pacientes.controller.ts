import { Controller, Get } from "@nestjs/common";
import { PacienteRepository } from "../../persistence/pacientes.repository";

@Controller("pacientes")
export class PacientesController {

    @Get()
    getPacientes() {
        const pacientes = this.pacienteRepository.getPacientes();
        return pacientes;
    };
};