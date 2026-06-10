import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProfissionalService } from "../../application/services/profissional.service";
import { verificaDadosPatchProfissionais, verificaIdRecebido } from "../middlewares/profissionais";

@Controller("profissionais")
export class profissionaisController {
    constructor( private readonly profissionalService : ProfissionalService ){}
    // profissionais
    @Get()
    async getProfissionais() {
        const profissionais = await this.profissionalService.getAll();
        return profissionais;
    };

    @Get(":id")
    async getProfissionalId(@Param("id") idRecebido: String) {
        const profissional = await this.profissionalService.getById(idRecebido)
        return profissional;
    };

    @Post()
    async postProfissional(@Body() body: any) {
        const novoProfissional = await this.profissionalService.create(body);
        return novoProfissional;
    };

    @Patch(":id")
    async patchProfissional(@Param("id") idRecebido: String, @Body() body: any) {
        verificaIdRecebido(idRecebido);
        verificaDadosPatchProfissionais(idRecebido);
        const updatedPro = await this.profissionalService.patch(idRecebido, body);
        return updatedPro;
    }

    @Delete(":id")
    async deleteProfissional(@Param("id") idRecebido: string) {
        const profissional = await this.profissionalService.delete(idRecebido);
        return profissional;
    };
};