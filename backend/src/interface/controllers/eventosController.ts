import { Controller, Get } from "@nestjs/common";

@Controller("eventos")
export class eventosController {
    
    // GETS
    @Get("")
    getPacienteIdEventos() {
        return "oi";
    };
};