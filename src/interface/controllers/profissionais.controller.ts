import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProfissionalService } from "../../application/services/profissional.service";
import type { ProfissionalDTO, UpdateProfissionalDTO } from "../dto/profissional.dto";

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
    async postProfissional(@Body() body: ProfissionalDTO) {
        const novoProfissional = await this.profissionalService.create(body);
        return novoProfissional;
    };

    @Patch(":id")
    async patchProfissional(@Param("id") idRecebido: String, @Body() body: UpdateProfissionalDTO) {
        const profissional = await this.profissionalService.patch(idRecebido, body);
        return profissional;
    }

    @Delete(":id")
    async deleteProfissional(@Param("id") idRecebido: string) {
        const profissional = await this.profissionalService.delete(idRecebido);
        return profissional;
    };
};